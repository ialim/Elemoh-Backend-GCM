import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const RoleSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      unique: true,
      required: true,
    },
    permissions: {
      type: [String],
    },
    is_active: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    collection: "roles",
  }
);

RoleSchema.plugin(timestamps);

RoleSchema.index({ createdAt: 1, updatedAt: 1 });

export const Role = mongoose.model("Role", RoleSchema);
export const RoleTC = composeWithMongoose(Role);
