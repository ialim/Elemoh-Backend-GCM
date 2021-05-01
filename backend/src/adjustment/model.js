import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const AdjustmentSchema = new Schema(
  {
    reference_no: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    item: {
      type: Number,
      required: true,
    },
    total_qty: {
      type: Number,
      required: true,
    },
    total_discount: {
      type: Number,
      required: true,
    },
    warehouse: {
      type: Schema.Types.ObjectId,
      ref: "Warehouse",
      required: true,
    },
    product_adjustments: {
      type: [Schema.Types.ObjectId],
      ref: "ProductAdjustment",
      required: true,
    },
    document: {
      type: String,
      trim: true,
      unique: true,
    },
    note: {
      type: String,
      trim: true,
      unique: true,
    },
  },
  {
    collection: "Adjustments",
  }
);
AdjustmentSchema.plugin(timestamps);
AdjustmentSchema.index({ createdAt: 1, updatedAt: 1 });

export const Adjustment = mongoose.model("Adjustment", AdjustmentSchema);
export const AdjustmentTC = composeWithMongoose(Adjustment);
