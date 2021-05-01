import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const TaxSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    rate: {
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
    collection: "Taxes",
  }
);
TaxSchema.plugin(timestamps);
TaxSchema.index({ createdAt: 1, updatedAt: 1 });

export const Tax = mongoose.model("Tax", TaxSchema);
export const TaxTC = composeWithMongoose(Tax);
