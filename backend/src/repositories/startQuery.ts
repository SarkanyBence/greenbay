import database from "../database/database";
import mysql, { ResultSetHeader } from "mysql2";

const simpleQuery = async (sql: string): Promise<any> => {
  return await startQuery(sql)[0];
};

const arrayQuery = async (sql: string): Promise<any[]> => {
  return await startQuery(sql);
};

const existsQuery = async (sql: string): Promise<boolean> => {
  const result = await startQuery(sql);
  if (Object.values(result[0])[0]) {
    return true;
  } else {
    return false;
  }
};

const returnQuery = async (sql1: string, sql2: string): Promise<any> => {
  const result = await startQuery(sql1);
  console.log(result);
  const lastId = result.insertId;
  sql2 = mysql.format(sql2, lastId);
  return await startQuery(sql2);
};

function startQuery(sql): Promise<any> {
  return new Promise(async (resolve, reject) => {
    const result = database.query(sql, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
}

export { simpleQuery, returnQuery, arrayQuery, existsQuery };
