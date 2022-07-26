const path = require("path");

const sqlite = {
  client: "sqlite",
  connection: {
    filename: path.join(__dirname, "..", ".tmp/data.db"),
  },
  useNullAsDefault: false,
};

const postgres = {
  client: process.env.DATABASE_CLIENT,
  connection: {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
  },
};

const mysql = {
  client: "mysql",
  connection: {
    database: "strapi",
    user: "strapi",
    password: "strapi",
    port: 3306,
    host: "localhost",
  },
};

const db = {
  mysql,
  sqlite,
  postgres,
};

module.exports = () => ({
  connection: process.env.DB ? db[process.env.DB] || db.sqlite : db.sqlite,
});
