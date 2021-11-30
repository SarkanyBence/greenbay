import registrationService from "../services/registrationService";
import User from "../types/User";
import { Router } from "express";

const itemController = Router();

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
