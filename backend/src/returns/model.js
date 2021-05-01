import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const ReturnSchema = new Schema(
  {
    reference_no: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    biller: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    },
    warehouse: {
      type: Schema.Types.ObjectId,
      ref: "Warehouse",
      required: true,
    },
    account: {
      type: Schema.Types.ObjectId,
      ref: "Account",
      required: true,
    },
    customer: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    product_returns: {
      type: Schema.Types.ObjectId,
      ref: "ProductReturn",
      required: true,
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
    total_price: {
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
    collection: "Returns",
  }
);
ReturnSchema.plugin(timestamps);
ReturnSchema.index({ createdAt: 1, updatedAt: 1 });

export const Return = mongoose.model("Return", ReturnSchema);
export const ReturnTC = composeWithMongoose(Return);
