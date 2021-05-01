import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const CategorySchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      unique: true,
    },
    variants: {
      type: [Schema.Types.ObjectId],
      ref: "Variant",
      required: true,
    },
    is_active: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    collection: "Categorys",
  }
);
CategorySchema.plugin(timestamps);
CategorySchema.index({ createdAt: 1, updatedAt: 1 });

export const Category = mongoose.model("Category", CategorySchema);
export const CategoryTC = composeWithMongoose(Category);
