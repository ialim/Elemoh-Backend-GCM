import { SaleTC } from "../sale/model";
import { Delivery, DeliveryTC } from "./model";

const DeliveryQuery = {
  deliveryById: DeliveryTC.getResolver("findById"),
  deliveryByIds: DeliveryTC.getResolver("findByIds"),
  deliveryOne: DeliveryTC.getResolver("findOne"),
  deliveryMany: DeliveryTC.getResolver("findMany"),
  deliveryCount: DeliveryTC.getResolver("count"),
  deliveryConnection: DeliveryTC.getResolver("connection"),
  deliveryPagination: DeliveryTC.getResolver("pagination"),
};

const DeliveryMutation = {
  deliveryCreateOne: DeliveryTC.getResolver("createOne"),
  deliveryCreateMany: DeliveryTC.getResolver("createMany"),
  deliveryUpdateById: DeliveryTC.getResolver("updateById"),
  deliveryUpdateOne: DeliveryTC.getResolver("updateOne"),
  deliveryUpdateMany: DeliveryTC.getResolver("updateMany"),
  deliveryRemoveById: DeliveryTC.getResolver("removeById"),
  deliveryRemoveOne: DeliveryTC.getResolver("removeOne"),
  deliveryRemoveMany: DeliveryTC.getResolver("removeMany"),
};

const DeliveryRelation = {
  deliverySaleResolver: DeliveryTC.addRelation("sale", {
    resolver: () => SaleTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.sale || null,
    },
    projection: { sale: true },
  }),
};

export { DeliveryQuery, DeliveryMutation, DeliveryRelation };
