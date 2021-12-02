import registrationService from "../services/registrationService";
import User from "../types/User";
import { Router } from "express";
import UserDto from "../types/UserDto";

const registerController = Router();

registerController.post("/", async (req, res) => {
  const userName: string = req.body.userName;
  const password: string = req.body.password;

  registrationService
    .saveUser(userName, password)
    .then((user: User) => {
      let userDto: UserDto = new UserDto(user);

      res.status(200).json(userDto);
    })
    .catch((error) => res.status(500).json({ error: "Internal server error" }));
});

export default registerController;
