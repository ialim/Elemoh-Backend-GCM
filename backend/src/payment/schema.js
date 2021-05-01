import { SaleTC } from "../sale/model";
import { UserTC } from "../users/model";
import { Payment, PaymentTC } from "./model";

const PaymentQuery = {
  paymentById: PaymentTC.getResolver("findById"),
  paymentByIds: PaymentTC.getResolver("findByIds"),
  paymentOne: PaymentTC.getResolver("findOne"),
  paymentMany: PaymentTC.getResolver("findMany"),
  paymentCount: PaymentTC.getResolver("count"),
  paymentConnection: PaymentTC.getResolver("connection"),
  paymentPagination: PaymentTC.getResolver("pagination"),
};

const PaymentMutation = {
  paymentCreateOne: PaymentTC.getResolver("createOne"),
  paymentCreateMany: PaymentTC.getResolver("createMany"),
  paymentUpdateById: PaymentTC.getResolver("updateById"),
  paymentUpdateOne: PaymentTC.getResolver("updateOne"),
  paymentUpdateMany: PaymentTC.getResolver("updateMany"),
  paymentRemoveById: PaymentTC.getResolver("removeById"),
  paymentRemoveOne: PaymentTC.getResolver("removeOne"),
  paymentRemoveMany: PaymentTC.getResolver("removeMany"),
};

const PaymentRelation = {
  paymentSaleResolver: PaymentTC.addRelation("sale", {
    resolver: () => SaleTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.sale || null,
    },
    projection: { sale: true },
  }),

  paymentPurchaseResolver: PaymentTC.addRelation("purchase", {
    resolver: () => PurchaseTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.purchase || null,
    },
    projection: { purchase: true },
  }),

  paymentUserResolver: PaymentTC.addRelation("user", {
    resolver: () => UserTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.user || null,
    },
    projection: { user: true },
  }),

  paymentAccountResolver: PaymentTC.addRelation("account", {
    resolver: () => AccountTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.account || null,
    },
    projection: { account: true },
  }),
};

export { PaymentQuery, PaymentMutation, PaymentRelation };
