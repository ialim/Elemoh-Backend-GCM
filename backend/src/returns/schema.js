import { AccountTC } from "../account/model";
import { CustomerTC } from "../customer/model";
import { EmployeeTC } from "../Employee/model";
import { ProductReturnTC } from "../product_return/model";
import { UserTC } from "../users/model";
import { WarehouseTC } from "../warehouses/model";
import { Return, ReturnTC } from "./model";

const ReturnQuery = {
  returnById: ReturnTC.getResolver("findById"),
  returnByIds: ReturnTC.getResolver("findByIds"),
  returnOne: ReturnTC.getResolver("findOne"),
  returnMany: ReturnTC.getResolver("findMany"),
  returnCount: ReturnTC.getResolver("count"),
  returnConnection: ReturnTC.getResolver("connection"),
  returnPagination: ReturnTC.getResolver("pagination"),
};

const ReturnMutation = {
  returnCreateOne: ReturnTC.getResolver("createOne"),
  returnCreateMany: ReturnTC.getResolver("createMany"),
  returnUpdateById: ReturnTC.getResolver("updateById"),
  returnUpdateOne: ReturnTC.getResolver("updateOne"),
  returnUpdateMany: ReturnTC.getResolver("updateMany"),
  returnRemoveById: ReturnTC.getResolver("removeById"),
  returnRemoveOne: ReturnTC.getResolver("removeOne"),
  returnRemoveMany: ReturnTC.getResolver("removeMany"),
};

const ReturnRelation = {
  returnWarehouseResolver: ReturnTC.addRelation("warehouse", {
    resolver: () => WarehouseTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.warehouse || null,
    },
    projection: { warehouse: true },
  }),

  returnAccountResolver: ReturnTC.addRelation("account", {
    resolver: () => AccountTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.account || null,
    },
    projection: { account: true },
  }),

  returnUserResolver: ReturnTC.addRelation("user", {
    resolver: () => UserTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.user || null,
    },
    projection: { user: true },
  }),

  returnCustomerResolver: ReturnTC.addRelation("customer", {
    resolver: () => CustomerTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.customer || null,
    },
    projection: { customer: true },
  }),

  returnBillerResolver: ReturnTC.addRelation("biller", {
    resolver: () => EmployeeTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.biller || null,
    },
    projection: { biller: true },
  }),

  returnProductReturnsResolver: ReturnTC.addRelation(
    "product_returns",
    {
      resolver: () => ProductReturnTC.getResolver("findByIds"),
      prepareArgs: {
        _id: (source) => source.product_returns || [],
      },
      projection: { product_returns: true },
    }
  ),
};

export { ReturnQuery, ReturnMutation, ReturnRelation };
