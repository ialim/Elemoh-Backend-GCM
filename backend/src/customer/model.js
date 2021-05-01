import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const CustomerSchema = new Schema(
  {
    customer_group: {
      type: Schema.Types.ObjectId,
      ref: "Customer_Group",
      required: true,
    },
    company_name: {
      type: String,
      trim: true,
      required: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    image: {
      type: String,
      required: true,
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
    gender: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    tax_no: {
      type: String,
      trim: true,
      unique: true,
    },
    deposit: {
      type: Number,
      default: 0,
      required: true,
    },
    expense: {
      type: Number,
      default: 0,
      required: true,
    },
    is_active: {
      type: Boolean,
      required: true,
      default: true,
    },
    is_deleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: "Customers",
  }
);

CustomerSchema.plugin(timestamps);

CustomerSchema.index({ createdAt: 1, updatedAt: 1 });

export const Customer = mongoose.model("Customer", CustomerSchema);
export const CustomerTC = composeWithMongoose(Customer);
