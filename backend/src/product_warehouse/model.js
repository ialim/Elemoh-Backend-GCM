import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const ProductWarehouseSchema = new Schema(
  {
    product_variant: {
      type: Schema.Types.ObjectId,
      ref: "ProductVariant",
      required: true,
    },
    warehouse: {
      type: Schema.Types.ObjectId,
      ref: "Warehouse",
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
  },
  {
    collection: "Product_Warehouses",
  }
);
ProductWarehouseSchema.plugin(timestamps);
ProductWarehouseSchema.index({ createdAt: 1, updatedAt: 1 });

export const ProductWarehouse = mongoose.model(
  "Product_Warehouse",
  ProductWarehouseSchema
);
export const ProductWarehouseTC = composeWithMongoose(ProductWarehouse);
