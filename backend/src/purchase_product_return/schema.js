import { ProductVariantTC } from "../product_variants/model";
import { ReturnPurchaseTC } from "../return_purchase/model";
import { UnitTC } from "../unit/model";
import { PurchaseProductReturn, PurchaseProductReturnTC } from "./model";

const PurchaseProductReturnQuery = {
  PurchaseProductReturnById: PurchaseProductReturnTC.getResolver("findById"),
  PurchaseProductReturnByIds: PurchaseProductReturnTC.getResolver("findByIds"),
  PurchaseProductReturnOne: PurchaseProductReturnTC.getResolver("findOne"),
  PurchaseProductReturnMany: PurchaseProductReturnTC.getResolver("findMany"),
  PurchaseProductReturnCount: PurchaseProductReturnTC.getResolver("count"),
  PurchaseProductReturnConnection: PurchaseProductReturnTC.getResolver(
    "connection"
  ),
  PurchaseProductReturnPagination: PurchaseProductReturnTC.getResolver(
    "pagination"
  ),
};

const PurchaseProductReturnMutation = {
  PurchaseProductReturnCreateOne: PurchaseProductReturnTC.getResolver(
    "createOne"
  ),
  PurchaseProductReturnCreateMany: PurchaseProductReturnTC.getResolver(
    "createMany"
  ),
  PurchaseProductReturnUpdateById: PurchaseProductReturnTC.getResolver(
    "updateById"
  ),
  PurchaseProductReturnUpdateOne: PurchaseProductReturnTC.getResolver(
    "updateOne"
  ),
  PurchaseProductReturnUpdateMany: PurchaseProductReturnTC.getResolver(
    "updateMany"
  ),
  PurchaseProductReturnRemoveById: PurchaseProductReturnTC.getResolver(
    "removeById"
  ),
  PurchaseProductReturnRemoveOne: PurchaseProductReturnTC.getResolver(
    "removeOne"
  ),
  PurchaseProductReturnRemoveMany: PurchaseProductReturnTC.getResolver(
    "removeMany"
  ),
};

const PurchaseProductReturnRelation = {
  PurchaseProductReturnResolver: PurchaseProductReturnTC.addRelation("return", {
    resolver: () => ReturnPurchaseTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.return || null,
    },
    projection: { return: true },
  }),

  PurchaseProductReturnUnitResolver: PurchaseProductReturnTC.addRelation(
    "unit",
    {
      resolver: () => UnitTC.getResolver("findById"),
      prepareArgs: {
        _id: (source) => source.unit || null,
      },
      projection: { unit: true },
    }
  ),

  PurchaseProductReturnVariantResolver: PurchaseProductReturnTC.addRelation(
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
  PurchaseProductReturnQuery,
  PurchaseProductReturnMutation,
  PurchaseProductReturnRelation,
};
