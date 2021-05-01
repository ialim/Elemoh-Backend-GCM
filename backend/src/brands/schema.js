import { ProductTC } from "../products/model";
import { Brand, BrandTC } from "./model";

const BrandQuery = {
  brandById: BrandTC.getResolver("findById"),
  brandByIds: BrandTC.getResolver("findByIds"),
  brandOne: BrandTC.getResolver("findOne"),
  brandMany: BrandTC.getResolver("findMany"),
  brandCount: BrandTC.getResolver("count"),
  brandConnection: BrandTC.getResolver("connection"),
  brandPagination: BrandTC.getResolver("pagination"),
};

const BrandMutation = {
  brandCreateOne: BrandTC.getResolver("createOne"),
  brandCreateMany: BrandTC.getResolver("createMany"),
  brandUpdateById: BrandTC.getResolver("updateById"),
  brandUpdateOne: BrandTC.getResolver("updateOne"),
  brandUpdateMany: BrandTC.getResolver("updateMany"),
  brandRemoveById: BrandTC.getResolver("removeById"),
  brandRemoveOne: BrandTC.getResolver("removeOne"),
  brandRemoveMany: BrandTC.getResolver("removeMany"),
};

const BrandRelation = {
  brandProductsResolver: BrandTC.addRelation("products", {
    resolver: () => ProductTC.getResolver("findByIds"),
    prepareArgs: {
      _ids: (source) => source.products || [],
    },
    projection: { products: true },
  }),
};

export { BrandQuery, BrandMutation, BrandRelation };
