import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const AccountSchema = new Schema(
  {
    account_no: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    initial_balance: {
      type: Number,
      required: true,
    },
    total_Balance: {
      type: Number,
      required: true,
    },
    note: {
      type: String,
      trim: true,
      unique: true,
    },
    is_default: {
      type: Boolean,
      required: true,
      default: false,
    },
    is_active: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    collection: "Accounts",
  }
);
AccountSchema.plugin(timestamps);
AccountSchema.index({ createdAt: 1, updatedAt: 1 });

export const Account = mongoose.model("Account", AccountSchema);
export const AccountTC = composeWithMongoose(Account);
