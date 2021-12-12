import * as query from "./startQuery";
import mysql from "mysql2";
import SoldItem from "../types/SoldItem";

export = {
  save: function (soldItem: SoldItem): Promise<SoldItem> {
    soldItem.soldAt = Math.floor(Date.now() / 1000);
    const sql1: string = mysql.format("INSERT INTO soldItems SET ?", soldItem);
    const sql2: string = "SELECT * FROM soldItems WHERE id = ?";

    return query.returnQuery(sql1, sql2);
  },

  findAllBySellerId: function (sellerId: number): Promise<SoldItem[]> {
    const sql: string = mysql.format(
      "SELECT * FROM soldItems WHERE sellerId = ?",
      sellerId
    );

    return query.arrayQuery(sql);
  },

  findAllByBuyerId: function (buyerId: number): Promise<SoldItem[]> {
    const sql: string = mysql.format(
      "SELECT * FROM soldItems WHERE buyerId = ?",
      buyerId
    );

    return query.arrayQuery(sql);
  },
};
