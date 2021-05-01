import { ProductTransferTC } from "../product_transfer/model";
import { UserTC } from "../users/model";
import { WarehouseTC } from "../warehouses/model";
import { Transfer, TransferTC } from "./model";

const TransferQuery = {
  transferById: TransferTC.getResolver("findById"),
  transferByIds: TransferTC.getResolver("findByIds"),
  transferOne: TransferTC.getResolver("findOne"),
  transferMany: TransferTC.getResolver("findMany"),
  transferCount: TransferTC.getResolver("count"),
  transferConnection: TransferTC.getResolver("connection"),
  transferPagination: TransferTC.getResolver("pagination"),
};

const TransferMutation = {
  transferCreateOne: TransferTC.getResolver("createOne"),
  transferCreateMany: TransferTC.getResolver("createMany"),
  transferUpdateById: TransferTC.getResolver("updateById"),
  transferUpdateOne: TransferTC.getResolver("updateOne"),
  transferUpdateMany: TransferTC.getResolver("updateMany"),
  transferRemoveById: TransferTC.getResolver("removeById"),
  transferRemoveOne: TransferTC.getResolver("removeOne"),
  transferRemoveMany: TransferTC.getResolver("removeMany"),
};

const TransferRelation = {
  transferToWarehouseResolver: TransferTC.addRelation("to_warehouse", {
    resolver: () => WarehouseTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.to_warehouse || null,
    },
    projection: { to_warehouse: true },
  }),

  transferFromWarehouseResolver: TransferTC.addRelation("from_warehouse", {
    resolver: () => WarehouseTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.from_warehouse || null,
    },
    projection: { from_warehouse: true },
  }),

  transferUserResolver: TransferTC.addRelation("user", {
    resolver: () => UserTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.user || null,
    },
    projection: { user: true },
  }),

  transferProductTransfersResolver: TransferTC.addRelation(
    "product_transfers",
    {
      resolver: () => ProductTransferTC.getResolver("findByIds"),
      prepareArgs: {
        _id: (source) => source.product_transfers || [],
      },
      projection: { product_transfers: true },
    }
  ),
};

export { TransferQuery, TransferMutation, TransferRelation };
