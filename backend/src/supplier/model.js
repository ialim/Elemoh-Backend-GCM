import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const SupplierSchema = new Schema(
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
    company_name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    vat_number: {
      type: Number,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true,
    },
    phone_number: {
      type: Number,
      unique: true,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      lowercase: true,
      unique: true,
      required: true,
    },
    city: {
      type: String,
      lowercase: true,
      required: true,
    },
    state: {
      type: String,
      lowercase: true,
      required: true,
    },
    postal_code: {
      type: String,
      lowercase: true,
      required: true,
    },
    country: {
      type: String,
      lowercase: true,
      required: true,
    },
    is_active: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    collection: "Suppliers",
  }
);
SupplierSchema.plugin(timestamps);
SupplierSchema.index({ createdAt: 1, updatedAt: 1 });

export const Supplier = mongoose.model("Supplier", SupplierSchema);
export const SupplierTC = composeWithMongoose(Supplier);
