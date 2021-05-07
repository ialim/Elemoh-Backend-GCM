import { schemaComposer } from "graphql-compose";
import { User as UserT } from "../../types/graphql";
import { UserQuery } from "../../users/schema";
import comparePassword from "../../utils/compare-password";
import createJWT from "../../utils/createJWT";

type EmailSignIn = {
  email: string;
  password: string;
};

export const emailSignInResolver = schemaComposer.createResolver({
  name: "emailSignIn",
  type: `type EmailSignInResponse {
    ok: Boolean!
    error: String
    token: String
  }`,
  args: <EmailSignIn>{
    email: "String",
    password: "String",
  },
  resolve: async ({ source, args, context, info }) => {
    const user: UserT = await UserQuery.userOne.resolve({ args: args.email, context });
    if (!user) {
      return {
        ok: false,
        error: "User does not exist",
        tonke: null,
      };
    }
    const result = await comparePassword(<string>args.password, user.password);
    if (!result) {
      return {
        ok: false,
        error: "Incorrect password",
        tonke: null,
      };
    }
    const token = createJWT(user._id);
    return {
      ok: true,
      error: null,
      token,
    };
  },
});
