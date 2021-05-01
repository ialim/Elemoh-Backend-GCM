import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const HrmSettingSchema = new Schema(
  {
    checkin: {
      type: Date,
      trim: true,
      required: true,
    },
    checkout: {
      type: Date,
      trim: true,
      required: true,
    },
  },
  {
    collection: "HrmSettinges",
  }
);
HrmSettingSchema.plugin(timestamps);
HrmSettingSchema.index({ createdAt: 1, updatedAt: 1 });

export const HrmSetting = mongoose.model("HrmSetting", HrmSettingSchema);
export const HrmSettingTC = composeWithMongoose(HrmSetting);
