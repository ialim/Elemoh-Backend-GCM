import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const ReturnPurchaseSchema = new Schema(
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
    total_tax: {
      type: Number,
      required: true,
    },
    total_cost: {
      type: Number,
      required: true,
    },
    order_tax_rate: {
      type: Number,
      required: true,
    },
    order_tax: {
      type: Number,
      required: true,
    },
    grandtotal: {
      type: Number,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    warehouse: {
      type: Schema.Types.ObjectId,
      ref: "Warehouse",
      required: true,
    },
    supplier: {
      type: Schema.Types.ObjectId,
      ref: "Supplier",
      required: true,
    },
    account: {
      type: Schema.Types.ObjectId,
      ref: "Account",
      required: true,
    },
    document: {
      type: String,
      trim: true,
      unique: true,
    },
    return_note: {
      type: String,
      trim: true,
      unique: true,
    },
    staff_note: {
      type: String,
      trim: true,
      unique: true,
    },
  },
  {
    collection: "Return_Purchases",
  }
);
ReturnPurchaseSchema.plugin(timestamps);
ReturnPurchaseSchema.index({ createdAt: 1, updatedAt: 1 });

export const ReturnPurchase = mongoose.model(
  "ReturnPurchase",
  ReturnPurchaseSchema
);
export const ReturnPurchaseTC = composeWithMongoose(ReturnPurchase);
