import { Request, Response, Router } from "express";
import mCors from "../cors";
import {
  getAllUsersName,
  getUser,
  getUsers,
} from "./Users";
import {
  getAllFTs,
  getFTsNumber,
  myPlanning,
  getOrgaRequis,
} from "./FT";
import * as AuthHandlers from "./Auth";
import * as authMiddleware from "@src/middleware/auth";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const multer = require("multer");

function ping(req: Request, res: Response) {
  return res.send("pong");
}

// User-route
const userRouter = Router();
userRouter.get("/", authMiddleware.protect(), getUsers);
userRouter.get("/me", authMiddleware.protect(), getUser);
userRouter.get("/all", authMiddleware.protect(), getAllUsersName);

// FT-routes
const FTrouter = Router();
FTrouter.get("/", getAllFTs);
FTrouter.get("/count", authMiddleware.protect(), getFTsNumber);
FTrouter.get("/orga-requis/:userID", myPlanning);
FTrouter.get("/orga-requis", authMiddleware.protect(), getOrgaRequis);



// Export the base-router
const baseRouter = Router();
baseRouter.use("/user", userRouter);
baseRouter.use("/FT", FTrouter);

//auth
baseRouter.post("/signup", AuthHandlers.signup);
baseRouter.post("/login", AuthHandlers.login);

baseRouter.get("/test", authMiddleware.protect(), (req, res) => {
  res.status(200).json({ msg: "it wooooorks !" });
});

baseRouter.get(
  "/testRoles",
  authMiddleware.protect(),
  authMiddleware.verifyRoles("hard"),
  (req, res) => {
    res.status(200).json({ msg: "it wooooorks !" });
  }
);

// ping
baseRouter.get("/ping", authMiddleware.protect(), ping);

baseRouter.use(mCors);

export default baseRouter;
