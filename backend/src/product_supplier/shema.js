import { ProductVariantTC } from "../product_variants/model";
import { SupplierTC } from "../supplier/model";
import { ProductSupplier, ProductSupplierTC } from "./model";

const ProductSupplierQuery = {
  productSupplierById: ProductSupplierTC.getResolver("findById"),
  productSupplierByIds: ProductSupplierTC.getResolver("findByIds"),
  productSupplierOne: ProductSupplierTC.getResolver("findOne"),
  productSupplierMany: ProductSupplierTC.getResolver("findMany"),
  productSupplierCount: ProductSupplierTC.getResolver("count"),
  productSupplierConnection: ProductSupplierTC.getResolver("connection"),
  productSupplierPagination: ProductSupplierTC.getResolver("pagination"),
};

const ProductSupplierMutation = {
  productSupplierCreateOne: ProductSupplierTC.getResolver("createOne"),
  productSupplierCreateMany: ProductSupplierTC.getResolver("createMany"),
  productSupplierUpdateById: ProductSupplierTC.getResolver("updateById"),
  productSupplierUpdateOne: ProductSupplierTC.getResolver("updateOne"),
  productSupplierUpdateMany: ProductSupplierTC.getResolver("updateMany"),
  productSupplierRemoveById: ProductSupplierTC.getResolver("removeById"),
  productSupplierRemoveOne: ProductSupplierTC.getResolver("removeOne"),
  productSupplierRemoveMany: ProductSupplierTC.getResolver("removeMany"),
};

const ProductSupplierRelation = {
  productSupplierProductVariantResolver: ProductSupplierTC.addRelation(
    "productVariant",
    {
      resolver: () => ProductVariantTC.getResolver("findById"),
      prepareArgs: {
        _id: (source) => source.productVariant || null,
      },
      projection: { productVariant: true },
    }
  ),

  productSupplierSupplierResolver: ProductSupplierTC.addRelation("supplier", {
    resolver: () => SupplierTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.supplier || null,
    },
    projection: { supplier: true },
  }),
};

export {
  ProductSupplierQuery,
  ProductSupplierMutation,
  ProductSupplierRelation,
};
