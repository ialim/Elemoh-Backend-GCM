import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const QuotationSchema = new Schema(
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
    supplier: {
      type: Schema.Types.ObjectId,
      ref: "Supplier",
      required: true,
    },
    customer: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    product_quotations: {
      type: [Schema.Types.ObjectId],
      ref: "ProductQuotation",
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
    grandtotal: {
      type: Number,
      required: true,
    },
    paid_amount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["Sent", "Pending"],
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
    collection: "Quotations",
  }
);
QuotationSchema.plugin(timestamps);
QuotationSchema.index({ createdAt: 1, updatedAt: 1 });

export const Quotation = mongoose.model("Quotation", QuotationSchema);
export const QuotationTC = composeWithMongoose(Quotation);
