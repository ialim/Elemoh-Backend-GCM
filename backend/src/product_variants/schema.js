import { CategoryTC } from "../category/model";
import { ProductTC } from "../products/model";
import { ProductSupplierTC } from "../product_supplier/model";
import { TaxTC } from "../tax/model";
import { UnitTC } from "../unit/model";
import { VariantTC } from "../variants/model";
import { ProductVariant, ProductVariantTC } from "./model";

const ProductVariantQuery = {
  productVariantById: ProductVariantTC.getResolver("findById"),
  productVariantByIds: ProductVariantTC.getResolver("findByIds"),
  productVariantOne: ProductVariantTC.getResolver("findOne"),
  productVariantMany: ProductVariantTC.getResolver("findMany"),
  productVariantCount: ProductVariantTC.getResolver("count"),
  productVariantConnection: ProductVariantTC.getResolver("connection"),
  productVariantPagination: ProductVariantTC.getResolver("pagination"),
};

const ProductVariantMutation = {
  productVariantCreateOne: ProductVariantTC.getResolver("createOne"),
  productVariantCreateMany: ProductVariantTC.getResolver("createMany"),
  productVariantUpdateById: ProductVariantTC.getResolver("updateById"),
  productVariantUpdateOne: ProductVariantTC.getResolver("updateOne"),
  productVariantUpdateMany: ProductVariantTC.getResolver("updateMany"),
  productVariantRemoveById: ProductVariantTC.getResolver("removeById"),
  productVariantRemoveOne: ProductVariantTC.getResolver("removeOne"),
  productVariantRemoveMany: ProductVariantTC.getResolver("removeMany"),
};

const ProductVariantRelation = {
  ProductVariantProductResolver: ProductVariantTC.addRelation("product", {
    resolver: () => ProductTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.product || null,
    },
    projection: { product: true },
  }),

  ProductVariantVariantIDResolver: ProductVariantTC.addRelation("variant", {
    resolver: () => VariantTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.variant || null,
    },
    projection: { variant: true },
  }),

  ProductVariantUnitResolver: ProductVariantTC.addRelation("unit", {
    resolver: () => UnitTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.unit || null,
    },
    projection: { unit: true },
  }),

  ProductVariantCategoryResolver: ProductVariantTC.addRelation("category", {
    resolver: () => CategoryTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.category || null,
    },
    projection: { category: true },
  }),

  ProductVariantVariantIDResolver: ProductVariantTC.addRelation("tax", {
    resolver: () => TaxTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.tax || null,
    },
    projection: { tax: true },
  }),

  ProductVariantSuppliersResolver: ProductVariantTC.addRelation(
    "productSuppliers",
    {
      resolver: () => ProductSupplierTC.getResolver("findByIds"),
      prepareArgs: {
        _id: (source) => source.productSuppliers || [],
      },
      projection: { productSuppliers: true },
    }
  ),

  ProductVariantPurchaseUnitResolver: ProductVariantTC.addRelation(
    "pruchase_unit",
    {
      resolver: () => UnitTC.getResolver("findById"),
      prepareArgs: {
        _id: (source) => source.purchase_unit || null,
      },
      projection: { purchase_unit: true },
    }
  ),

  ProductVariantSaleUnitResolver: ProductVariantTC.addRelation("sale_unit", {
    resolver: () => UnitTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.sale_unit || null,
    },
    projection: { sale_unit: true },
  }),
};

export { ProductVariantQuery, ProductVariantMutation, ProductVariantRelation };
