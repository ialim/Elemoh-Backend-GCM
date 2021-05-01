import { ProductVariantTC } from "../product_variants/model";
import { QuotationTC } from "../quotation/model";
import { UnitTC } from "../unit/model";
import { ProductQuotation, ProductQuotationTC } from "./model";

const ProductQuotationQuery = {
  productQuotationById: ProductQuotationTC.getResolver("findById"),
  productQuotationByIds: ProductQuotationTC.getResolver("findByIds"),
  productQuotationOne: ProductQuotationTC.getResolver("findOne"),
  productQuotationMany: ProductQuotationTC.getResolver("findMany"),
  productQuotationCount: ProductQuotationTC.getResolver("count"),
  productQuotationConnection: ProductQuotationTC.getResolver("connection"),
  productQuotationPagination: ProductQuotationTC.getResolver("pagination"),
};

const ProductQuotationMutation = {
  productQuotationCreateOne: ProductQuotationTC.getResolver("createOne"),
  productQuotationCreateMany: ProductQuotationTC.getResolver("createMany"),
  productQuotationUpdateById: ProductQuotationTC.getResolver("updateById"),
  productQuotationUpdateOne: ProductQuotationTC.getResolver("updateOne"),
  productQuotationUpdateMany: ProductQuotationTC.getResolver("updateMany"),
  productQuotationRemoveById: ProductQuotationTC.getResolver("removeById"),
  productQuotationRemoveOne: ProductQuotationTC.getResolver("removeOne"),
  productQuotationRemoveMany: ProductQuotationTC.getResolver("removeMany"),
};

const ProductQuotationRelation = {
  productQuotationResolver: ProductQuotationTC.addRelation("quotation", {
    resolver: () => QuotationTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.quotation || null,
    },
    projection: { quotation: true },
  }),

  productQuotationUnitResolver: ProductQuotationTC.addRelation("unit", {
    resolver: () => UnitTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.unit || null,
    },
    projection: { unit: true },
  }),

  productQuotationVariantResolver: ProductQuotationTC.addRelation(
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
  ProductQuotationQuery,
  ProductQuotationMutation,
  ProductQuotationRelation,
};
