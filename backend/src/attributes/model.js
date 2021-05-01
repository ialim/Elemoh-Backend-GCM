import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const AttributeSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    values: {
      type: [Schema.Types.ObjectId],
      ref: "Value",
      required: true,
    },
    is_active: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    collection: "Attributes",
  }
);
AttributeSchema.plugin(timestamps);
AttributeSchema.index({ createdAt: 1, updatedAt: 1 });

export const Attribute = mongoose.model("Attribute", AttributeSchema);
export const AttributeTC = composeWithMongoose(Attribute);
