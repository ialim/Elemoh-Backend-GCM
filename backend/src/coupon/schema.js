import { UserTC } from "../users/model";
import { Coupon, CouponTC } from "./model";

const CouponQuery = {
  couponById: CouponTC.getResolver("findById"),
  couponByIds: CouponTC.getResolver("findByIds"),
  couponOne: CouponTC.getResolver("findOne"),
  couponMany: CouponTC.getResolver("findMany"),
  couponCount: CouponTC.getResolver("count"),
  couponConnection: CouponTC.getResolver("connection"),
  couponPagination: CouponTC.getResolver("pagination"),
};

const CouponMutation = {
  couponCreateOne: CouponTC.getResolver("createOne"),
  couponCreateMany: CouponTC.getResolver("createMany"),
  couponUpdateById: CouponTC.getResolver("updateById"),
  couponUpdateOne: CouponTC.getResolver("updateOne"),
  couponUpdateMany: CouponTC.getResolver("updateMany"),
  couponRemoveById: CouponTC.getResolver("removeById"),
  couponRemoveOne: CouponTC.getResolver("removeOne"),
  couponRemoveMany: CouponTC.getResolver("removeMany"),
};

const CouponRelation = {
  couponUserResolver: CouponTC.addRelation("user", {
    resolver: () => UserTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.user || null,
    },
    projection: { user: true },
  }),
};

export { CouponQuery, CouponMutation, CouponRelation };
