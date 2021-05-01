import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const ExpenseSchema = new Schema(
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
    warehouse: {
      type: Schema.Types.ObjectId,
      ref: "Warehouse",
      required: true,
    },
    expense_category: {
      type: Schema.Types.ObjectId,
      ref: "ExpenseCategory",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    account: {
      type: Schema.Types.ObjectId,
      ref: "Account",
      required: true,
    },
    note: {
      type: String,
      trim: true,
      unique: true,
    },
  },
  {
    collection: "Expenses",
  }
);
ExpenseSchema.plugin(timestamps);
ExpenseSchema.index({ createdAt: 1, updatedAt: 1 });

export const Expense = mongoose.model("Expense", ExpenseSchema);
export const ExpenseTC = composeWithMongoose(Expense);
