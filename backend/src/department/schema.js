import { Department, DepartmentTC } from "./model";

const DepartmentQuery = {
  departmentById: DepartmentTC.getResolver("findById"),
  departmentByIds: DepartmentTC.getResolver("findByIds"),
  departmentOne: DepartmentTC.getResolver("findOne"),
  departmentMany: DepartmentTC.getResolver("findMany"),
  departmentCount: DepartmentTC.getResolver("count"),
  departmentConnection: DepartmentTC.getResolver("connection"),
  departmentPagination: DepartmentTC.getResolver("pagination"),
};

const DepartmentMutation = {
  departmentCreateOne: DepartmentTC.getResolver("createOne"),
  departmentCreateMany: DepartmentTC.getResolver("createMany"),
  departmentUpdateById: DepartmentTC.getResolver("updateById"),
  departmentUpdateOne: DepartmentTC.getResolver("updateOne"),
  departmentUpdateMany: DepartmentTC.getResolver("updateMany"),
  departmentRemoveById: DepartmentTC.getResolver("removeById"),
  departmentRemoveOne: DepartmentTC.getResolver("removeOne"),
  departmentRemoveMany: DepartmentTC.getResolver("removeMany"),
};

export { DepartmentQuery, DepartmentMutation };
