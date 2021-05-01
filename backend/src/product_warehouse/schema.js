import { ProductVariantTC } from "../product_variants/model";
import { WarehouseTC } from "../warehouses/model";
import { ProductWarehouse, ProductWarehouseTC } from "./model";

const ProductWarehouseQuery = {
  productWarehouseById: ProductWarehouseTC.getResolver("findById"),
  productWarehouseByIds: ProductWarehouseTC.getResolver("findByIds"),
  productWarehouseOne: ProductWarehouseTC.getResolver("findOne"),
  productWarehouseMany: ProductWarehouseTC.getResolver("findMany"),
  productWarehouseCount: ProductWarehouseTC.getResolver("count"),
  productWarehouseConnection: ProductWarehouseTC.getResolver("connection"),
  productWarehousePagination: ProductWarehouseTC.getResolver("pagination"),
};

const ProductWarehouseMutation = {
  productWarehouseCreateOne: ProductWarehouseTC.getResolver("createOne"),
  productWarehouseCreateMany: ProductWarehouseTC.getResolver("createMany"),
  productWarehouseUpdateById: ProductWarehouseTC.getResolver("updateById"),
  productWarehouseUpdateOne: ProductWarehouseTC.getResolver("updateOne"),
  productWarehouseUpdateMany: ProductWarehouseTC.getResolver("updateMany"),
  productWarehouseRemoveById: ProductWarehouseTC.getResolver("removeById"),
  productWarehouseRemoveOne: ProductWarehouseTC.getResolver("removeOne"),
  productWarehouseRemoveMany: ProductWarehouseTC.getResolver("removeMany"),
};

const ProductWarehouseRelation = {
  productWarehouseProductResolver: ProductWarehouseTC.addRelation(
    "product_variant",
    {
      resolver: () => ProductVariantTC.getResolver("findById"),
      prepareArgs: {
        _id: (source) => source.product_variant || null,
      },
      projection: { product_variant: true },
    }
  ),

  productWarehouseVariantIDResolver: ProductWarehouseTC.addRelation(
    "warehouse",
    {
      resolver: () => WarehouseTC.getResolver("findById"),
      prepareArgs: {
        _id: (source) => source.warehouse || null,
      },
      projection: { warehouse: true },
    }
  ),
};

export {
  ProductWarehouseQuery,
  ProductWarehouseMutation,
  ProductWarehouseRelation,
};
