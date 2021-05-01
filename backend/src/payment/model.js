import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const PaymentSchema = new Schema(
  {
    purchase: {
      type: Schema.Types.ObjectId,
      ref: "Purchase",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    sale: {
      type: Schema.Types.ObjectId,
      ref: "Sale",
      required: true,
    },
    account: {
      type: Schema.Types.ObjectId,
      ref: "Account",
      required: true,
    },
    payment_reference: {
      type: String,
      unique: true,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    change: {
      type: Number,
      required: true,
    },
    paying_method: {
      type: String,
      enum: [
        "Cash",
        "Cheque",
        "Debit Card",
        "Gift Card",
        "NaijaPay",
        "PayPal",
        "PayStack",
      ],
      required: true,
      default: "Cash",
    },
    payment_note: {
      type: String,
      unique: true,
      trim: true,
    },
  },
  {
    collection: "Payments",
  }
);
PaymentSchema.plugin(timestamps);
PaymentSchema.index({ createdAt: 1, updatedAt: 1 });

export const Payment = mongoose.model("Payment", PaymentSchema);
export const PaymentTC = composeWithMongoose(Payment);
