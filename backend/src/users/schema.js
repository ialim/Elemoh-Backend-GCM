import { emailSignInResolver } from "../api/users/sign-in";
import { RoleTC } from "../roles/model";
import { VerificationTC } from "../verification/model";
import { WarehouseTC } from "../warehouses/model";
import { User, UserTC } from "./model";

const UserQuery = {
  userById: UserTC.getResolver("findById").wrapResolve((next) => (rp) => {
    if (!rp.context.req.user.permissions.includes("read"))
      return new Error("Not Authorized");
    return next(rp);
  }),
  userByIds: UserTC.getResolver("findByIds").wrapResolve((next) => (rp) => {
    if (!rp.context.req.user.permissions.includes("read"))
      return new Error("Not Authorized");
    return next(rp);
  }),
  userOne: UserTC.getResolver("findOne").wrapResolve((next) => (rp) => {
    if (!rp.context.req.user.permissions.includes("read"))
      return new Error("Not Authorized");
    return next(rp);
  }),
  userMany: UserTC.getResolver("findMany").wrapResolve((next) => (rp) => {
    if (!rp.context.req.user.permissions.includes("read"))
      return new Error("Not Authorized");
    return next(rp);
  }),
  userCount: UserTC.getResolver("count").wrapResolve((next) => (rp) => {
    if (!rp.context.req.user.permissions.includes("read"))
      return new Error("Not Authorized");
    return next(rp);
  }),
  userConnection: UserTC.getResolver("connection").wrapResolve(
    (next) => (rp) => {
      if (!rp.context.req.user.permissions.includes("read"))
        return new Error("Not Authorized");
      return next(rp);
    }
  ),
  userPagination: UserTC.getResolver("pagination").wrapResolve(
    (next) => (rp) => {
      if (!rp.context.req.user.permissions.includes("read"))
        return new Error("Not Authorized");
      return next(rp);
    }
  ),
};

const UserMutation = {
  userCreateOne: UserTC.getResolver("createOne").wrapResolve((next) => (rp) => {
    if (!rp.context.req.user.permissions.includes("create"))
      return new Error("Not Authorized");
    return next(rp);
  }),
  userCreateMany: UserTC.getResolver("createMany").wrapResolve(
    (next) => (rp) => {
      if (!rp.context.req.user.permissions.includes("create"))
        return new Error("Not Authorized");
      return next(rp);
    }
  ),
  userUpdateById: UserTC.getResolver("updateById").wrapResolve(
    (next) => (rp) => {
      if (!rp.context.req.user.permissions.includes("update"))
        return new Error("Not Authorized");
      return next(rp);
    }
  ),
  userUpdateOne: UserTC.getResolver("updateOne").wrapResolve((next) => (rp) => {
    if (!rp.context.req.user.permissions.includes("update"))
      return new Error("Not Authorized");
    return next(rp);
  }),
  userUpdateMany: UserTC.getResolver("updateMany").wrapResolve(
    (next) => (rp) => {
      if (!rp.context.req.user.permissions.includes("update"))
        return new Error("Not Authorized");
      return next(rp);
    }
  ),
  userRemoveById: UserTC.getResolver("removeById").wrapResolve(
    (next) => (rp) => {
      if (!rp.context.req.user.permissions.includes("delete"))
        return new Error("Not Authorized");
      return next(rp);
    }
  ),
  userRemoveOne: UserTC.getResolver("removeOne").wrapResolve((next) => (rp) => {
    if (!rp.context.req.user.permissions.includes("delete"))
      return new Error("Not Authorized");
    return next(rp);
  }),
  userRemoveMany: UserTC.getResolver("removeMany").wrapResolve(
    (next) => (rp) => {
      if (!rp.context.req.user.permissions.includes("delete"))
        return new Error("Not Authorized");
      return next(rp);
    }
  ),
};

const UserRelation = {
  userRoleResolver: UserTC.addRelation("role", {
    resolver: () => RoleTC.getResolver("findById"),
    prepareArgs: {
      _id: (source) => source.role || null,
    },
    projection: { role: true },
  }),

  userWarehousesResolver: UserTC.addRelation("warehouses", {
    resolver: () => WarehouseTC.getResolver("findByIds"),
    prepareArgs: {
      _ids: (source) => source.warehouses || [],
    },
    projection: { warehouses: true },
  }),

  userVerificationsResolver: UserTC.addRelation("verifications", {
    resolver: () => VerificationTC.getResolver("findByIds"),
    prepareArgs: {
      _ids: (source) => source.verifications || [],
    },
    projection: { verifications: true },
  }),
};

const UserService = {
  userSignIn: emailSignInResolver,
};

export { UserQuery, UserMutation, UserRelation, UserService };
