import { AttributeTC } from "../attributes/model";
import { Value, ValueTC } from "./model";

const ValueQuery = {
  valueById: ValueTC.getResolver("findById"),
  valueByIds: ValueTC.getResolver("findByIds"),
  valueOne: ValueTC.getResolver("findOne"),
  valueMany: ValueTC.getResolver("findMany"),
  valueCount: ValueTC.getResolver("count"),
  valueConnection: ValueTC.getResolver("connection"),
  valuePagination: ValueTC.getResolver("pagination"),
};

const ValueMutation = {
  valueCreateOne: ValueTC.getResolver("createOne"),
  valueCreateMany: ValueTC.getResolver("createMany"),
  valueUpdateById: ValueTC.getResolver("updateById"),
  valueUpdateOne: ValueTC.getResolver("updateOne"),
  valueUpdateMany: ValueTC.getResolver("updateMany"),
  valueRemoveById: ValueTC.getResolver("removeById"),
  valueRemoveOne: ValueTC.getResolver("removeOne"),
  valueRemoveMany: ValueTC.getResolver("removeMany"),
};

const ValueRelation = {
  valueAttributeResolver: ValueTC.addRelation("attribute", {
    resolver: () => AttributeTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.attribute || null,
    },
    projection: { attribute: true },
  }),
};

export { ValueQuery, ValueMutation, ValueRelation };
