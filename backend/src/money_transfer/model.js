import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const MoneyTransferSchema = new Schema(
  {
    reference_no: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    from_account: {
      type: Schema.Types.ObjectId,
      ref: "Account",
      required: true,
    },
    to_account: {
      type: Schema.Types.ObjectId,
      ref: "Account",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  {
    collection: "Money_Transfers",
  }
);
MoneytransferSchema.plugin(timestamps);
MoneytransferSchema.index({ createdAt: 1, updatedAt: 1 });

export const Moneytransfer = mongoose.model(
  "MoneyTransfer",
  MoneytransferSchema
);
export const MoneyTransferTC = composeWithMongoose(MoneyTransfer);
