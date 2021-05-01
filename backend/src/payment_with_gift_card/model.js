import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const PaymentWithGiftCardSchema = new Schema(
  {
    payment: {
      type: Schema.Types.ObjectId,
      ref: "Payment",
      required: true,
      unique: true,
    },
    gift_card: {
      type: Schema.Types.ObjectId,
      ref: "GiftCard",
      required: true,
      unique: true,
    },
  },
  {
    collection: "Payment_With_Gift_Cards",
  }
);
PaymentWithGiftCardSchema.plugin(timestamps);
PaymentWithGiftCardSchema.index({ createdAt: 1, updatedAt: 1 });

export const PaymentWithGiftCard = mongoose.model(
  "PaymentWithGiftCard",
  PaymentWithGiftCardSchema
);
export const PaymentWithGiftCardTC = composeWithMongoose(PaymentWithGiftCard);
