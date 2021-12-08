import { Router } from "express";
import loginService from "../services/loginService";

const loginController = Router();

loginController.post("/", async (req, res) => {
  const userName: string = req.body.data.userName;
  const password: string = req.body.data.password;

  loginService
    .checkUser(userName, password)
    .then((token: string) => {
      res.status(200).json(token);
    })
    .catch((error) => {
      if (error.status === 401) {
        res.status(401).json({ error: "Username or password is incorrect" });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    });
});

export default loginController;
