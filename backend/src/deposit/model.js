import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const DepositSchema = new Schema(
  {
    amount: {
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
    note: {
      type: String,
      trim: true,
      unique: true,
    },
  },
  {
    collection: "Deposits",
  }
);
DepositSchema.plugin(timestamps);
DepositSchema.index({ createdAt: 1, updatedAt: 1 });

export const Deposit = mongoose.model("Deposit", DepositSchema);
export const DepositTC = composeWithMongoose(Deposit);
