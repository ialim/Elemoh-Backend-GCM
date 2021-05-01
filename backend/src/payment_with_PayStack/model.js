import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const PaymentWithPayStackSchema = new Schema(
  {
    payment: {
      type: Schema.Types.ObjectId,
      ref: "Payment",
      required: true,
      unique: true,
    },
    transaction_id: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    collection: "Payment_With_PayStack",
  }
);
PaymentWithPayStackSchema.plugin(timestamps);
PaymentWithPayStackSchema.index({ createdAt: 1, updatedAt: 1 });

export const PaymentWithPayStack = mongoose.model(
  "Payment_With_PayStack",
  PaymentWithPayStackSchema
);
export const PaymentWithPayStackTC = composeWithMongoose(PaymentWithPayStack);
