import { Sequelize } from "sequelize";
import rawConfig from "../config/config.json";

const env = process.env["NODE_ENV"] || "development";
// @ts-expect-error
const config = rawConfig[env];

export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
