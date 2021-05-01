import { AccountTC } from "../account/model";
import { EmployeeTC } from "../Employee/model";
import { UserTC } from "../users/model";
import { Payroll, PayrollTC } from "./model";

const PayrollQuery = {
  payrollById: PayrollTC.getResolver("findById"),
  payrollByIds: PayrollTC.getResolver("findByIds"),
  payrollOne: PayrollTC.getResolver("findOne"),
  payrollMany: PayrollTC.getResolver("findMany"),
  payrollCount: PayrollTC.getResolver("count"),
  payrollConnection: PayrollTC.getResolver("connection"),
  payrollPagination: PayrollTC.getResolver("pagination"),
};

const PayrollMutation = {
  payrollCreateOne: PayrollTC.getResolver("createOne"),
  payrollCreateMany: PayrollTC.getResolver("createMany"),
  payrollUpdateById: PayrollTC.getResolver("updateById"),
  payrollUpdateOne: PayrollTC.getResolver("updateOne"),
  payrollUpdateMany: PayrollTC.getResolver("updateMany"),
  payrollRemoveById: PayrollTC.getResolver("removeById"),
  payrollRemoveOne: PayrollTC.getResolver("removeOne"),
  payrollRemoveMany: PayrollTC.getResolver("removeMany"),
};

const PayrollRelation = {
  payrollAccountResolver: PayrollTC.addRelation("account", {
    resolver: () => AccountTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.account || null,
    },
    projection: { account: true },
  }),

  payrollEmployeeResolver: PayrollTC.addRelation("employee", {
    resolver: () => EmployeeTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.employee || null,
    },
    projection: { employee: true },
  }),

  PayrollUserResolver: PayrollTC.addRelation("user", {
    resolver: () => UserTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.user || null,
    },
    projection: { user: true },
  }),
};

export { PayrollQuery, PayrollMutation, PayrollRelation };
