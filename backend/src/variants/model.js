import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const VariantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    collection: "Variants",
  }
);
VariantSchema.plugin(timestamps);
VariantSchema.index({ createdAt: 1, updatedAt: 1 });

export const Variant = mongoose.model("Variant", VariantSchema);
export const VariantTC = composeWithMongoose(Variant);
