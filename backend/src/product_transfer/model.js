import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const ProductTransferSchema = new Schema(
  {
    transfer: {
      type: Schema.Types.ObjectId,
      ref: "Transfer",
      required: true,
    },
    product_variant: {
      type: Schema.Types.ObjectId,
      ref: "ProductVrariant",
      required: true,
    },
    purchase_unit: {
      type: Schema.Types.ObjectId,
      ref: "Unit",
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    tax_rate: {
      type: Number,
      required: true,
    },
    tax: {
      type: Number,
      required: true,
    },
    net_unit_cost: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  {
    collection: "Product_Transfers",
  }
);
ProductTransferSchema.plugin(timestamps);
ProductTransferSchema.index({ createdAt: 1, updatedAt: 1 });

export const ProductTransfer = mongoose.model(
  "Product_Transfer",
  ProductTransferSchema
);
export const ProductTransferTC = composeWithMongoose(ProductTransfer);
