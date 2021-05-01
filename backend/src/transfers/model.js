import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const TransferSchema = new Schema(
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
    total_tax: {
      type: Number,
      required: true,
    },
    total_cost: {
      type: Number,
      required: true,
    },
    shipping_cost: {
      type: Number,
      required: true,
    },
    grand_total: {
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
    from_warehouse: {
      type: Schema.Types.ObjectId,
      ref: "Warehouse",
      required: true,
    },
    to_warehouse: {
      type: Schema.Types.ObjectId,
      ref: "warehouse",
      required: true,
    },
    product_transfers: {
      type: [Schema.Types.ObjectId],
      ref: "ProductTransfer",
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["Completed", "Pending", "Sent"],
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
    collection: "Transfers",
  }
);
TransferSchema.plugin(timestamps);
TransferSchema.index({ createdAt: 1, updatedAt: 1 });

export const Transfer = mongoose.model("Transfer", TransferSchema);
export const TransferTC = composeWithMongoose(Transfer);
