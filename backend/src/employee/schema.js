import { DepartmentTC } from "../department/model";
import { PayrollTC } from "../payroll/model";
import { UserTC } from "../users/model";
import { Employee, EmployeeTC } from "./model";

const EmployeeQuery = {
  EmployeeById: EmployeeTC.getResolver("findById"),
  EmployeeByIds: EmployeeTC.getResolver("findByIds"),
  EmployeeOne: EmployeeTC.getResolver("findOne"),
  EmployeeMany: EmployeeTC.getResolver("findMany"),
  EmployeeCount: EmployeeTC.getResolver("count"),
  EmployeeConnection: EmployeeTC.getResolver("connection"),
  EmployeePagination: EmployeeTC.getResolver("pagination"),
};

const EmployeeMutation = {
  EmployeeCreateOne: EmployeeTC.getResolver("createOne"),
  EmployeeCreateMany: EmployeeTC.getResolver("createMany"),
  EmployeeUpdateById: EmployeeTC.getResolver("updateById"),
  EmployeeUpdateOne: EmployeeTC.getResolver("updateOne"),
  EmployeeUpdateMany: EmployeeTC.getResolver("updateMany"),
  EmployeeRemoveById: EmployeeTC.getResolver("removeById"),
  EmployeeRemoveOne: EmployeeTC.getResolver("removeOne"),
  EmployeeRemoveMany: EmployeeTC.getResolver("removeMany"),
};

const EmployeeRelation = {
  EmployeeRoleResolver: EmployeeTC.addRelation("user", {
    resolver: () => UserTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.user || null,
    },
    projection: { user: true },
  }),

  EmployeePersonnelResolver: EmployeeTC.addRelation("department", {
    resolver: () => DepartmentTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.department || null,
    },
    projection: { department: true },
  }),

  EmployeePayrollResolver: EmployeeTC.addRelation("payrolls", {
    resolver: () => PayrollTC.getResolver("findByIds"),
    prepareArgs: {
      _id: (source) => source.payrolls || [],
    },
    projection: { payrolls: true },
  }),
};

export { EmployeeQuery, EmployeeMutation, EmployeeRelation };
