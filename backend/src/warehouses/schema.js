import { ProductVariantTC } from "../product_variants/model";
import { Warehouse, WarehouseTC } from "./model";

const WarehouseQuery = {
  warehouseById: WarehouseTC.getResolver("findById"),
  warehouseByIds: WarehouseTC.getResolver("findByIds"),
  warehouseOne: WarehouseTC.getResolver("findOne"),
  warehouseMany: WarehouseTC.getResolver("findMany"),
  warehouseCount: WarehouseTC.getResolver("count"),
  warehouseConnection: WarehouseTC.getResolver("connection"),
  warehousePagination: WarehouseTC.getResolver("pagination"),
};

const WarehouseMutation = {
  warehouseCreateOne: WarehouseTC.getResolver("createOne"),
  warehouseCreateMany: WarehouseTC.getResolver("createMany"),
  warehouseUpdateById: WarehouseTC.getResolver("updateById"),
  warehouseUpdateOne: WarehouseTC.getResolver("updateOne"),
  warehouseUpdateMany: WarehouseTC.getResolver("updateMany"),
  warehouseRemoveById: WarehouseTC.getResolver("removeById"),
  warehouseRemoveOne: WarehouseTC.getResolver("removeOne"),
  warehouseRemoveMany: WarehouseTC.getResolver("removeMany"),
};

const WarehouseRelation = {
  WarehouseProductVariantsResolver: WarehouseTC.addRelation(
    "product_variantss",
    {
      resolver: () => ProductVariantTC.getResolver("findByIds"),
      prepareArgs: {
        _id: (source) => source.product_variants || [],
      },
      projection: { product_varaiants: true },
    }
  ),
};

export { WarehouseQuery, WarehouseMutation, WarehouseRelation };
