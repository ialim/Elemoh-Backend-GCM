import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const PaymentWithChequeSchema = new Schema(
  {
    payment: {
      type: Schema.Types.ObjectId,
      ref: "Payment",
      required: true,
      unique: true,
    },
    cheque_no: {
      type: Number,
      required: true,
    },
  },
  {
    collection: "Payment_With_Chequees",
  }
);
PaymentWithChequeSchema.plugin(timestamps);
PaymentWithChequeSchema.index({ createdAt: 1, updatedAt: 1 });

export const PaymentWithCheque = mongoose.model(
  "PaymentWithCheque",
  PaymentWithChequeSchema
);
export const PaymentWithChequeTC = composeWithMongoose(PaymentWithCheque);
