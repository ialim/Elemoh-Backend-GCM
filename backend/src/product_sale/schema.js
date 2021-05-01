import { ProductVariantTC } from "../product_variants/model";
import { SaleTC } from "../sale/model";
import { UnitTC } from "../unit/model";
import { ProductSale, ProductSaleTC } from "./model";

const ProductSaleQuery = {
  productSaleById: ProductSaleTC.getResolver("findById"),
  productSaleByIds: ProductSaleTC.getResolver("findByIds"),
  productSaleOne: ProductSaleTC.getResolver("findOne"),
  productSaleMany: ProductSaleTC.getResolver("findMany"),
  productSaleCount: ProductSaleTC.getResolver("count"),
  productSaleConnection: ProductSaleTC.getResolver("connection"),
  productSalePagination: ProductSaleTC.getResolver("pagination"),
};

const ProductSaleMutation = {
  productSaleCreateOne: ProductSaleTC.getResolver("createOne"),
  productSaleCreateMany: ProductSaleTC.getResolver("createMany"),
  productSaleUpdateById: ProductSaleTC.getResolver("updateById"),
  productSaleUpdateOne: ProductSaleTC.getResolver("updateOne"),
  productSaleUpdateMany: ProductSaleTC.getResolver("updateMany"),
  productSaleRemoveById: ProductSaleTC.getResolver("removeById"),
  productSaleRemoveOne: ProductSaleTC.getResolver("removeOne"),
  productSaleRemoveMany: ProductSaleTC.getResolver("removeMany"),
};

const ProductSaleRelation = {
  productSaleResolver: ProductSaleTC.addRelation("sale", {
    resolver: () => SaleTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.sale || null,
    },
    projection: { sale: true },
  }),

  productSaleUnitResolver: ProductSaleTC.addRelation("unit", {
    resolver: () => UnitTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.unit || null,
    },
    projection: { unit: true },
  }),

  productSaleVariantResolver: ProductSaleTC.addRelation("product_variant", {
    resolver: () => ProductVariantTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.product_variant || null,
    },
    projection: { product_variant: true },
  }),
};

export { ProductSaleQuery, ProductSaleMutation, ProductSaleRelation };
