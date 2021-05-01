import { PaymentTC } from "../payment/model";
import { PaymentWithCheque, PaymentWithChequeTC } from "./model";

const PaymentWithChequeQuery = {
  paymentWithChequeById: PaymentWithChequeTC.getResolver("findById"),
  paymentWithChequeByIds: PaymentWithChequeTC.getResolver("findByIds"),
  paymentWithChequeOne: PaymentWithChequeTC.getResolver("findOne"),
  paymentWithChequeMany: PaymentWithChequeTC.getResolver("findMany"),
  paymentWithChequeCount: PaymentWithChequeTC.getResolver("count"),
  paymentWithChequeConnection: PaymentWithChequeTC.getResolver("connection"),
  paymentWithChequePagination: PaymentWithChequeTC.getResolver("pagination"),
};

const PaymentWithChequeMutation = {
  paymentWithChequeCreateOne: PaymentWithChequeTC.getResolver("createOne"),
  paymentWithChequeCreateMany: PaymentWithChequeTC.getResolver("createMany"),
  paymentWithChequeUpdateById: PaymentWithChequeTC.getResolver("updateById"),
  paymentWithChequeUpdateOne: PaymentWithChequeTC.getResolver("updateOne"),
  paymentWithChequeUpdateMany: PaymentWithChequeTC.getResolver("updateMany"),
  paymentWithChequeRemoveById: PaymentWithChequeTC.getResolver("removeById"),
  paymentWithChequeRemoveOne: PaymentWithChequeTC.getResolver("removeOne"),
  paymentWithChequeRemoveMany: PaymentWithChequeTC.getResolver("removeMany"),
};

const PaymentWithChequeRelation = {
  paymentWithChequePaymentResolver: PaymentWithChequeTC.addRelation("payment", {
    resolver: () => PaymentTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.payment || null,
    },
    projection: { payment: true },
  }),
};

export {
  PaymentWithChequeQuery,
  PaymentWithChequeMutation,
  PaymentWithChequeRelation,
};
