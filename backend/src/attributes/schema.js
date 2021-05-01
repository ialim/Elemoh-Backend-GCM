import { ValueTC } from "../values/model";
import { Attribute, AttributeTC } from "./model";

const AttributeQuery = {
  attributeById: AttributeTC.getResolver("findById"),
  attributeByIds: AttributeTC.getResolver("findByIds"),
  attributeOne: AttributeTC.getResolver("findOne"),
  attributeMany: AttributeTC.getResolver("findMany"),
  attributeCount: AttributeTC.getResolver("count"),
  attributeConnection: AttributeTC.getResolver("connection"),
  attributePagination: AttributeTC.getResolver("pagination"),
};

const AttributeMutation = {
  attributeCreateOne: AttributeTC.getResolver("createOne"),
  attributeCreateMany: AttributeTC.getResolver("createMany"),
  attributeUpdateById: AttributeTC.getResolver("updateById"),
  attributeUpdateOne: AttributeTC.getResolver("updateOne"),
  attributeUpdateMany: AttributeTC.getResolver("updateMany"),
  attributeRemoveById: AttributeTC.getResolver("removeById"),
  attributeRemoveOne: AttributeTC.getResolver("removeOne"),
  attributeRemoveMany: AttributeTC.getResolver("removeMany"),
};

const AttributeRelation = {
  attributeValuesResolver: AttributeTC.addRelation("values", {
    resolver: () => ValueTC.getResolver("findByIds"),
    prepareArgs: {
      _ids: (source) => source.values || [],
    },
    projection: { values: true },
  }),
};

export { AttributeQuery, AttributeMutation, AttributeRelation };
