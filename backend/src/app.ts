import { ApolloServer } from "apollo-server-express";
import express from "express";
import cors from "cors";
import logger from "morgan";
import helmet from "helmet";
import schema from "./schema";
import mongoose from "mongoose";

const GRAPHQL_ENDPOINT: string = "/graphql";

class App {
  public app: express.Application;
  public server: ApolloServer;
  public pubSub: any;
  constructor() {
    this.app = express();
    this.server = new ApolloServer({
      schema,
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
}

export default new App().app;
