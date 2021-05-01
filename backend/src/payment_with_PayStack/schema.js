import { GiftCardTC } from "../gift_card/model";
import { PaymentTC } from "../payment/model";
import { PaymentWithPayStack, PaymentWithPayStackTC } from "./model";

const PaymentWithPayStackQuery = {
  paymentWithPayStackById: PaymentWithPayStackTC.getResolver("findById"),

  paymentWithPayStackByIds: PaymentWithPayStackTC.getResolver("findByIds"),

  paymentWithPayStackOne: PaymentWithPayStackTC.getResolver("findOne"),

  paymentWithPayStackMany: PaymentWithPayStackTC.getResolver("findMany"),

  paymentWithPayStackCount: PaymentWithPayStackTC.getResolver("count"),

  paymentWithPayStackConnection: PaymentWithPayStackTC.getResolver(
    "connection"
  ),

  paymentWithPayStackPagination: PaymentWithPayStackTC.getResolver(
    "pagination"
  ),
};

const PaymentWithPayStackMutation = {
  paymentWithPayStackCreateOne: PaymentWithPayStackTC.getResolver("createOne"),

  paymentWithPayStackCreateMany: PaymentWithPayStackTC.getResolver(
    "createMany"
  ),

  paymentWithPayStackUpdateById: PaymentWithPayStackTC.getResolver(
    "updateById"
  ),

  paymentWithPayStackUpdateOne: PaymentWithPayStackTC.getResolver("updateOne"),

  paymentWithPayStackUpdateMany: PaymentWithPayStackTC.getResolver(
    "updateMany"
  ),

  paymentWithPayStackRemoveById: PaymentWithPayStackTC.getResolver(
    "removeById"
  ),

  paymentWithPayStackRemoveOne: PaymentWithPayStackTC.getResolver("removeOne"),

  paymentWithPayStackRemoveMany: PaymentWithPayStackTC.getResolver(
    "removeMany"
  ),
};

const PaymentWithPayStackRelation = {
  paymentWithPayStackPaymentResolver: PaymentWithPayStackTC.addRelation(
    "payment",
    {
      resolver: () => PaymentTC.getResolver("findById"),
      prepareArgs: {
        _id: (source) => source.payment || null,
      },
      projection: { payment: true },
    }
  ),
};

export {
  PaymentWithPayStackQuery,
  PaymentWithPayStackMutation,
  PaymentWithPayStackRelation,
};
