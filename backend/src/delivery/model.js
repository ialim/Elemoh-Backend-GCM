import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const DeliverySchema = new Schema(
  {
    reference_no: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    sale: {
      type: Schema.Types.ObjectId,
      ref: "Sale",
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    delivered_by: {
      type: String,
      required: true,
    },
    recieved_by: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["Pending", "Delivering", "Delivered"],
    },
    note: {
      type: String,
      trim: true,
      unique: true,
    },
  },
  {
    collection: "Deliveries",
  }
);
DeliverySchema.plugin(timestamps);
DeliverySchema.index({ createdAt: 1, updatedAt: 1 });

export const Delivery = mongoose.model("Delivery", DeliverySchema);
export const DeliveryTC = composeWithMongoose(Delivery);
