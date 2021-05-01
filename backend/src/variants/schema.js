import { Variant, VariantTC } from "./model";

const VariantQuery = {
  variantById: VariantTC.getResolver("findById"),
  variantByIds: VariantTC.getResolver("findByIds"),
  variantOne: VariantTC.getResolver("findOne"),
  variantMany: VariantTC.getResolver("findMany"),
  variantCount: VariantTC.getResolver("count"),
  variantConnection: VariantTC.getResolver("connection"),
  variantPagination: VariantTC.getResolver("pagination"),
};

const VariantMutation = {
  variantCreateOne: VariantTC.getResolver("createOne"),
  variantCreateMany: VariantTC.getResolver("createMany"),
  variantUpdateById: VariantTC.getResolver("updateById"),
  variantUpdateOne: VariantTC.getResolver("updateOne"),
  variantUpdateMany: VariantTC.getResolver("updateMany"),
  variantRemoveById: VariantTC.getResolver("removeById"),
  variantRemoveOne: VariantTC.getResolver("removeOne"),
  variantRemoveMany: VariantTC.getResolver("removeMany"),
};

export { VariantQuery, VariantMutation };
