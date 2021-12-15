import { Router } from "express";
import TokenType from "../types/TokenType";
import Item from "../types/Item";
import itemService from "../services/itemService";
import ItemSend from "../types/ItemSend";
import ItemRecived from "../types/ItemRecived";
import SoldItem from "../types/SoldItem";
import SoldDto from "../types/SoldDto";

const itemController = Router();

itemController.get("/", async (req, res) => {
  const userData: TokenType = res.locals.userData;

  itemService
    .fetchAllItemsToSell(userData.id)
    .then((items: Item[]) => {
      const itemDtos: ItemSend[] = [];
      items.forEach((item) => itemDtos.push(new ItemSend(item)));
      res.status(200).json(itemDtos);
    })
    .catch((error) => res.status(500).json({ error: "Internal server error" }));
});

itemController.post("/", async (req, res) => {
  const user: TokenType = res.locals.userData;
  const item: ItemRecived = req.body.data;

  itemService
    .saveNewItem(item, user)
    .then((item: Item) => {
      let dto = new ItemSend(item);
      res.status(200).json(dto);
    })
    .catch((error) => res.status(500).json({ error: "Internal server error" }));
});

itemController.put("/:id", async (req, res) => {
  const user: TokenType = res.locals.userData;
  const idToBuy: number = req.params.id as unknown as number;

  itemService
    .buyItem(idToBuy, user)
    .then((soldItem: Item) => {
      let dto = new ItemSend(soldItem);
      res.status(200).json(dto);
    })
    .catch((error) => res.status(500).json({ error: "Internal server error" }));
});

export default itemController;
