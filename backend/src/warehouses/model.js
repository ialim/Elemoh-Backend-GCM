import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const WarehouseSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true,
    },
    address: {
      type: String,
      lowercase: true,
      unique: true,
      required: true,
    },
    phone: {
      type: Number,
      unique: true,
      required: true,
      trim: true,
    },
    product_variants: {
      type: [Schema.Types.ObjectId],
      ref: "ProductVariant",
    },
    is_active: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    collection: "Warehouses",
  }
);
WarehouseSchema.plugin(timestamps);
WarehouseSchema.index({ createdAt: 1, updatedAt: 1 });

export const Warehouse = mongoose.model("Warehouse", WarehouseSchema);
export const WarehouseTC = composeWithMongoose(Warehouse);
