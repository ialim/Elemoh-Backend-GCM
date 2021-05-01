import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const UnitSchema = new Schema(
  {
    unit_name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    unit_code: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    base_unit: {
      type: String,
      trim: true,
      required: true,
    },
    operator: {
      type: String,
      trim: true,
      required: true,
    },
    operation_value: {
      type: Number,
      required: true,
    },
    is_active: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    collection: "Units",
  }
);
UnitSchema.plugin(timestamps);
UnitSchema.index({ createdAt: 1, updatedAt: 1 });

export const Unit = mongoose.model("Unit", UnitSchema);
export const UnitTC = composeWithMongoose(Unit);
