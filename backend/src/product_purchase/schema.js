import { ProductVariantTC } from "../product_variants/model";
import { PurchaseTC } from "../purchase/model";
import { UnitTC } from "../unit/model";
import { ProductPurchase, ProductPurchaseTC } from "./model";

const ProductPurchaseQuery = {
  productPurchaseById: ProductPurchaseTC.getResolver("findById"),
  productPurchaseByIds: ProductPurchaseTC.getResolver("findByIds"),
  productPurchaseOne: ProductPurchaseTC.getResolver("findOne"),
  productPurchaseMany: ProductPurchaseTC.getResolver("findMany"),
  productPurchaseCount: ProductPurchaseTC.getResolver("count"),
  productPurchaseConnection: ProductPurchaseTC.getResolver("connection"),
  productPurchasePagination: ProductPurchaseTC.getResolver("pagination"),
};

const ProductPurchaseMutation = {
  productPurchaseCreateOne: ProductPurchaseTC.getResolver("createOne"),
  productPurchaseCreateMany: ProductPurchaseTC.getResolver("createMany"),
  productPurchaseUpdateById: ProductPurchaseTC.getResolver("updateById"),
  productPurchaseUpdateOne: ProductPurchaseTC.getResolver("updateOne"),
  productPurchaseUpdateMany: ProductPurchaseTC.getResolver("updateMany"),
  productPurchaseRemoveById: ProductPurchaseTC.getResolver("removeById"),
  productPurchaseRemoveOne: ProductPurchaseTC.getResolver("removeOne"),
  productPurchaseRemoveMany: ProductPurchaseTC.getResolver("removeMany"),
};

const ProductPurchaseRelation = {
  productPurchasePurchaseResolver: ProductPurchaseTC.addRelation("purchase", {
    resolver: () => PurchaseTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.purchase || null,
    },
    projection: { purchase: true },
  }),

  productPurchaseUnitResolver: ProductPurchaseTC.addRelation("unit", {
    resolver: () => UnitTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.unit || null,
    },
    projection: { unit: true },
  }),

  productPurchaseVariantResolver: ProductPurchaseTC.addRelation(
    "product_variant",
    {
      resolver: () => ProductVariantTC.getResolver("findById"),
      prepareArgs: {
        _id: (source) => source.product_variant || null,
      },
      projection: { product_variant: true },
    }
  ),
};

export {
  ProductPurchaseQuery,
  ProductPurchaseMutation,
  ProductPurchaseRelation,
};
