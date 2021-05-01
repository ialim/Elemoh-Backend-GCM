import { GiftCardTC } from "../gift_card/model";
import { PaymentTC } from "../payment/model";
import { PaymentWithGiftCard, PaymentWithGiftCardTC } from "./model";

const PaymentWithGiftCardQuery = {
  paymentWithGiftCardById: PaymentWithGiftCardTC.getResolver("findById"),
  paymentWithGiftCardByIds: PaymentWithGiftCardTC.getResolver("findByIds"),
  paymentWithGiftCardOne: PaymentWithGiftCardTC.getResolver("findOne"),
  paymentWithGiftCardMany: PaymentWithGiftCardTC.getResolver("findMany"),
  paymentWithGiftCardCount: PaymentWithGiftCardTC.getResolver("count"),
  paymentWithGiftCardConnection: PaymentWithGiftCardTC.getResolver(
    "connection"
  ),
  paymentWithGiftCardPagination: PaymentWithGiftCardTC.getResolver(
    "pagination"
  ),
};

const PaymentWithGiftCardMutation = {
  paymentWithGiftCardCreateOne: PaymentWithGiftCardTC.getResolver("createOne"),
  paymentWithGiftCardCreateMany: PaymentWithGiftCardTC.getResolver(
    "createMany"
  ),
  paymentWithGiftCardUpdateById: PaymentWithGiftCardTC.getResolver(
    "updateById"
  ),
  paymentWithGiftCardUpdateOne: PaymentWithGiftCardTC.getResolver("updateOne"),
  paymentWithGiftCardUpdateMany: PaymentWithGiftCardTC.getResolver(
    "updateMany"
  ),
  paymentWithGiftCardRemoveById: PaymentWithGiftCardTC.getResolver(
    "removeById"
  ),
  paymentWithGiftCardRemoveOne: PaymentWithGiftCardTC.getResolver("removeOne"),
  paymentWithGiftCardRemoveMany: PaymentWithGiftCardTC.getResolver(
    "removeMany"
  ),
};

const PaymentWithGiftCardRelation = {
  paymentWithGiftCardPaymentResolver: PaymentWithGiftCardTC.addRelation(
    "payment",
    {
      resolver: () => PaymentTC.getResolver("findById"),
      prepareArgs: {
        _id: (source) => source.payment || null,
      },
      projection: { payment: true },
    }
  ),
  paymentWithGiftCardResolver: PaymentWithGiftCardTC.addRelation("gift_card", {
    resolver: () => GiftCardTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.gift_card || null,
    },
    projection: { gift_card: true },
  }),
};

export {
  PaymentWithGiftCardQuery,
  PaymentWithGiftCardMutation,
  PaymentWithGiftCardRelation,
};
