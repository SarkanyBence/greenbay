import { arrayQuery, returnQuery, simpleQuery } from "./startQuery";
import mysql from "mysql2";
import Item from "../types/Item";

export = {
  save: function (item: Item): Promise<Item> {
    item.createdAt = Math.floor(Date.now() / 1000);
    const sql1: string = mysql.format("INSERT INTO items SET ?", item);
    const sql2: string = "SELECT * FROM items WHERE id = ?";

    return returnQuery(sql1, sql2);
  },

  findAllByUserId: function (userId: number): Promise<Item[]> {
    const sql: string = mysql.format(
      "SELECT * FROM items WHERE userId = ?",
      userId
    );

    return arrayQuery(sql);
  },
};
