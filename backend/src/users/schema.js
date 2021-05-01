import { RoleTC } from "../roles/model";
import { WarehouseTC } from "../warehouses/model";
import { User, UserTC } from "./model";

const UserQuery = {
  userById: UserTC.getResolver("findById"),
  userByIds: UserTC.getResolver("findByIds"),
  userOne: UserTC.getResolver("findOne"),
  userMany: UserTC.getResolver("findMany"),
  userCount: UserTC.getResolver("count"),
  userConnection: UserTC.getResolver("connection"),
  userPagination: UserTC.getResolver("pagination"),
};

const UserMutation = {
  userCreateOne: UserTC.getResolver("createOne"),
  userCreateMany: UserTC.getResolver("createMany"),
  userUpdateById: UserTC.getResolver("updateById"),
  userUpdateOne: UserTC.getResolver("updateOne"),
  userUpdateMany: UserTC.getResolver("updateMany"),
  userRemoveById: UserTC.getResolver("removeById"),
  userRemoveOne: UserTC.getResolver("removeOne"),
  userRemoveMany: UserTC.getResolver("removeMany"),
};

const UserRelation = {
  userRoleResolver: UserTC.addRelation("role", {
    resolver: () => RoleTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.role || null,
    },
    projection: { role: true },
  }),

  userWarehousesResolver: UserTC.addRelation("warehouses", {
    resolver: () => WarehouseTC.getResolver("findByIds"),
    prepareArgs: {
      _ids: (source) => source.warehouses || [],
    },
    projection: { warehouses: true },
  }),

  userPersonnelResolver: UserTC.addRelation("Personnel", {
    resolver: () => UserTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.peronnel || null,
      personnelModel: (source) => source.personnelModel || null,
    },
    projection: { personnel: true, personnelModel: true },
  }),
};

export { UserQuery, UserMutation, UserRelation };
