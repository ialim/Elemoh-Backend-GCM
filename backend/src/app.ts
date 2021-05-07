import { ApolloServer } from "apollo-server-express";
import express, { NextFunction, Response } from "express";
import cors from "cors";
import logger from "morgan";
import helmet from "helmet";
import schema from "./schema";
import mongoose from "mongoose";
import decodeJWT from "./utils/decode-jwt";

const GRAPHQL_ENDPOINT: string = "/graphql";

class App {
  public app: express.Application;
  public server: ApolloServer;
  public pubSub: any;
  constructor() {
    this.app = express();
    this.server = new ApolloServer({
      schema,
      context: (req) => {
        return {
          req: req.req,
        };
      },
      playground: process.env.NODE_ENV === "development" ? true : false,
      introspection: true,
      tracing: true,
    });
    this.middlewares();
  }
  private middlewares = (): void => {
    this.app.use(cors());
    this.app.use(logger("dev"));
    this.app.use(
      helmet({
        contentSecurityPolicy:
          process.env.NODE_ENV === "production" ? undefined : false,
      })
    );
    this.app.use(this.jwtMiddleware);
    this.server.applyMiddleware({
      app: this.app,
      path: GRAPHQL_ENDPOINT,
      onHealthCheck: () =>
        new Promise<void>((resolve, reject) => {
          if (mongoose.connection.readyState > 0) {
            resolve();
          } else {
            reject();
          }
        }),
    });
  };

  private jwtMiddleware = async (
    req,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const token = req.get("X-JWT");
    if (token) {
      const user = await decodeJWT(token);
      if (user) {
        req.user = user;
      } else {
        req.user = null;
      }
    }
    next();
  };
}

export default new App().app;
