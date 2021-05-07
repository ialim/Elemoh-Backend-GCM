import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import { composeWithMongoose } from "graphql-compose-mongoose";

export const ProductVariantSchema = new Schema(
  {
    variant: {
      type: Schema.Types.ObjectId,
      ref: "Variant",
      required: true,
      unique: true,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    unit: {
      type: Schema.Types.ObjectId,
      ref: "Unit",
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    tax: {
      type: Schema.Types.ObjectId,
      ref: "Tax",
    },
    purchase_unit: {
      type: Schema.Types.ObjectId,
      ref: "Unit",
      required: true,
    },
    sale_unit: {
      type: Schema.Types.ObjectId,
      ref: "Unit",
      required: true,
    },
    productSuppliers: {
      type: [Schema.Types.ObjectId],
      ref: "ProductSupplier",
    },
    product_type: {
      type: String,
      required: true,
      enum: ["Standard", "Combo", "Digital"],
      default: "Standard",
    },
    barcode_symbology: {
      type: String,
      required: true,
    },
    item_code: {
      type: String,
      unique: true,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    position: {
      type: Number,
      required: true,
    },
    additional_price: {
      type: Number,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    alert_qty: {
      type: Number,
    },
    promotion: {
      type: Boolean,
      required: true,
      default: false,
    },
    promotion_price: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    tax_method: {
      type: String,
      enum: ["Exclusive", "Inclusive"],
    },
    starting_date: {
      type: Date,
    },
    last_date: {
      type: Date,
    },
    image: {
      type: String,
      trim: true,
    },
    featured: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    collection: "Product_Variants",
  }
);
ProductVariantSchema.plugin(timestamps);
ProductVariantSchema.index({ createdAt: 1, updatedAt: 1 });

export const ProductVariant = mongoose.model(
  "Product_Variant",
  ProductVariantSchema
);
export const ProductVariantTC = composeWithMongoose(ProductVariant);
