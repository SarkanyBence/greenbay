import User from "../types/User";
import { existsQuery, returnQuery, simpleQuery } from "./startQuery";
import mysql from "mysql2";

export = {
  save: function (user: User): Promise<User> {
    user.registrateAt = Math.floor(Date.now() / 1000);
    const sql1: string = mysql.format("INSERT INTO users SET ?;", user);
    const sql2: string = "SELECT * FROM users WHERE id = ?;";

    return returnQuery(sql1, sql2);
  },

  findById: function (id: number): Promise<User> {
    const sql: string = mysql.format("SELECT * FROM users WHERE id = ?;", id);

    return simpleQuery(sql);
  },

  findByName: function (userName: string): Promise<User> {
    const sql: string = mysql.format(
      "SELECT * FROM users WHERE userName = ?;",
      userName
    );

    return simpleQuery(sql);
  },

  existsByName: function (userName: string): Promise<boolean> {
    const sql: string = mysql.format(
      "SELECT CASE WHEN EXISTS ( SELECT * FROM users WHERE userName = ?) THEN true ELSE false END;",
      userName
    );

    return existsQuery(sql);
  },
};
