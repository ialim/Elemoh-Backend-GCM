import { UserTC } from "../users/model";
import { Verification, VerificationTC } from "./model";

const VerificationQuery = {
  verificationById: VerificationTC.getResolver("findById"),
  verificationByIds: VerificationTC.getResolver("findByIds"),
  verificationOne: VerificationTC.getResolver("findOne"),
  verificationMany: VerificationTC.getResolver("findMany"),
  verificationCount: VerificationTC.getResolver("count"),
  verificationConnection: VerificationTC.getResolver("connection"),
  verificationPagination: VerificationTC.getResolver("pagination"),
};

const VerificationMutation = {
  verificationCreateOne: VerificationTC.getResolver("createOne"),
  verificationCreateMany: VerificationTC.getResolver("createMany"),
  verificationUpdateById: VerificationTC.getResolver("updateById"),
  verificationUpdateOne: VerificationTC.getResolver("updateOne"),
  verificationUpdateMany: VerificationTC.getResolver("updateMany"),
  verificationRemoveById: VerificationTC.getResolver("removeById"),
  verificationRemoveOne: VerificationTC.getResolver("removeOne"),
  verificationRemoveMany: VerificationTC.getResolver("removeMany"),
};

const VerificationRelation = {
    verificationUserResolver: VerificationTC.addRelation("user", {
      resolver: () => UserTC.getResolver("findById"),
      prepareArgs: {
        _id: (source) => source.user || null,
      },
      projection: { user: true },
    }),
  };
  

export { VerificationQuery, VerificationMutation, VerificationRelation };
