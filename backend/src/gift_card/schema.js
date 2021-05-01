import { CustomerTC } from "../customer/model";
import { UserTC } from "../users/model";
import { GiftCard, GiftCardTC } from "./model";

const GiftCardQuery = {
  giftCardById: GiftCardTC.getResolver("findById"),
  giftCardByIds: GiftCardTC.getResolver("findByIds"),
  giftCardOne: GiftCardTC.getResolver("findOne"),
  giftCardMany: GiftCardTC.getResolver("findMany"),
  giftCardCount: GiftCardTC.getResolver("count"),
  giftCardConnection: GiftCardTC.getResolver("connection"),
  giftCardPagination: GiftCardTC.getResolver("pagination"),
};

const GiftCardMutation = {
  giftCardCreateOne: GiftCardTC.getResolver("createOne"),
  giftCardCreateMany: GiftCardTC.getResolver("createMany"),
  giftCardUpdateById: GiftCardTC.getResolver("updateById"),
  giftCardUpdateOne: GiftCardTC.getResolver("updateOne"),
  giftCardUpdateMany: GiftCardTC.getResolver("updateMany"),
  giftCardRemoveById: GiftCardTC.getResolver("removeById"),
  giftCardRemoveOne: GiftCardTC.getResolver("removeOne"),
  giftCardRemoveMany: GiftCardTC.getResolver("removeMany"),
};

const GiftCardRelation = {
  giftCardUserResolver: GiftCardTC.addRelation("user", {
    resolver: () => UserTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.user || null,
    },
    projection: { user: true },
  }),

  giftCardCustomerResolver: GiftCardTC.addRelation("customer", {
    resolver: () => CustomerTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.customer || null,
    },
    projection: { customer: true },
  }),
};

export { GiftCardQuery, GiftCardMutation, GiftCardRelation };
