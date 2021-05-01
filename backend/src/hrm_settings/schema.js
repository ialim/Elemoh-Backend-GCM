import { HrmSetting, HrmSettingTC } from "./model";

const HrmSettingQuery = {
  hrmSettingById: HrmSettingTC.getResolver("findById"),
  hrmSettingByIds: HrmSettingTC.getResolver("findByIds"),
  hrmSettingOne: HrmSettingTC.getResolver("findOne"),
  hrmSettingMany: HrmSettingTC.getResolver("findMany"),
  hrmSettingCount: HrmSettingTC.getResolver("count"),
  hrmSettingConnection: HrmSettingTC.getResolver("connection"),
  hrmSettingPagination: HrmSettingTC.getResolver("pagination"),
};

const HrmSettingMutation = {
  hrmSettingCreateOne: HrmSettingTC.getResolver("createOne"),
  hrmSettingCreateMany: HrmSettingTC.getResolver("createMany"),
  hrmSettingUpdateById: HrmSettingTC.getResolver("updateById"),
  hrmSettingUpdateOne: HrmSettingTC.getResolver("updateOne"),
  hrmSettingUpdateMany: HrmSettingTC.getResolver("updateMany"),
  hrmSettingRemoveById: HrmSettingTC.getResolver("removeById"),
  hrmSettingRemoveOne: HrmSettingTC.getResolver("removeOne"),
  hrmSettingRemoveMany: HrmSettingTC.getResolver("removeMany"),
};

export { HrmSettingQuery, HrmSettingMutation };
