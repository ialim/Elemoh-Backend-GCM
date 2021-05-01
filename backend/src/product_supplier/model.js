import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const ProductSupplierSchema = new Schema(
  {
    productVariant: {
      type: Schema.Types.ObjectId,
      ref: "ProductVariant",
      required: true,
    },
    supplier: {
      type: Schema.Types.ObjectId,
      ref: "Supplier",
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    itemCode: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
  },
  {
    collection: "Product_Suppliers",
  }
);
ProductSupplierSchema.plugin(timestamps);
ProductSupplierSchema.index({ createdAt: 1, updatedAt: 1 });

export const ProductSupplier = mongoose.model(
  "Product_Supplier",
  ProductSupplierSchema
);
export const ProductSupplierTC = composeWithMongoose(ProductSupplier);
