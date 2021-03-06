import _ from "lodash";
/**
 * @deprecated
 */
export function hasRole(context: any, roles: string[] | string) {
  if (roles === undefined) {
    return true;
  }

  const teams = getUser(context)?.team;
  if (teams === undefined) {
    return false;
  }
  if (typeof roles == "string") {
    roles = [roles];
  }
  return roles.some((r) => teams.includes(r));
}

/**
 * @deprecated
 */
export function getUser(context: any) {
  return _.cloneDeep(context.$store.state.user.me);
}

/**
 * 
 */
export function getConfig(context: any, key: string) {
  const conf = context.$store.state.config.data.data.find(
    (e: { key: string }) => e.key === key
  );
  if (conf) {
    return _.cloneDeep(conf.value);
  }
  return undefined;
}
