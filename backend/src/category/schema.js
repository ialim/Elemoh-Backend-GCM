import { VariantTC } from "../variants/model";
import { Category, CategoryTC } from "./model";

const CategoryQuery = {
  categoryById: CategoryTC.getResolver("findById"),
  categoryByIds: CategoryTC.getResolver("findByIds"),
  categoryOne: CategoryTC.getResolver("findOne"),
  categoryMany: CategoryTC.getResolver("findMany"),
  categoryCount: CategoryTC.getResolver("count"),
  categoryConnection: CategoryTC.getResolver("connection"),
  categoryPagination: CategoryTC.getResolver("pagination"),
};

const CategoryMutation = {
  categoryCreateOne: CategoryTC.getResolver("createOne"),
  categoryCreateMany: CategoryTC.getResolver("createMany"),
  categoryUpdateById: CategoryTC.getResolver("updateById"),
  categoryUpdateOne: CategoryTC.getResolver("updateOne"),
  categoryUpdateMany: CategoryTC.getResolver("updateMany"),
  categoryRemoveById: CategoryTC.getResolver("removeById"),
  categoryRemoveOne: CategoryTC.getResolver("removeOne"),
  categoryRemoveMany: CategoryTC.getResolver("removeMany"),
};

const CategoryRelation = {
  categoryVariantsResolver: CategoryTC.addRelation("variants", {
    resolver: () => VariantTC.getResolver("findByIds"),
    prepareArgs: {
      _ids: (source) => source.variants || [],
    },
    projection: { variants: true },
  }),
};

export { CategoryQuery, CategoryMutation, CategoryRelation };
