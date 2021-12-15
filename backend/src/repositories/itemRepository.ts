import * as query from "./startQuery";
import mysql from "mysql2";
import Item from "../types/Item";
import ItemStatus from "../types/ItemStatus";

export = {
  save: function (item: Item): Promise<Item> {
    item.createdAt = Math.floor(Date.now() / 1000);

    const sql1: string = mysql.format("INSERT INTO items SET ?;", item);
    const sql2: string = "SELECT * FROM items WHERE id = ?;";

    return query.returnQuery(sql1, sql2);
  },

  findAllByUserId: function (userId: number): Promise<Item[]> {
    const sql: string = mysql.format(
      "SELECT * FROM items WHERE userId = ?;",
      userId
    );

    return query.arrayQuery(sql);
  },

  findAllSellable: function (): Promise<Item[]> {
    const sql: string = "SELECT * FROM items WHERE status = 'sellable';";

    return query.arrayQuery(sql);
  },

  findById: function (id: number): Promise<Item> {
    const sql: string = mysql.format("SELECT * FROM items WHERE id = ?;", id);

    return query.simpleQuery(sql);
  },

  sellItem: function (itemId: number): Promise<Item> {
    const sql1: string = mysql.format(
      "UPDATE items SET status = ? WHERE id = ?;",
      [ItemStatus.SOLD, itemId]
    );
    const sql2: string = mysql.format(
      "SELECT * FROM items WHERE id = ?;",
      itemId
    );
    return query.doubleQuery(sql1, sql2);
  },
};
