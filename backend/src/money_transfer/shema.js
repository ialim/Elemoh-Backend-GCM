import { AccountTC } from "../account/model";
import { MoneyTransfer, MoneytransferTC } from "./model";

const MoneyTransferQuery = {
  moneyTransferById: MoneytransferTC.getResolver("findById"),
  moneyTransferByIds: MoneytransferTC.getResolver("findByIds"),
  moneyTransferOne: MoneytransferTC.getResolver("findOne"),
  moneyTransferMany: MoneytransferTC.getResolver("findMany"),
  moneyTransferCount: MoneytransferTC.getResolver("count"),
  moneyTransferConnection: MoneytransferTC.getResolver("connection"),
  moneyTransferPagination: MoneytransferTC.getResolver("pagination"),
};

const MoneyTransferMutation = {
  moneyTransferCreateOne: MoneytransferTC.getResolver("createOne"),
  moneyTransferCreateMany: MoneytransferTC.getResolver("createMany"),
  moneyTransferUpdateById: MoneytransferTC.getResolver("updateById"),
  moneyTransferUpdateOne: MoneytransferTC.getResolver("updateOne"),
  moneyTransferUpdateMany: MoneytransferTC.getResolver("updateMany"),
  moneyTransferRemoveById: MoneytransferTC.getResolver("removeById"),
  moneyTransferRemoveOne: MoneytransferTC.getResolver("removeOne"),
  moneyTransferRemoveMany: MoneytransferTC.getResolver("removeMany"),
};

const MoneyTransferRelation = {
  moneyTransferFromAccountesolver: MoneytransferTC.addRelation("from_account", {
    resolver: () => AccountTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.from_account || null,
    },
    projection: { from_account: true },
  }),

  moneyTransferToAccountResolver: MoneytransferTC.addRelation("to_account", {
    resolver: () => AccountTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.to_account || null,
    },
    projection: { to_account: true },
  }),
};

export { MoneyTransferQuery, MoneyTransferMutation, MoneyTransferRelation };
