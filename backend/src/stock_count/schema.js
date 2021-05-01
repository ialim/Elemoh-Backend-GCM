import { UserTC } from "../users/model";
import { BrandTC } from "../brands/model";
import { CategoryTC } from "../category/model";
import { WarehouseTC } from "../warehouses/model";
import { StockCount, StockCountTC } from "./model";

const StockCountQuery = {
  stockCountById: StockCountTC.getResolver("findById"),
  stockCountByIds: StockCountTC.getResolver("findByIds"),
  stockCountOne: StockCountTC.getResolver("findOne"),
  stockCountMany: StockCountTC.getResolver("findMany"),
  stockCountCount: StockCountTC.getResolver("count"),
  stockCountConnection: StockCountTC.getResolver("connection"),
  stockCountPagination: StockCountTC.getResolver("pagination"),
};

const StockCountMutation = {
  stockCountCreateOne: StockCountTC.getResolver("createOne"),
  stockCountCreateMany: StockCountTC.getResolver("createMany"),
  stockCountUpdateById: StockCountTC.getResolver("updateById"),
  stockCountUpdateOne: StockCountTC.getResolver("updateOne"),
  stockCountUpdateMany: StockCountTC.getResolver("updateMany"),
  stockCountRemoveById: StockCountTC.getResolver("removeById"),
  stockCountRemoveOne: StockCountTC.getResolver("removeOne"),
  stockCountRemoveMany: StockCountTC.getResolver("removeMany"),
};

const StockCountRelation = {
  stockCountWarehouseResolver: StockCountTC.addRelation("warehouse", {
    resolver: () => WarehouseTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.warehouse || null,
    },
    projection: { warehouse: true },
  }),

  StockCountUserResolver: StockCountTC.addRelation("user", {
    resolver: () => UserTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.user || null,
    },
    projection: { user: true },
  }),

  StockCountBrandResolver: StockCountTC.addRelation("brand", {
    resolver: () => BrandTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.brand || null,
    },
    projection: { brand: true },
  }),

  StockCountBCategoryResolver: StockCountTC.addRelation("category", {
    resolver: () => CategoryTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.category || null,
    },
    projection: { category: true },
  }),
};

export { StockCountQuery, StockCountMutation, StockCountRelation };
