import { CouponTC } from "../coupon/model";
import { CustomerTC } from "../customer/model";
import { EmployeeTC } from "../Employee/model";
import { ProductSaleTC } from "../product_sale/model";
import { UserTC } from "../users/model";
import { WarehouseTC } from "../warehouses/model";
import { Sale, SaleTC } from "./model";

const SaleQuery = {
  saleById: SaleTC.getResolver("findById"),
  saleByIds: SaleTC.getResolver("findByIds"),
  saleOne: SaleTC.getResolver("findOne"),
  saleMany: SaleTC.getResolver("findMany"),
  saleCount: SaleTC.getResolver("count"),
  saleConnection: SaleTC.getResolver("connection"),
  salePagination: SaleTC.getResolver("pagination"),
};

const SaleMutation = {
  saleCreateOne: SaleTC.getResolver("createOne"),
  saleCreateMany: SaleTC.getResolver("createMany"),
  saleUpdateById: SaleTC.getResolver("updateById"),
  saleUpdateOne: SaleTC.getResolver("updateOne"),
  saleUpdateMany: SaleTC.getResolver("updateMany"),
  saleRemoveById: SaleTC.getResolver("removeById"),
  saleRemoveOne: SaleTC.getResolver("removeOne"),
  saleRemoveMany: SaleTC.getResolver("removeMany"),
};

const SaleRelation = {
  saleWarehouseResolver: SaleTC.addRelation("warehouse", {
    resolver: () => WarehouseTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.warehouse || null,
    },
    projection: { warehouse: true },
  }),

  saleCouponResolver: SaleTC.addRelation("coupon", {
    resolver: () => CouponTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.coupon || null,
    },
    projection: { coupon: true },
  }),

  saleUserResolver: SaleTC.addRelation("user", {
    resolver: () => UserTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.user || null,
    },
    projection: { user: true },
  }),

  saleCustomerResolver: SaleTC.addRelation("customer", {
    resolver: () => CustomerTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.customer || null,
    },
    projection: { customer: true },
  }),

  saleBillerResolver: SaleTC.addRelation("biller", {
    resolver: () => EmployeeTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.biller || null,
    },
    projection: { biller: true },
  }),

  saleProductsalesResolver: saleTC.addRelation("product_sales", {
    resolver: () => ProductSaleTC.getResolver("findByIds"),
    prepareArgs: {
      _id: (source) => source.product_sales || [],
    },
    projection: { product_sales: true },
  }),
};

export { SaleQuery, SaleMutation, SaleRelation };
