import { AccountTC } from "../account/model";
import { ExpenseCategoryTC } from "../expense_category/model";
import { UserTC } from "../users/model";
import { WarehouseTC } from "../warehouses/model";
import { Expense, ExpenseTC } from "./model";

const ExpenseQuery = {
  expenseById: ExpenseTC.getResolver("findById"),
  expenseByIds: ExpenseTC.getResolver("findByIds"),
  expenseOne: ExpenseTC.getResolver("findOne"),
  expenseMany: ExpenseTC.getResolver("findMany"),
  expenseCount: ExpenseTC.getResolver("count"),
  expenseConnection: ExpenseTC.getResolver("connection"),
  expensePagination: ExpenseTC.getResolver("pagination"),
};

const ExpenseMutation = {
  expenseCreateOne: ExpenseTC.getResolver("createOne"),
  expenseCreateMany: ExpenseTC.getResolver("createMany"),
  expenseUpdateById: ExpenseTC.getResolver("updateById"),
  expenseUpdateOne: ExpenseTC.getResolver("updateOne"),
  expenseUpdateMany: ExpenseTC.getResolver("updateMany"),
  expenseRemoveById: ExpenseTC.getResolver("removeById"),
  expenseRemoveOne: ExpenseTC.getResolver("removeOne"),
  expenseRemoveMany: ExpenseTC.getResolver("removeMany"),
};

const ExpenseRelation = {
  expenseUserResolver: ExpenseTC.addRelation("user", {
    resolver: () => UserTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.user || null,
    },
    projection: { user: true },
  }),

  expenseWarehouseResolver: ExpenseTC.addRelation("warehouse", {
    resolver: () => WarehouseTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.warehouse || null,
    },
    projection: { warehouse: true },
  }),

  expenseAccountResolver: ExpenseTC.addRelation("account", {
    resolver: () => AccountTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.account || null,
    },
    projection: { account: true },
  }),

  expenseExpenseCategoryResolver: ExpenseTC.addRelation("expense_category", {
    resolver: () => ExpenseCategoryTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.expense_category || null,
    },
    projection: { expense_category: true },
  }),
};

export { ExpenseQuery, ExpenseMutation, ExpenseRelation };
