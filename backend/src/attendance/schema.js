import { EmployeeTC } from "../Employee/model";
import { UserTC } from "../users/model";
import { Attendance, AttendanceTC } from "./model";

const AttendanceQuery = {
  attendanceById: AttendanceTC.getResolver("findById"),
  attendanceByIds: AttendanceTC.getResolver("findByIds"),
  attendanceOne: AttendanceTC.getResolver("findOne"),
  attendanceMany: AttendanceTC.getResolver("findMany"),
  attendanceCount: AttendanceTC.getResolver("count"),
  attendanceConnection: AttendanceTC.getResolver("connection"),
  attendancePagination: AttendanceTC.getResolver("pagination"),
};

const AttendanceMutation = {
  attendanceCreateOne: AttendanceTC.getResolver("createOne"),
  attendanceCreateMany: AttendanceTC.getResolver("createMany"),
  attendanceUpdateById: AttendanceTC.getResolver("updateById"),
  attendanceUpdateOne: AttendanceTC.getResolver("updateOne"),
  attendanceUpdateMany: AttendanceTC.getResolver("updateMany"),
  attendanceRemoveById: AttendanceTC.getResolver("removeById"),
  attendanceRemoveOne: AttendanceTC.getResolver("removeOne"),
  attendanceRemoveMany: AttendanceTC.getResolver("removeMany"),
};

const AttendanceRelation = {
  attendanceUserResolver: AttendanceTC.addRelation("user", {
    resolver: () => UserTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.user || null,
    },
    projection: { user: true },
  }),

  attendanceEmployeeResolver: AttendanceTC.addRelation("employee", {
    resolver: () => EmployeeTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.employee || null,
    },
    projection: { employee: true },
  }),
};

export { AttendanceQuery, AttendanceMutation, AttendanceRelation };
