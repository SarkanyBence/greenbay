import mysql from "mysql2";

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const database = mysql.createConnection(config);

database.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

export default database;
