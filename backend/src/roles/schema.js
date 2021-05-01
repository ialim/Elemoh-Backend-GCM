import { Role, RoleTC } from "./model";

const RoleQuery = {
  roleById: RoleTC.getResolver("findById"),
  roleByIds: RoleTC.getResolver("findByIds"),
  roleOne: RoleTC.getResolver("findOne"),
  roleMany: RoleTC.getResolver("findMany"),
  roleCount: RoleTC.getResolver("count"),
  roleConnection: RoleTC.getResolver("connection"),
  rolePagination: RoleTC.getResolver("pagination"),
};

const RoleMutation = {
  roleCreateOne: RoleTC.getResolver("createOne"),
  roleCreateMany: RoleTC.getResolver("createMany"),
  roleUpdateById: RoleTC.getResolver("updateById"),
  roleUpdateOne: RoleTC.getResolver("updateOne"),
  roleUpdateMany: RoleTC.getResolver("updateMany"),
  roleRemoveById: RoleTC.getResolver("removeById"),
  roleRemoveOne: RoleTC.getResolver("removeOne"),
  roleRemoveMany: RoleTC.getResolver("removeMany"),
};

export { RoleQuery, RoleMutation };
