import { GiftCardTC } from "../gift_card/model";
import { UserTC } from "../users/model";
import { GiftCardRecharge, GiftCardRechargeTC } from "./model";

const GiftCardRechargeQuery = {
  giftCardRechargeById: GiftCardRechargeTC.getResolver("findById"),
  giftCardRechargeByIds: GiftCardRechargeTC.getResolver("findByIds"),
  giftCardRechargeOne: GiftCardRechargeTC.getResolver("findOne"),
  giftCardRechargeMany: GiftCardRechargeTC.getResolver("findMany"),
  giftCardRechargeCount: GiftCardRechargeTC.getResolver("count"),
  giftCardRechargeConnection: GiftCardRechargeTC.getResolver("connection"),
  giftCardRechargePagination: GiftCardRechargeTC.getResolver("pagination"),
};

const GiftCardRechargeMutation = {
  giftCardRechargeCreateOne: GiftCardRechargeTC.getResolver("createOne"),
  giftCardRechargeCreateMany: GiftCardRechargeTC.getResolver("createMany"),
  giftCardRechargeUpdateById: GiftCardRechargeTC.getResolver("updateById"),
  giftCardRechargeUpdateOne: GiftCardRechargeTC.getResolver("updateOne"),
  giftCardRechargeUpdateMany: GiftCardRechargeTC.getResolver("updateMany"),
  giftCardRechargeRemoveById: GiftCardRechargeTC.getResolver("removeById"),
  giftCardRechargeRemoveOne: GiftCardRechargeTC.getResolver("removeOne"),
  giftCardRechargeRemoveMany: GiftCardRechargeTC.getResolver("removeMany"),
};

const GiftCardRechargeRelation = {
  giftCardRechargeUserResolver: GiftCardRechargeTC.addRelation("user", {
    resolver: () => UserTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.user || null,
    },
    projection: { user: true },
  }),

  giftCardRechargeCustomerResolver: GiftCardRechargeTC.addRelation(
    "gift_card",
    {
      resolver: () => GiftCardTC.getResolver("findById"),
      prepareArgs: {
        _id: (source) => source.gift_card || null,
      },
      projection: { gift_card: true },
    }
  ),
};

export {
  GiftCardRechargeQuery,
  GiftCardRechargeMutation,
  GiftCardRechargeRelation,
};
