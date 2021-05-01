import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const ProductReturnSchema = new Schema(
  {
    return: {
      type: Schema.Types.ObjectId,
      ref: "Return",
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
    net_unit_price: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  {
    collection: "Product_Returns",
  }
);
ProductReturnSchema.plugin(timestamps);
ProductReturnSchema.index({ createdAt: 1, updatedAt: 1 });

export const ProductReturn = mongoose.model(
  "Product_Return",
  ProductReturnSchema
);
export const ProductReturnTC = composeWithMongoose(ProductReturn);
