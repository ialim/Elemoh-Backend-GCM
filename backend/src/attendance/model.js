import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const AttendanceSchema = new Schema(
  {
    Date: {
      type: Date,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    employee: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    },
    check_in: {
      type: Date,
      required: true,
    },
    check_out: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["Late", "Present", "Absent"],
    },
    note: {
      type: String,
      trim: true,
      unique: true,
    },
  },
  {
    collection: "Attendances",
  }
);
AttendanceSchema.plugin(timestamps);
AttendanceSchema.index({ createdAt: 1, updatedAt: 1 });

export const Attendance = mongoose.model("Attendance", AttendanceSchema);
export const AttendanceTC = composeWithMongoose(Attendance);
