import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const PayrollSchema = new Schema(
  {
    reference_no: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    employee: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    },
    account: {
      type: Schema.Types.ObjectId,
      ref: "Account",
      required: true,
    },
    paying_method: {
      type: String,
      required: true,
    },
    note: {
      type: String,
      trim: true,
      unique: true,
    },
  },
  {
    collection: "Payrolls",
  }
);
PayrollSchema.plugin(timestamps);
PayrollSchema.index({ createdAt: 1, updatedAt: 1 });

export const Payroll = mongoose.model("Payroll", PayrollSchema);
export const PayrollTC = composeWithMongoose(Payroll);
