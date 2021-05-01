import { AdjustmentTC } from "../adjustment/model";
import { ProductVariantTC } from "../product_variants/model";
import { ProductAdjustment, ProductAdjustmentTC } from "./model";

const ProductAdjustmentQuery = {
  productAdjustmentById: ProductAdjustmentTC.getResolver("findById"),
  productAdjustmentByIds: ProductAdjustmentTC.getResolver("findByIds"),
  productAdjustmentOne: ProductAdjustmentTC.getResolver("findOne"),
  productAdjustmentMany: ProductAdjustmentTC.getResolver("findMany"),
  productAdjustmentCount: ProductAdjustmentTC.getResolver("count"),
  productAdjustmentConnection: ProductAdjustmentTC.getResolver("connection"),
  productAdjustmentPagination: ProductAdjustmentTC.getResolver("pagination"),
};

const ProductAdjustmentMutation = {
  productAdjustmentCreateOne: ProductAdjustmentTC.getResolver("createOne"),
  productAdjustmentCreateMany: ProductAdjustmentTC.getResolver("createMany"),
  productAdjustmentUpdateById: ProductAdjustmentTC.getResolver("updateById"),
  productAdjustmentUpdateOne: ProductAdjustmentTC.getResolver("updateOne"),
  productAdjustmentUpdateMany: ProductAdjustmentTC.getResolver("updateMany"),
  productAdjustmentRemoveById: ProductAdjustmentTC.getResolver("removeById"),
  productAdjustmentRemoveOne: ProductAdjustmentTC.getResolver("removeOne"),
  productAdjustmentRemoveMany: ProductAdjustmentTC.getResolver("removeMany"),
};

const ProductAdjustmentRelation = {
  ProductAdjustmentProductResolver: ProductAdjustmentTC.addRelation("product_variant", {
    resolver: () => ProductVariantTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.product_variant || null,
    },
    projection: { product_variant: true },
  }),
  ProductAdjustmentVariantIDResolver: ProductAdjustmentTC.addRelation(
    "adjustment",
    {
      resolver: () => AdjustmentTC.getResolver("findById"),
      prepareArgs: {
        _id: (source) => source.adjustment || null,
      },
      projection: { adjustment: true },
    }
  ),
};

export {
  ProductAdjustmentQuery,
  ProductAdjustmentMutation,
  ProductAdjustmentRelation,
};
