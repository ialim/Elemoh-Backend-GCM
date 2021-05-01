import { Unit, UnitTC } from "./model";

const UnitQuery = {
  unitById: UnitTC.getResolver("findById"),
  unitByIds: UnitTC.getResolver("findByIds"),
  unitOne: UnitTC.getResolver("findOne"),
  unitMany: UnitTC.getResolver("findMany"),
  unitCount: UnitTC.getResolver("count"),
  unitConnection: UnitTC.getResolver("connection"),
  unitPagination: UnitTC.getResolver("pagination"),
};

const UnitMutation = {
  unitCreateOne: UnitTC.getResolver("createOne"),
  unitCreateMany: UnitTC.getResolver("createMany"),
  unitUpdateById: UnitTC.getResolver("updateById"),
  unitUpdateOne: UnitTC.getResolver("updateOne"),
  unitUpdateMany: UnitTC.getResolver("updateMany"),
  unitRemoveById: UnitTC.getResolver("removeById"),
  unitRemoveOne: UnitTC.getResolver("removeOne"),
  unitRemoveMany: UnitTC.getResolver("removeMany"),
};

export { UnitQuery, UnitMutation };
