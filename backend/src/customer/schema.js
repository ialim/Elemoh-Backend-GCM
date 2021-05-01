import { CustomerGroupTC } from "../customer_group/model";
import { UserTC } from "../users/model";
import { Customer, CustomerTC } from "./model";

const CustomerQuery = {
  customerById: CustomerTC.getResolver("findById"),
  customerByIds: CustomerTC.getResolver("findByIds"),
  customerOne: CustomerTC.getResolver("findOne"),
  customerMany: CustomerTC.getResolver("findMany"),
  customerCount: CustomerTC.getResolver("count"),
  customerConnection: CustomerTC.getResolver("connection"),
  customerPagination: CustomerTC.getResolver("pagination"),
};

const CustomerMutation = {
  customerCreateOne: CustomerTC.getResolver("createOne"),
  customerCreateMany: CustomerTC.getResolver("createMany"),
  customerUpdateById: CustomerTC.getResolver("updateById"),
  customerUpdateOne: CustomerTC.getResolver("updateOne"),
  customerUpdateMany: CustomerTC.getResolver("updateMany"),
  customerRemoveById: CustomerTC.getResolver("removeById"),
  customerRemoveOne: CustomerTC.getResolver("removeOne"),
  customerRemoveMany: CustomerTC.getResolver("removeMany"),
};

const CustomerRelation = {
  customerGroupResolver: CustomerTC.addRelation("customer_group", {
    resolver: () => CustomerGroupTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.customer_group || null,
    },
    projection: { customer_group: true },
  }),

  customerUserResolver: CustomerTC.addRelation("user", {
    resolver: () => UserTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.user || null,
    },
    projection: { user: true },
  }),
};

export { CustomerQuery, CustomerMutation, CustomerRelation };
