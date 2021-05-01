import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const GiftCardSchema = new Schema(
  {
    card_no: {
      type: String,
      required: true,
      unique: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    expense: {
      type: Number,
      required: true,
    },
    customer: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    expired_date: {
      type: Date,
      required: true,
    },
    created_by: {
      type: String,
      required: true,
    },
    is_active: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    collection: "GiftCards",
  }
);
GiftCardSchema.plugin(timestamps);
GiftCardSchema.index({ createdAt: 1, updatedAt: 1 });

export const GiftCard = mongoose.model("GiftCard", GiftCardSchema);
export const GiftCardTC = composeWithMongoose(GiftCard);
