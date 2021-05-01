import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const SaleSchema = new Schema(
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
    coupon: {
      type: Schema.Types.ObjectId,
      ref: "Coupon",
      required: true,
    },
    customer: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    product_sales:{
      type: [Schema.Types.ObjectId],
      ref: "Customer",
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
    order_discount: {
      type: Number,
      required: true,
    },
    shipping_cost: {
      type: Number,
      required: true,
    },
    coupon_discount: {
      type: Number,
      required: true,
    },
    grandtotal: {
      type: Number,
      required: true,
    },
    paid_amount: {
      type: Number,
      required: true,
    },
    sale_status: {
      type: String,
      required: true,
      enum: ["Completed", "Pending"],
      default: "Completed",
    },
    payment_status: {
      type: String,
      required: true,
      enum: ["Due", "Pending", "Partial", "Paid"],
      default: "Pending",
    },
    document: {
      type: String,
      trim: true,
      unique: true,
    },
    sale_note: {
      type: String,
      trim: true,
    },
    staff_note: {
      type: String,
      trim: true,
    },
  },
  {
    collection: "Sales",
  }
);
SaleSchema.plugin(timestamps);
SaleSchema.index({ createdAt: 1, updatedAt: 1 });

export const Sale = mongoose.model("Sale", SaleSchema);
export const SaleTC = composeWithMongoose(Sale);
