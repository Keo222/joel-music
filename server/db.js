const Pool = require("pg").Pool;
require("dotenv").config();

const devConfig = {
  user: "postgres",
  password: "k168127",
  host: "localhost",
  database: "joel_music",
  port: 5432,
};

const prodConfig = {
  connectionString: process.env.DATABASE_URL,
};

const pool = new Pool(
  process.env.NODE_ENV === "production" ? prodConfig : devConfig
);

module.exports = pool;
