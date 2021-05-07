import { SchemaComposer } from "graphql-compose";

import db from "../utils/db"; // eslint-disable-line no-unused-vars

const schemaComposer = new SchemaComposer();

import { UserQuery, UserMutation, UserRelation, UserService } from "../users/schema";
import { RoleQuery, RoleMutation } from "../roles/schema";
import { CategoryMutation, CategoryQuery } from "../category/schema";
import { WarehouseQuery, WarehouseMutation } from "../warehouses/schema";
import { BrandMutation, BrandQuery } from "../brands/schema";
import {
  AttributeQuery,
  AttributeMutation,
  AttributeRelation,
} from "../attributes/schema";
import { ValueMutation, ValueQuery, ValueRelation } from "../values/schema";
import { SupplierMutation, SupplierQuery } from "../supplier/schema";
import {
  PurchaseQuery,
  PurchaseMutation,
  PurchaseRelation,
} from "../purchase/schema";
import { UnitMutation, UnitQuery } from "../unit/schema";
import { TaxQuery, TaxMutation } from "../tax/schema";
import {
  TransferMutation,
  TransferQuery,
  TransferRelation,
} from "../transfers/schema";
import {
  ProductPurchaseMutation,
  ProductPurchaseQuery,
  ProductPurchaseRelation,
} from "../product_purchase/schema";
import { ProductMutation, ProductQuery } from "../products/schema";
import {
  ProductSupplierMutation,
  ProductSupplierQuery,
  ProductSupplierRelation,
} from "../product_supplier/shema";
import {
  ProductTransferMutation,
  ProductTransferQuery,
  ProductTransferRelation,
} from "../product_transfer/schema";
import {
  ProductVariantMutation,
  ProductVariantQuery,
  ProductVariantRelation,
} from "../product_variants/schema";
import {
  CustomerMutation,
  CustomerQuery,
  CustomerRelation,
} from "../customer/schema";
import {
  CustomerGroupMutation,
  CustomerGroupQuery,
} from "../customer_group/schema";
import { DepartmentQuery, DepartmentMutation } from "../department/schema";
import {
  EmployeeMutation,
  EmployeeQuery,
  EmployeeRelation,
} from "../Employee/schema";
import { AccountQuery, AccountMutation } from "../account/schema";
import { ReturnMutation, ReturnQuery, ReturnRelation } from "../returns/schema";
import {
  QuotationMutation,
  QuotationQuery,
  QuotationRelation,
} from "../quotation/schema";
import {
  ProductQuotationMutation,
  ProductQuotationQuery,
  ProductQuotationRelation,
} from "../product_quotation/schema";
import {
  ProductWarehouseMutation,
  ProductWarehouseQuery,
  ProductWarehouseRelation,
} from "../product_warehouse/schema";
import {
  ProductSaleMutation,
  ProductSaleQuery,
  ProductSaleRelation,
} from "../product_sale/schema";
import {
  ProductReturnMutation,
  ProductReturnQuery,
  ProductReturnRelation,
} from "../product_return/schema";
import {
  ProductAdjustmentMutation,
  ProductAdjustmentQuery,
  ProductAdjustmentRelation,
} from "../product_adjustment/schema";
import { CouponMutation, CouponQuery, CouponRelation } from "../coupon/schema";
import {
  AdjustmentQuery,
  AdjustmentRelation,
  AdjustmentMutation,
} from "../adjustment/schema";
import { VerificationQuery, VerificationMutation } from "../verification/schema";

schemaComposer.Query.addFields({
  ...AccountQuery,
  ...AdjustmentQuery,
  ...AdjustmentRelation,
  ...AttributeQuery,
  ...AttributeRelation,
  ...BrandQuery,
  ...CategoryQuery,
  ...CouponQuery,
  ...CouponRelation,
  ...CustomerQuery,
  ...CustomerRelation,
  ...CustomerGroupQuery,
  ...DepartmentQuery,
  ...EmployeeQuery,
  ...EmployeeRelation,
  ...ProductAdjustmentQuery,
  ...ProductAdjustmentRelation,
  ...ProductPurchaseQuery,
  ...ProductPurchaseRelation,
  ...ProductQuotationQuery,
  ...ProductQuotationRelation,
  ...ProductReturnQuery,
  ...ProductReturnRelation,
  ...ProductSaleQuery,
  ...ProductSaleRelation,
  ...ProductSupplierQuery,
  ...ProductSupplierRelation,
  ...ProductTransferQuery,
  ...ProductTransferRelation,
  ...ProductVariantQuery,
  ...ProductVariantRelation,
  ...ProductWarehouseQuery,
  ...ProductWarehouseRelation,
  ...ProductQuery,
  ...PurchaseQuery,
  ...PurchaseRelation,
  ...QuotationQuery,
  ...QuotationRelation,
  ...ReturnQuery,
  ...ReturnRelation,
  ...RoleQuery,
  ...SupplierQuery,
  ...TaxQuery,
  ...TransferQuery,
  ...TransferRelation,
  ...UnitQuery,
  ...UserQuery,
  ...UserRelation,
  ...ValueQuery,
  ...ValueRelation,
  ...VerificationQuery,
  ...WarehouseQuery,
});

schemaComposer.Mutation.addFields({
  ...AccountMutation,
  ...AdjustmentMutation,
  ...AttributeMutation,
  ...BrandMutation,
  ...CategoryMutation,
  ...CouponMutation,
  ...CustomerMutation,
  ...CustomerGroupMutation,
  ...DepartmentMutation,
  ...EmployeeMutation,
  ...ProductAdjustmentMutation,
  ...ProductPurchaseMutation,
  ...ProductQuotationMutation,
  ...ProductReturnMutation,
  ...ProductSaleMutation,
  ...ProductSupplierMutation,
  ...ProductTransferMutation,
  ...ProductVariantMutation,
  ...ProductWarehouseMutation,
  ...ProductMutation,
  ...PurchaseMutation,
  ...ReturnMutation,
  ...QuotationMutation,
  ...RoleMutation,
  ...SupplierMutation,
  ...TaxMutation,
  ...TransferMutation,
  ...UnitMutation,
  ...UserMutation,
  ...ValueMutation,
  ...VerificationMutation,
  ...WarehouseMutation,
  ...UserService,
});

export default schemaComposer.buildSchema();
