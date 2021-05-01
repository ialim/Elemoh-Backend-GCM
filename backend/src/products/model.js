import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const ProductSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    code: {
      type: String,
      unique: true,
      required: true,
    },
    brand: {
      type: Schema.Types.ObjectId,
      ref: "Brand",
      required: true,
    },
    product_variants: {
      type: [Schema.Types.ObjectId],
      ref: "ProductVariant",
    },
    file: {
      type: String,
      trim: true,
    },
    product_details: {
      type: String,
      trim: true,
    },
    is_active: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    collection: "Products",
  }
);
ProductSchema.plugin(timestamps);
ProductSchema.index({ createdAt: 1, updatedAt: 1 });

export const Product = mongoose.model("Product", ProductSchema);
export const ProductTC = composeWithMongoose(Product);
