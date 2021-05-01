import { ExpenseTC } from "../expense/model";
import { ExpenseCategory, ExpenseCategoryTC } from "./model";

const ExpenseCategoryQuery = {
  expenseCategoryById: ExpenseCategoryTC.getResolver("findById"),
  expenseCategoryByIds: ExpenseCategoryTC.getResolver("findByIds"),
  expenseCategoryOne: ExpenseCategoryTC.getResolver("findOne"),
  expenseCategoryMany: ExpenseCategoryTC.getResolver("findMany"),
  expenseCategoryCount: ExpenseCategoryTC.getResolver("count"),
  expenseCategoryConnection: ExpenseCategoryTC.getResolver("connection"),
  expenseCategoryPagination: ExpenseCategoryTC.getResolver("pagination"),
};

const ExpenseCategoryMutation = {
  expenseCategoryCreateOne: ExpenseCategoryTC.getResolver("createOne"),
  expenseCategoryCreateMany: ExpenseCategoryTC.getResolver("createMany"),
  expenseCategoryUpdateById: ExpenseCategoryTC.getResolver("updateById"),
  expenseCategoryUpdateOne: ExpenseCategoryTC.getResolver("updateOne"),
  expenseCategoryUpdateMany: ExpenseCategoryTC.getResolver("updateMany"),
  expenseCategoryRemoveById: ExpenseCategoryTC.getResolver("removeById"),
  expenseCategoryRemoveOne: ExpenseCategoryTC.getResolver("removeOne"),
  expenseCategoryRemoveMany: ExpenseCategoryTC.getResolver("removeMany"),
};

const ExpenseCategoryRelation = {
  expenseCategoryExpensesResolver: ExpenseCategoryTC.addRelation("variants", {
    resolver: () => ExpenseTC.getResolver("findByIds"),
    prepareArgs: {
      _ids: (source) => source.expenses || [],
    },
    projection: { expenses: true },
  }),
};

export { ExpenseCategoryQuery, ExpenseCategoryMutation, ExpenseCategoryRelation };
