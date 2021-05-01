import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const DepartmentSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    is_active: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    collection: "Departments",
  }
);
DepartmentSchema.plugin(timestamps);
DepartmentSchema.index({ createdAt: 1, updatedAt: 1 });

export const Department = mongoose.model("Department", DepartmentSchema);
export const DepartmentTC = composeWithMongoose(Department);
