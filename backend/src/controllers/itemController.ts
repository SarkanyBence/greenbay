import { Router } from "express";
import TokenType from "../types/TokenType";
import Item from "../types/Item";
import itemService from "../services/itemService";
import ItemSend from "../types/ItemSend";
import ItemRecived from "../types/ItemRecived";

const itemController = Router();

itemController.get("/", async (req, res) => {
  const userData: TokenType = res.locals.userData;

  itemService
    .fetchAllItemsToSell()
    .then((items: Item[]) => {
      const itemDtos: ItemSend[] = [];
      items.forEach((item) => itemDtos.push(new ItemSend(item)));
      res.status(200).json(itemDtos);
    })
    .catch((error) => res.status(500).json({ error: "Internal server error" }));
});

itemController.post("/", async (req, res) => {
  const user: TokenType = res.locals.userData;
  const item: ItemRecived = req.body.data.item;

  itemService
    .saveNewItem(item, user)
    .then((item: Item) => {
      let dto = new ItemSend(item);
      res.status(200).json(dto);
    })
    .catch((error) => res.status(500).json({ error: "Internal server error" }));
});

export default itemController;
