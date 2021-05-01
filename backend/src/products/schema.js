import { BrandTC } from "../brands/model";
import { ProductVariantTC } from "../product_variants/model";
import { Product, ProductTC } from "./model";

const ProductQuery = {
  productById: ProductTC.getResolver("findById"),
  productByIds: ProductTC.getResolver("findByIds"),
  productOne: ProductTC.getResolver("findOne"),
  productMany: ProductTC.getResolver("findMany"),
  productCount: ProductTC.getResolver("count"),
  productConnection: ProductTC.getResolver("connection"),
  productPagination: ProductTC.getResolver("pagination"),
};

const ProductMutation = {
  productCreateOne: ProductTC.getResolver("createOne"),
  productCreateMany: ProductTC.getResolver("createMany"),
  productUpdateById: ProductTC.getResolver("updateById"),
  productUpdateOne: ProductTC.getResolver("updateOne"),
  productUpdateMany: ProductTC.getResolver("updateMany"),
  productRemoveById: ProductTC.getResolver("removeById"),
  productRemoveOne: ProductTC.getResolver("removeOne"),
  productRemoveMany: ProductTC.getResolver("removeMany"),
};

const ProductRelation = {
  ProductBrandResolver: ProductTC.addRelation("brand", {
    resolver: () => BrandTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.brand || null,
    },
    projection: { brand: true },
  }),

  ProductVariantsResolver: ProductTC.addRelation("product_variants", {
    resolver: () => ProductVariantTC.getResolver("findByIds"),
    prepareArgs: {
      _id: (source) => source.product_variants || [],
    },
    projection: { product_varaiants: true },
  }),
};

export { ProductQuery, ProductMutation, ProductRelation };
