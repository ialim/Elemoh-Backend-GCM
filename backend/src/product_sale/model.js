import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const ProductSaleSchema = new Schema(
  {
    sale: {
      type: Schema.Types.ObjectId,
      ref: "Sale",
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
    collection: "Product_Sales",
  }
);
ProductSaleSchema.plugin(timestamps);
ProductSaleSchema.index({ createdAt: 1, updatedAt: 1 });

export const ProductSale = mongoose.model("Product_Sale", ProductSaleSchema);
export const ProductSaleTC = composeWithMongoose(ProductSale);
