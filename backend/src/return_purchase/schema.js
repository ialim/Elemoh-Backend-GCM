import { SupplierTC } from "../supplier/model";
import { UserTC } from "../users/model";
import { WarehouseTC } from "../warehouses/model";
import { AccountTC } from "../account/model";
import { ReturnPurchase, ReturnPurchaseTC } from "./model";

const ReturnPurchaseQuery = {
  returnPurchaseById: ReturnPurchaseTC.getResolver("findById"),
  returnPurchaseByIds: ReturnPurchaseTC.getResolver("findByIds"),
  returnPurchaseOne: ReturnPurchaseTC.getResolver("findOne"),
  returnPurchaseMany: ReturnPurchaseTC.getResolver("findMany"),
  returnPurchaseCount: ReturnPurchaseTC.getResolver("count"),
  returnPurchaseConnection: ReturnPurchaseTC.getResolver("connection"),
  returnPurchasePagination: ReturnPurchaseTC.getResolver("pagination"),
};

const ReturnPurchaseMutation = {
  returnPurchaseCreateOne: ReturnPurchaseTC.getResolver("createOne"),
  returnPurchaseCreateMany: ReturnPurchaseTC.getResolver("createMany"),
  returnPurchaseUpdateById: ReturnPurchaseTC.getResolver("updateById"),
  returnPurchaseUpdateOne: ReturnPurchaseTC.getResolver("updateOne"),
  returnPurchaseUpdateMany: ReturnPurchaseTC.getResolver("updateMany"),
  returnPurchaseRemoveById: ReturnPurchaseTC.getResolver("removeById"),
  returnPurchaseRemoveOne: ReturnPurchaseTC.getResolver("removeOne"),
  returnPurchaseRemoveMany: ReturnPurchaseTC.getResolver("removeMany"),
};

const ReturnPurchaseRelation = {
  returnPurchaseWarehouseResolver: ReturnPurchaseTC.addRelation("warehouse", {
    resolver: () => WarehouseTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.warehouse || null,
    },
    projection: { warehouse: true },
  }),

  returnPurchaseSupplierResolver: ReturnPurchaseTC.addRelation("supplier", {
    resolver: () => SupplierTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.supplier || null,
    },
    projection: { supplier: true },
  }),

  returnPurchaseUserResolver: ReturnPurchaseTC.addRelation("user", {
    resolver: () => UserTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.user || null,
    },
    projection: { user: true },
  }),

  returnPurchaseAccountResolver: ReturnPurchaseTC.addRelation("account", {
    resolver: () => AccountTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.account || null,
    },
    projection: { account: true },
  }),
};

export { ReturnPurchaseQuery, ReturnPurchaseMutation, ReturnPurchaseRelation };
