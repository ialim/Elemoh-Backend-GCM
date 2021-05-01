import { CustomerTC } from "../customer/model";
import { UserTC } from "../users/model";
import { Deposit, DepositTC } from "./model";

const DepositQuery = {
  depositById: DepositTC.getResolver("findById"),
  depositByIds: DepositTC.getResolver("findByIds"),
  depositOne: DepositTC.getResolver("findOne"),
  depositMany: DepositTC.getResolver("findMany"),
  depositCount: DepositTC.getResolver("count"),
  depositConnection: DepositTC.getResolver("connection"),
  depositPagination: DepositTC.getResolver("pagination"),
};

const DepositMutation = {
  depositCreateOne: DepositTC.getResolver("createOne"),
  depositCreateMany: DepositTC.getResolver("createMany"),
  depositUpdateById: DepositTC.getResolver("updateById"),
  depositUpdateOne: DepositTC.getResolver("updateOne"),
  depositUpdateMany: DepositTC.getResolver("updateMany"),
  depositRemoveById: DepositTC.getResolver("removeById"),
  depositRemoveOne: DepositTC.getResolver("removeOne"),
  depositRemoveMany: DepositTC.getResolver("removeMany"),
};

const DepositRelation = {
  depositUserResolver: DepositTC.addRelation("user", {
    resolver: () => UserTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.user || null,
    },
    projection: { user: true },
  }),

  depositCustomerResolver: DepositTC.addRelation("customer", {
    resolver: () => CustomerTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.customer || null,
    },
    projection: { customer: true },
  }),
};

export { DepositQuery, DepositMutation, DepositRelation };
