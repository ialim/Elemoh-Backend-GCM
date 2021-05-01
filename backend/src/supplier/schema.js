import { Supplier, SupplierTC } from "./model";

const SupplierQuery = {
  supplierById: SupplierTC.getResolver("findById"),
  supplierByIds: SupplierTC.getResolver("findByIds"),
  supplierOne: SupplierTC.getResolver("findOne"),
  supplierMany: SupplierTC.getResolver("findMany"),
  supplierCount: SupplierTC.getResolver("count"),
  supplierConnection: SupplierTC.getResolver("connection"),
  supplierPagination: SupplierTC.getResolver("pagination"),
};

const SupplierMutation = {
  supplierCreateOne: SupplierTC.getResolver("createOne"),
  supplierCreateMany: SupplierTC.getResolver("createMany"),
  supplierUpdateById: SupplierTC.getResolver("updateById"),
  supplierUpdateOne: SupplierTC.getResolver("updateOne"),
  supplierUpdateMany: SupplierTC.getResolver("updateMany"),
  supplierRemoveById: SupplierTC.getResolver("removeById"),
  supplierRemoveOne: SupplierTC.getResolver("removeOne"),
  supplierRemoveMany: SupplierTC.getResolver("removeMany"),
};

export { SupplierQuery, SupplierMutation };
