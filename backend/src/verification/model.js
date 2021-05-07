import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

const PHONE = "Phone";
const EMAIL = "Email";

export const VerificationSchema = new Schema(
  {
    target: {
      type: String,
      trim: true,
      enum: [PHONE, EMAIL],
    },
    payload: {
      type: String,
      unique: true,
      required: true,
    },
    key: {
      type: String,
      unique: true,
      required: true,
    },
    used: {
      type: Boolean,
      required: true,
      default: false,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    collection: "Verifications",
  }
);

VerificationSchema.pre("save", function (next) {
  if (this.target === PHONE) {
    this.key = Math.floor(Math.random() * 100000).toString();
  } else if (this.target === EMAIL) {
    this.key = Math.random().toString(36).substr(2);
  }
  return next();
});

VerificationSchema.plugin(timestamps);

VerificationSchema.index({ createdAt: 1, updatedAt: 1 });

export const Verification = mongoose.model("Verification", VerificationSchema);
export const VerificationTC = composeWithMongoose(Verification);
