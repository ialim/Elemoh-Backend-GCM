import { ProductPurchaseTC } from "../product_purchase/model";
import { PurchaseProductReturnTC } from "../purchase_product_return/model";
import { SupplierTC } from "../supplier/model";
import { UserTC } from "../users/model";
import { WarehouseTC } from "../warehouses/model";
import { Purchase, PurchaseTC } from "./model";

const PurchaseQuery = {
  purchaseById: PurchaseTC.getResolver("findById"),
  purchaseByIds: PurchaseTC.getResolver("findByIds"),
  purchaseOne: PurchaseTC.getResolver("findOne"),
  purchaseMany: PurchaseTC.getResolver("findMany"),
  purchaseCount: PurchaseTC.getResolver("count"),
  purchaseConnection: PurchaseTC.getResolver("connection"),
  purchasePagination: PurchaseTC.getResolver("pagination"),
};

const PurchaseMutation = {
  purchaseCreateOne: PurchaseTC.getResolver("createOne"),
  purchaseCreateMany: PurchaseTC.getResolver("createMany"),
  purchaseUpdateById: PurchaseTC.getResolver("updateById"),
  purchaseUpdateOne: PurchaseTC.getResolver("updateOne"),
  purchaseUpdateMany: PurchaseTC.getResolver("updateMany"),
  purchaseRemoveById: PurchaseTC.getResolver("removeById"),
  purchaseRemoveOne: PurchaseTC.getResolver("removeOne"),
  purchaseRemoveMany: PurchaseTC.getResolver("removeMany"),
};

const PurchaseRelation = {
  purchaseWarehouseResolver: PurchaseTC.addRelation("warehouse", {
    resolver: () => WarehouseTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.warehouse || null,
    },
    projection: { warehouse: true },
  }),

  purchaseSupplierResolver: PurchaseTC.addRelation("supplier", {
    resolver: () => SupplierTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.supplier || null,
    },
    projection: { supplier: true },
  }),

  purchaseUserResolver: PurchaseTC.addRelation("user", {
    resolver: () => UserTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.user || null,
    },
    projection: { user: true },
  }),

  purchaseProductPurchasesResolver: PurchaseTC.addRelation(
    "product_purchases",
    {
      resolver: () => ProductPurchaseTC.getResolver("findByIds"),
      prepareArgs: {
        _id: (source) => source.product_purchases || [],
      },
      projection: { product_purchases: true },
    }
  ),

  purchaseProductPurchaseReturnsResolver: PurchaseTC.addRelation(
    "product_purchase_returns",
    {
      resolver: () => PurchaseProductReturnTC.getResolver("findByIds"),
      prepareArgs: {
        _id: (source) => source.product_purchase_returns || [],
      },
      projection: { product_purchase_returns: true },
    }
  ),
};

export { PurchaseQuery, PurchaseMutation, PurchaseRelation };
