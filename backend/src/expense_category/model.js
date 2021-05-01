import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const ExpenseCategorySchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    code: {
      type: String,
      trim: true,
      required: true,
    },
    expenses: {
      type: [Schema.Types.ObjectId],
      ref: "Expense",
      required: true,
    },
    is_active: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    collection: "ExpenseCategorys",
  }
);
ExpenseCategorySchema.plugin(timestamps);
ExpenseCategorySchema.index({ createdAt: 1, updatedAt: 1 });

export const ExpenseCategory = mongoose.model(
  "ExpenseCategory",
  ExpenseCategorySchema
);
export const ExpenseCategoryTC = composeWithMongoose(ExpenseCategory);
