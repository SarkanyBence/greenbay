import registrationService from "../services/registrationService";
import User from "../types/User";
import { Router } from "express";
import TokenType from "../types/TokenType";
import Item from "../types/Item";
import itemService from "../services/itemService";
import ItemDto from "../types/ItemDto";

const itemController = Router();

itemController.get("/", async (req, res) => {
  const userData: TokenType = res.locals.userData;

  itemService
    .fetchAllItemsToSell()
    .then((items: Item[]) => {
      const itemDtos: ItemDto[] = [];
      items.forEach((item) => itemDtos.push(new ItemDto(item)));
      res.status(200).json(itemDtos);
    })
    .catch((error) => res.status(500).json({ error: "Internal server error" }));
});

itemController.post("/", async (req, res) => {
  const userName: string = req.body.userName;
  const password: string = req.body.password;

  registrationService
    .saveUser(userName, password)
    .then((user: User) => {
      res.status(200).json(user);
    })
    .catch((error) => res.status(500).json({ error: "Internal server error" }));
});

export default itemController;
