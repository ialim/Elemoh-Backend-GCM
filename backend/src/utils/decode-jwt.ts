import jwt from "jsonwebtoken";
import { RoleQuery } from "../roles/schema";
import { Role, User as UserT } from "../types/graphql";
import { UserQuery } from "../users/schema";

const decodeJWT = async (token: string): Promise<any | null> => {
  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRETE || "");
    let role: Role | null = null;
    const { id } = decoded;
    const user: UserT | null = await UserQuery.userOne.resolve({
      args: id,
      projection: { id: true, username: true, role: true },
    });
    if (user) {
      role = await RoleQuery.roleById.resolve({
        args: user.role,
        projection: { permissions: true, name: true },
      });
    }
    const authorizedUser = {
      id: user ? user._id : null,
      username: user ? user.username : null,
      permissions: role ? role.permissions : null,
      roleName: role ? role.name : null,
    };
    return authorizedUser;
  } catch (error) {
    return null;
  }
};

export default decodeJWT;
