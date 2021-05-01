import { ProductVariantTC } from "../product_variants/model";
import { ReturnTC } from "../returns/model";
import { UnitTC } from "../unit/model";
import { ProductReturn, ProductReturnTC } from "./model";

const ProductReturnQuery = {
  productReturnById: ProductReturnTC.getResolver("findById"),
  productReturnByIds: ProductReturnTC.getResolver("findByIds"),
  productReturnOne: ProductReturnTC.getResolver("findOne"),
  productReturnMany: ProductReturnTC.getResolver("findMany"),
  productReturnCount: ProductReturnTC.getResolver("count"),
  productReturnConnection: ProductReturnTC.getResolver("connection"),
  productReturnPagination: ProductReturnTC.getResolver("pagination"),
};

const ProductReturnMutation = {
  productReturnCreateOne: ProductReturnTC.getResolver("createOne"),
  productReturnCreateMany: ProductReturnTC.getResolver("createMany"),
  productReturnUpdateById: ProductReturnTC.getResolver("updateById"),
  productReturnUpdateOne: ProductReturnTC.getResolver("updateOne"),
  productReturnUpdateMany: ProductReturnTC.getResolver("updateMany"),
  productReturnRemoveById: ProductReturnTC.getResolver("removeById"),
  productReturnRemoveOne: ProductReturnTC.getResolver("removeOne"),
  productReturnRemoveMany: ProductReturnTC.getResolver("removeMany"),
};

const ProductReturnRelation = {
  productReturnResolver: ProductReturnTC.addRelation("return", {
    resolver: () => ReturnTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.return || null,
    },
    projection: { return: true },
  }),

  productReturnUnitResolver: ProductReturnTC.addRelation("unit", {
    resolver: () => UnitTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.unit || null,
    },
    projection: { unit: true },
  }),

  productReturnVariantResolver: ProductReturnTC.addRelation("product_variant", {
    resolver: () => ProductVariantTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.product_variant || null,
    },
    projection: { product_variant: true },
  }),
};

export { ProductReturnQuery, ProductReturnMutation, ProductReturnRelation };
