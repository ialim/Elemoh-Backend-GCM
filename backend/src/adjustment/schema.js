import { ProductAdjustmentTC } from "../product_adjustment/model";
import { WarehouseTC } from "../warehouses/model";
import { Adjustment, AdjustmentTC } from "./model";

const AdjustmentQuery = {
  adjustmentById: AdjustmentTC.getResolver("findById"),
  adjustmentByIds: AdjustmentTC.getResolver("findByIds"),
  adjustmentOne: AdjustmentTC.getResolver("findOne"),
  adjustmentMany: AdjustmentTC.getResolver("findMany"),
  adjustmentCount: AdjustmentTC.getResolver("count"),
  adjustmentConnection: AdjustmentTC.getResolver("connection"),
  adjustmentPagination: AdjustmentTC.getResolver("pagination"),
};

const AdjustmentMutation = {
  adjustmentCreateOne: AdjustmentTC.getResolver("createOne"),
  adjustmentCreateMany: AdjustmentTC.getResolver("createMany"),
  adjustmentUpdateById: AdjustmentTC.getResolver("updateById"),
  adjustmentUpdateOne: AdjustmentTC.getResolver("updateOne"),
  adjustmentUpdateMany: AdjustmentTC.getResolver("updateMany"),
  adjustmentRemoveById: AdjustmentTC.getResolver("removeById"),
  adjustmentRemoveOne: AdjustmentTC.getResolver("removeOne"),
  adjustmentRemoveMany: AdjustmentTC.getResolver("removeMany"),
};

const AdjustmentRelation = {
  AdjustmentWarehouseResolver: AdjustmentTC.addRelation("warehouse", {
    resolver: () => WarehouseTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.warehouse || null,
    },
    projection: { warehouse: true },
  }),

  adjustmentProductAdjustmentsResolver: AdjustmentTC.addRelation(
    "product_adjustments",
    {
      resolver: () => ProductAdjustmentTC.getResolver("findByIds"),
      prepareArgs: {
        _id: (source) => source.product_adjustments || [],
      },
      projection: { product_adjustments: true },
    }
  ),
};

export { AdjustmentQuery, AdjustmentMutation, AdjustmentRelation };
