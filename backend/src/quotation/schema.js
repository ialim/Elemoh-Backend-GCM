import { CustomerTC } from "../customer/model";
import { EmployeeTC } from "../Employee/model";
import { ProductQuotationTC } from "../product_quotation/model";
import { SupplierTC } from "../supplier/model";
import { UserTC } from "../users/model";
import { WarehouseTC } from "../warehouses/model";
import { Quotation, QuotationTC } from "./model";

const QuotationQuery = {
  quotationById: QuotationTC.getResolver("findById"),
  quotationByIds: QuotationTC.getResolver("findByIds"),
  quotationOne: QuotationTC.getResolver("findOne"),
  quotationMany: QuotationTC.getResolver("findMany"),
  quotationCount: QuotationTC.getResolver("count"),
  quotationConnection: QuotationTC.getResolver("connection"),
  quotationPagination: QuotationTC.getResolver("pagination"),
};

const QuotationMutation = {
  quotationCreateOne: QuotationTC.getResolver("createOne"),
  quotationCreateMany: QuotationTC.getResolver("createMany"),
  quotationUpdateById: QuotationTC.getResolver("updateById"),
  quotationUpdateOne: QuotationTC.getResolver("updateOne"),
  quotationUpdateMany: QuotationTC.getResolver("updateMany"),
  quotationRemoveById: QuotationTC.getResolver("removeById"),
  quotationRemoveOne: QuotationTC.getResolver("removeOne"),
  quotationRemoveMany: QuotationTC.getResolver("removeMany"),
};

const QuotationRelation = {
  quotationWarehouseResolver: QuotationTC.addRelation("warehouse", {
    resolver: () => WarehouseTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.warehouse || null,
    },
    projection: { warehouse: true },
  }),

  quotationSupplierResolver: QuotationTC.addRelation("supplier", {
    resolver: () => SupplierTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.supplier || null,
    },
    projection: { supplier: true },
  }),

  quotationUserResolver: QuotationTC.addRelation("user", {
    resolver: () => UserTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.user || null,
    },
    projection: { user: true },
  }),

  quotationCustomerResolver: QuotationTC.addRelation("customer", {
    resolver: () => CustomerTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.customer || null,
    },
    projection: { customer: true },
  }),

  quotationBillerResolver: QuotationTC.addRelation("biller", {
    resolver: () => EmployeeTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.biller || null,
    },
    projection: { biller: true },
  }),

  quotationProductQuotationsResolver: QuotationTC.addRelation(
    "product_qoutations",
    {
      resolver: () => ProductQuotationTC.getResolver("findByIds"),
      prepareArgs: {
        _id: (source) => source.product_quotations || [],
      },
      projection: { product_quotations: true },
    }
  ),
};

export { QuotationQuery, QuotationMutation, QuotationRelation };
