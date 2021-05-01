import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const HolidaySchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    from_date: {
      type: Date,
      required: true,
    },
    to_date: {
      type: Date,
      required: true,
    },
    note: {
      type: String,
      required: true,
    },
    is_approved: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    collection: "Holidays",
  }
);
HolidaySchema.plugin(timestamps);
HolidaySchema.index({ createdAt: 1, updatedAt: 1 });

export const Holiday = mongoose.model("Holiday", HolidaySchema);
export const HolidayTC = composeWithMongoose(Holiday);
