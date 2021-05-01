import { ProductVariantTC } from "../product_variants/model";
import { TransferTC } from "../transfers/model";
import { UnitTC } from "../unit/model";
import { ProductTransfer, ProductTransferTC } from "./model";

const ProductTransferQuery = {
  ProductTransferById: ProductTransferTC.getResolver("findById"),
  ProductTransferByIds: ProductTransferTC.getResolver("findByIds"),
  ProductTransferOne: ProductTransferTC.getResolver("findOne"),
  ProductTransferMany: ProductTransferTC.getResolver("findMany"),
  ProductTransferCount: ProductTransferTC.getResolver("count"),
  ProductTransferConnection: ProductTransferTC.getResolver("connection"),
  ProductTransferPagination: ProductTransferTC.getResolver("pagination"),
};

const ProductTransferMutation = {
  ProductTransferCreateOne: ProductTransferTC.getResolver("createOne"),
  ProductTransferCreateMany: ProductTransferTC.getResolver("createMany"),
  ProductTransferUpdateById: ProductTransferTC.getResolver("updateById"),
  ProductTransferUpdateOne: ProductTransferTC.getResolver("updateOne"),
  ProductTransferUpdateMany: ProductTransferTC.getResolver("updateMany"),
  ProductTransferRemoveById: ProductTransferTC.getResolver("removeById"),
  ProductTransferRemoveOne: ProductTransferTC.getResolver("removeOne"),
  ProductTransferRemoveMany: ProductTransferTC.getResolver("removeMany"),
};

const ProductTransferRelation = {
  ProductTransferPurchaseResolver: ProductTransferTC.addRelation("purchase", {
    resolver: () => TransferTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.transfer || null,
    },
    projection: { transfer: true },
  }),

  ProductTransferUnitResolver: ProductTransferTC.addRelation("unit", {
    resolver: () => UnitTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.purchase_unit || null,
    },
    projection: { purchase_unit: true },
  }),

  ProductTransferVariantResolver: ProductTransferTC.addRelation(
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
  ProductTransferQuery,
  ProductTransferMutation,
  ProductTransferRelation,
};
