import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";
import bcrypt from "bcrypt";

const BCRYPT_ROUNDS = 8;

export const UserSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: Schema.Types.ObjectId,
      ref: "Role",
      required: true,
    },
    personnelModel: {
      type: String,
      required: false,
      default: "customer",
      enum: ["employee", "customer", "supplier"],
    },
    warehouses: {
      type: [Schema.Types.ObjectId],
      ref: "Warehouse",
    },
    verifications: {
      type: [Schema.Types.ObjectId],
      ref: "Verification",
    },
    is_active: {
      type: Boolean,
      required: false,
      default: true,
    },
    is_deleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: "users",
  }
);

UserSchema.plugin(timestamps);

UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  bcrypt.hash(this.password, BCRYPT_ROUNDS, (err, hash) => {
    if (err) {
      return next(err);
    }

    this.password = hash;
    next();
  });
});

UserSchema.index({ createdAt: 1, updatedAt: 1 });

export const User = mongoose.model("User", UserSchema);
export const UserTC = composeWithMongoose(User);
