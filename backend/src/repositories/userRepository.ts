import User from "../types/User";
import { returnQuery } from "./startQuery";
import mysql from "mysql2";

export = {
  save: function (user: User) {
    const sql1: string = mysql.format("INSERT INTO users SET ?", user);
    const sql2: string = "SELECT * FROM users WHERE id = ?";

    return returnQuery(sql1, sql2);
  },
};
