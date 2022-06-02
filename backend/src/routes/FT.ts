import {Request, Response} from "express";
import FTModel, {IFT} from "@entities/FT";
import logger from "@shared/Logger";
import FAModel from "@entities/FA";
import {Schema, Types} from "mongoose";

export async function getAllFTs(req: Request, res: Response) {
  const mFTs = await FTModel.find({});
  res.json({data: mFTs});
}

export async function getFTByID(req: Request, res: Response) {
  const mFT = await FTModel.findOne({count: +req.params.FTID});
  res.json(mFT);
}




export async function getFTsNumber(req: Request, res: Response) {
  const FTs: Array<{ _id: { count: number; status: string; FA: number } }> =
    await FTModel.aggregate()
      .match({
        $and: [{isValid: {$ne: false}}],
      })
      .group({
        _id: {
          count: "$count",
          status: "$status",
          FA: "$FA",
        },
      });

  const FAs: Array<{ _id: { count: number; team: string } }> =
    await FAModel.aggregate().group({
      _id: {
        count: "$count",
        team: "$general.team",
      },
    });
  const r = FTs.map((ft) => {
    const FA = FAs.find((e) => e._id.count === ft._id.FA);
    if (FA != null) {
      return {
        status: ft._id.status,
        team: FA._id.team,
      };
    } else {
      return {
        status: ft._id.status,
        team: "undefined",
      };
    }
  });
  const groupBy = <T, K extends keyof any>(list: T[], getKey: (item: T) => K) =>
    list.reduce((previous, currentItem) => {
      const group = getKey(currentItem);
      if (!previous[group]) previous[group] = [];
      previous[group].push(currentItem);
      return previous;
    }, {} as Record<K, T[]>);
  const t = groupBy(r, (i) => i.team);
  const result: Array<any> = [];
  for (const i in t) {
    const status: {
      draft: number;
      refused: number;
      submitted: number;
      validated: number;
    } = {
      draft: 0,
      refused: 0,
      submitted: 0,
      validated: 0,
    };
    let total = 0;
    for (const j in t[i]) {
      switch (t[i][j].status) {
        case "draft":
          status.draft++;
          break;
        case "refused":
          status.refused++;
          break;
        case "submitted":
          status.submitted++;
          break;
        case "validated":
          status.validated++;
          break;
        default:
          logger.info("Error in the FT count endpoint");
      }
      total++;
    }
    result.push({
      team: i,
      status: status,
      total: total,
    });
    result.sort(
      (a, b) => 0 - (a.team.toLowerCase() > b.team.toLowerCase() ? -1 : 1)
    );
  }
  logger.info("getting FTs count");
  res.json(result);
}


export async function myPlanning(req: Request, res: Response) {
  const FTs =
    await FTModel.aggregate()
      .match({
        $and: [{isValid: {$ne: false}}],
      })
      .unwind({path: "$timeframes"})
      .sort("timeframes.start")
      .unwind({path: "$timeframes.required"})
      .match({"timeframes.required.user._id": Types.ObjectId(req.params.userID)})
      .match({"timeframes.required.type": "user"})
      .lookup({
        from: "conflicts",
        localField: "timeframes.required.user._id",
        foreignField: "user",
        let: {id: "$timeframes._id"},
        pipeline: [
          {
            $match: {
              $expr: {
                $or: [
                  {$eq: ["$$id", "$tf1"]},
                  {$eq: ["$$id", "$tf2"]}
                ]
              }
            }
          }
        ],
        as: "conflicts"
      })
      .group({
          _id: "$timeframes.required.user.username",
          fts: {
            $push: {
              count: "$count",
              name: "$general.name",
              TFname: "$timeframes.name",
              status: "$status",
              start: "$timeframes.start",
              end: "$timeframes.end",
              _id: "$_id",
              description : "$details.description"
            },
          }
        }
      );
  res.json(FTs);
}

export async function getOrgaRequis(req: Request, res: Response) {
  const FTs =
    await FTModel.aggregate()
      .match({
        $and: [{isValid: {$ne: false}}],
      })
      .unwind({path: "$timeframes"})
      .sort("timeframes.start")
      .unwind({path: "$timeframes.required"})
      .match({"timeframes.required.type": "user"})
      .lookup({
        from: "conflicts",
        localField: "timeframes.required.user._id",
        foreignField: "user",
        let: {id: "$timeframes._id"},
        pipeline: [
          {
            $match: {
              $expr: {
                $or: [
                  {$eq: ["$$id", "$tf1"]},
                  {$eq: ["$$id", "$tf2"]}
                ]
              }
            }
          }
        ],
        as: "conflicts"
      })
      .group({
          _id: "$timeframes.required.user.username",
          fts: {
            $push: {
              count: "$count",
              name: "$general.name",
              status: "$status",
              start: "$timeframes.start",
              end: "$timeframes.end",
            },
          }
        }
      )
      .match({$and: [{_id: {$ne: {}}}, {_id: {$ne: null}}]})
      .sort("_id");
  res.json(FTs);
}
