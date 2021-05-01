import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const PurchaseProductReturnSchema = new Schema(
  {
    return: {
      type: Schema.Types.ObjectId,
      ref: "Purchase",
      required: true,
    },
    product_variant: {
      type: Schema.Types.ObjectId,
      ref: "ProductVariant",
      required: true,
    },
    unit: {
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
    discount: {
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
    collection: "Product_Purchase_Returns",
  }
);
PurchaseProductReturnSchema.plugin(timestamps);
PurchaseProductReturnSchema.index({ createdAt: 1, updatedAt: 1 });

export const PurchaseProductReturn = mongoose.model(
  "Product_Purchase_Return",
  PurchaseProductReturnSchema
);
export const PurchaseProductReturnTC = composeWithMongoose(
  PurchaseProductReturn
);
