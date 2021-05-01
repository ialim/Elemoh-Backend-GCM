import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const CustomerGroupSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    percentage: {
      type: Number,
      trim: true,
      required: true,
    },
    is_active: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    collection: "Customer_Groups",
  }
);
CustomerGroupSchema.plugin(timestamps);
CustomerGroupSchema.index({ createdAt: 1, updatedAt: 1 });

export const CustomerGroup = mongoose.model(
  "Customer_Group",
  CustomerGroupSchema
);
export const CustomerGroupTC = composeWithMongoose(CustomerGroup);
