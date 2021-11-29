import database from "../database/database";
import mysql from "mysql2";

const simpleQuery = (sql: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    try {
      resolve(startQuery(sql));
    } catch (error) {
      reject(error);
    }
  });
};

const returnQuery = (sql1: string, sql2: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    try {
      const result = startQuery(sql1);
      const lastId = result.insertId;
      sql2 = mysql.format(sql2, lastId);
      resolve(startQuery(sql2));
    } catch (error) {
      reject(error);
    }
  });
};

function startQuery(sql): any {
  console.log(sql);

  database.query(sql, (err, result) => {
    if (err) {
      throw new Error(err.message);
    } else {
      return result;
    }
  });
}

export { simpleQuery, returnQuery };
