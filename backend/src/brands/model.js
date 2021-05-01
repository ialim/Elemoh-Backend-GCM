import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const BrandSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      unique: true,
    },
    products: {
      type: [Schema.Types.ObjectId],
      ref: "Product",
      required: true,
    },
    is_active: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    collection: "Brands",
  }
);
BrandSchema.plugin(timestamps);
BrandSchema.index({ createdAt: 1, updatedAt: 1 });

export const Brand = mongoose.model("Brand", BrandSchema);
export const BrandTC = composeWithMongoose(Brand);
