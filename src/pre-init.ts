import dotenv from "dotenv";

dotenv.config({
  path: process.env.NODE_ENV === "production" ? ".prod.env" : ".env",
});
