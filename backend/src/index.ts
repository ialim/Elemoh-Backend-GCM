import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import "./utils/db";

const handleAppStart = () => {
    console.log(`🚀 Server listening on port ${process.env.PORT}`);
    console.log(`😷 Health checks available at ${process.env.HEALTH_ENDPOINT}`);
  };


app.listen({ port: process.env.PORT }, handleAppStart);