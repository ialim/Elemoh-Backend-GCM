import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const ProductAdjustmentSchema = new Schema(
  {
    adjustment: {
      type: Schema.Types.ObjectId,
      ref: "Adjustment",
      required: true,
      unique: true,
    },
    product_variant: {
      type: Schema.Types.ObjectId,
      ref: "ProductVariant",
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
  },
  {
    collection: "Product_Adjustments",
  }
);
ProductAdjustmentSchema.plugin(timestamps);
ProductAdjustmentSchema.index({ createdAt: 1, updatedAt: 1 });

export const ProductAdjustment = mongoose.model(
  "Product_Adjustment",
  ProductAdjustmentSchema
);
export const ProductAdjustmentTC = composeWithMongoose(ProductAdjustment);
