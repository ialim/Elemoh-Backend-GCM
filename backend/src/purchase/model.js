import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const PurchaseSchema = new Schema(
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
    product_purchases: {
      type: [Schema.Types.ObjectId],
      ref: "ProductPurchase",
      required: true,
    },
    product_purchase_returns: {
      type: [Schema.Types.ObjectId],
      ref: "ProductPurchaseReturns",
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["Recieved", "Partial", "Pending", "Ordered"],
    },
    payment_status: {
      type: String,
      required: true,
      enum: ["Pending", "Due", "Partial", "Paid"],
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
    collection: "Purchases",
  }
);
PurchaseSchema.plugin(timestamps);
PurchaseSchema.index({ createdAt: 1, updatedAt: 1 });

export const Purchase = mongoose.model("Purchase", PurchaseSchema);
export const PurchaseTC = composeWithMongoose(Purchase);
