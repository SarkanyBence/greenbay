import registrationService from "../services/registrationService";
import User from "../types/User";
import { Router } from "express";
import loginService from "../services/loginService";

const loginController = Router();

loginController.post("/", async (req, res) => {
  const userName: string = req.body.userName;
  const password: string = req.body.password;

  loginService
    .checkUser(userName, password)
    .then((user: User) => {
      res.status(200).json(user);
    })
    .catch((error) => res.status(500).json({ error: "Internal server error" }));
});

export default loginController;
