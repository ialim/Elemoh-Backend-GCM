import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const GiftCardRechargeSchema = new Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    gift_card: {
      type: Schema.Types.ObjectId,
      ref: "GiftCard",
      required: true,
    },
  },
  {
    collection: "GiftCardRecharges",
  }
);
GiftCardRechargeSchema.plugin(timestamps);
GiftCardRechargeSchema.index({ createdAt: 1, updatedAt: 1 });

export const GiftCardRecharge = mongoose.model(
  "GiftCardRecharge",
  GiftCardRechargeSchema
);
export const GiftCardRechargeTC = composeWithMongoose(GiftCardRecharge);
