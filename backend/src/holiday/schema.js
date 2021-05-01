import { UserTC } from "../users/model";
import { Holiday, HolidayTC } from "./model";

const HolidayQuery = {
  holidayById: HolidayTC.getResolver("findById"),
  holidayByIds: HolidayTC.getResolver("findByIds"),
  holidayOne: HolidayTC.getResolver("findOne"),
  holidayMany: HolidayTC.getResolver("findMany"),
  holidayCount: HolidayTC.getResolver("count"),
  holidayConnection: HolidayTC.getResolver("connection"),
  holidayPagination: HolidayTC.getResolver("pagination"),
};

const HolidayMutation = {
  holidayCreateOne: HolidayTC.getResolver("createOne"),
  holidayCreateMany: HolidayTC.getResolver("createMany"),
  holidayUpdateById: HolidayTC.getResolver("updateById"),
  holidayUpdateOne: HolidayTC.getResolver("updateOne"),
  holidayUpdateMany: HolidayTC.getResolver("updateMany"),
  holidayRemoveById: HolidayTC.getResolver("removeById"),
  holidayRemoveOne: HolidayTC.getResolver("removeOne"),
  holidayRemoveMany: HolidayTC.getResolver("removeMany"),
};

const HolidayRelation = {
  holidayUserResolver: HolidayTC.addRelation("user", {
    resolver: () => UserTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.user || null,
    },
    projection: { user: true },
  }),
};

export { HolidayQuery, HolidayMutation, HolidayRelation };
