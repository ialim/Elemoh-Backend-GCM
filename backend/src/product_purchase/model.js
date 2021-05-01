import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const ProductPurchaseSchema = new Schema(
  {
    purchase: {
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
    status: {
      type: String,
      required: true,
      enum: ["Recieved", "Partial", "Pending", "Ordered"],
    },
  },
  {
    collection: "Product_Purchases",
  }
);
ProductPurchaseSchema.plugin(timestamps);
ProductPurchaseSchema.index({ createdAt: 1, updatedAt: 1 });

export const ProductPurchase = mongoose.model(
  "Product_Purchase",
  ProductPurchaseSchema
);
export const ProductPurchaseTC = composeWithMongoose(ProductPurchase);
