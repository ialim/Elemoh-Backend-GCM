import type { Resolver } from "graphql-compose";

export function allowOnlyForViewAccessRights(resolvers: {
  [name: string]: Resolver<any, any, any>;
}) {
  const secureResolvers: {
    [name: string]: Resolver<any, any, any>;
  } = {};
  Object.keys(resolvers).forEach((k) => {
    secureResolvers[k] = resolvers[k].wrapResolve((next) => (rp) => {
      if (!rp.context.req.user.permissions.includes("read")) {
        return next(rp);
      }
      throw new Error(
        "✋ 🛑 For security reason this operation is allowed only for Users with read permissions. "
      );
    });
  });
  return secureResolvers;
}

export function allowOnlyForCreateAccessRights(resolvers: {
  [name: string]: Resolver<any, any, any>;
}) {
  const secureResolvers = {};
  Object.keys(resolvers).forEach((k) => {
    secureResolvers[k] = resolvers[k].wrapResolve((next) => (rp) => {
      if (!rp.context.req.user.permissions.includes("create")) {
        return next(rp);
      }
      throw new Error(
        "✋ 🛑 For security reason this operation is allowed only for Users with read permissions. "
      );
    });
  });
  return secureResolvers;
}

export function allowOnlyForUpdateAccessRights(resolvers: {
  [name: string]: Resolver<any, any, any>;
}) {
  const secureResolvers = {};
  Object.keys(resolvers).forEach((k) => {
    secureResolvers[k] = resolvers[k].wrapResolve((next) => (rp) => {
      if (!rp.context.req.user.permissions.includes("update")) {
        return next(rp);
      }
      throw new Error(
        "✋ 🛑 For security reason this operation is allowed only for Users with read permissions. "
      );
    });
  });
  return secureResolvers;
}

export function allowOnlyForDeleteAccessRights(resolvers: {
  [name: string]: Resolver<any, any, any>;
}) {
  const secureResolvers: {
    [name: string]: Resolver<any, any, any>;
  } = {};
  Object.keys(resolvers).forEach((k) => {
    secureResolvers[k] = resolvers[k].wrapResolve((next) => (rp) => {
      if (!rp.context.req.user.permissions.includes("delete")) {
        return next(rp);
      }
      throw new Error(
        "✋ 🛑 For security reason this operation is allowed only for Users with read permissions. "
      );
    });
  });
  return secureResolvers;
}

export function adminAccess(resolvers) {
  Object.keys(resolvers).forEach((k) => {
    resolvers[k] = resolvers[k].wrapResolve((next) => (rp) => {
      if (!rp.context.req.user.permissions.includes("read")) {
        throw new Error("You should be admin, to have access to this action.");
      }
      return next(rp);
    });
  });
  return resolvers;
}
