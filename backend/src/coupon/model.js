import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const CouponSchema = new Schema(
  {
    code: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    coupon_type: {
      type: String,
      trim: true,
      required: true,
    },
    amount: {
      type: Number,
      trim: true,
      required: true,
    },
    min_amount: {
      type: Number,
      trim: true,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    qty: {
      type: Number,
      required: true,
    },
    used: {
      type: Boolean,
      required: true,
      default: false,
    },
    expired_date: {
      type: Date,
      required: true,
    },
    is_active: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    collection: "Coupons",
  }
);
CouponSchema.plugin(timestamps);
CouponSchema.index({ createdAt: 1, updatedAt: 1 });

export const Coupon = mongoose.model("Coupon", CouponSchema);
export const CouponTC = composeWithMongoose(Coupon);
