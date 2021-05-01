import { Tax, TaxTC } from "./model";

const TaxQuery = {
  taxById: TaxTC.getResolver("findById"),
  taxByIds: TaxTC.getResolver("findByIds"),
  taxOne: TaxTC.getResolver("findOne"),
  taxMany: TaxTC.getResolver("findMany"),
  taxCount: TaxTC.getResolver("count"),
  taxConnection: TaxTC.getResolver("connection"),
  taxPagination: TaxTC.getResolver("pagination"),
};

const TaxMutation = {
  taxCreateOne: TaxTC.getResolver("createOne"),
  taxCreateMany: TaxTC.getResolver("createMany"),
  taxUpdateById: TaxTC.getResolver("updateById"),
  taxUpdateOne: TaxTC.getResolver("updateOne"),
  taxUpdateMany: TaxTC.getResolver("updateMany"),
  taxRemoveById: TaxTC.getResolver("removeById"),
  taxRemoveOne: TaxTC.getResolver("removeOne"),
  taxRemoveMany: TaxTC.getResolver("removeMany"),
};

export { TaxQuery, TaxMutation };
