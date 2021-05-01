import { CustomerGroup, CustomerGroupTC } from "./model";

const CustomerGroupQuery = {
  customerGroupById: CustomerGroupTC.getResolver("findById"),
  customerGroupByIds: CustomerGroupTC.getResolver("findByIds"),
  customerGroupOne: CustomerGroupTC.getResolver("findOne"),
  customerGroupMany: CustomerGroupTC.getResolver("findMany"),
  customerGroupCount: CustomerGroupTC.getResolver("count"),
  customerGroupConnection: CustomerGroupTC.getResolver("connection"),
  customerGroupPagination: CustomerGroupTC.getResolver("pagination"),
};

const CustomerGroupMutation = {
  customerGroupCreateOne: CustomerGroupTC.getResolver("createOne"),
  customerGroupCreateMany: CustomerGroupTC.getResolver("createMany"),
  customerGroupUpdateById: CustomerGroupTC.getResolver("updateById"),
  customerGroupUpdateOne: CustomerGroupTC.getResolver("updateOne"),
  customerGroupUpdateMany: CustomerGroupTC.getResolver("updateMany"),
  customerGroupRemoveById: CustomerGroupTC.getResolver("removeById"),
  customerGroupRemoveOne: CustomerGroupTC.getResolver("removeOne"),
  customerGroupRemoveMany: CustomerGroupTC.getResolver("removeMany"),
};

export { CustomerGroupQuery, CustomerGroupMutation };
