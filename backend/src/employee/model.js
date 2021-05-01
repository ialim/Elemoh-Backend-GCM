import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const EmployeeSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true,
    },
    phone_number: {
      type: Number,
      unique: true,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    department: {
      type: Schema.Types.ObjectId,
      ref: "Department",
    },
    payrolls: {
      type: [Schema.Types.ObjectId],
      ref: "Payroll",
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    is_active: {
      type: Boolean,
      required: true,
      default: true,
    },
    is_deleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: "Employees",
  }
);

EmployeeSchema.plugin(timestamps);

EmployeeSchema.index({ createdAt: 1, updatedAt: 1 });

export const Employee = mongoose.model("Employee", EmployeeSchema);
export const EmployeeTC = composeWithMongoose(Employee);
