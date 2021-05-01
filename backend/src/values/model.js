import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const ValueSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    attribute: {
      type: Schema.Types.ObjectId,
      ref: "Attribute",
      required: true,
    },
  },
  {
    collection: "Values",
  }
);
ValueSchema.plugin(timestamps);
ValueSchema.index({ createdAt: 1, updatedAt: 1 });

export const Value = mongoose.model("Value", ValueSchema);
export const ValueTC = composeWithMongoose(Value);
