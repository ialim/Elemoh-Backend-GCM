import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const StockCountSchema = new Schema(
  {
    reference_no: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    brand: {
      type: Schema.Types.ObjectId,
      ref: "Brand",
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    warehouse: {
      type: Schema.Types.ObjectId,
      ref: "Warehouse",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    initial_file: {
      type: String,
      trim: true,
      unique: true,
    },
    file_type: {
      type: String,
      trim: true,
      unique: true,
    },
    final_file: {
      type: String,
      trim: true,
      unique: true,
    },
    note: {
      type: String,
      trim: true,
      unique: true,
    },
    is_adjusted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    collection: "Stock_Counts",
  }
);
StockCountSchema.plugin(timestamps);
StockCountSchema.index({ createdAt: 1, updatedAt: 1 });

export const StockCount = mongoose.model("StockCount", StockCountSchema);
export const StockCountTC = composeWithMongoose(StockCount);
