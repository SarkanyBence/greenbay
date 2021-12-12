import userRepo from "../repositories/userRepository";
import User from "../types/User";
import * as bcrypt from "../utils/Bcrypt";
import tokenService from "./tokenService";

export = {
  checkUser: async (userName: string, password: string): Promise<any> => {
    let savedUser: User = await userRepo.findByName(userName);
    if (savedUser === undefined) {
      console.log(savedUser);
      throw {
        status: 401,
        message: "User not found!",
      };
    }

    if (bcrypt.verify(password, savedUser.password)) {
      return tokenService.generateToken(savedUser);
    } else {
      throw {
        status: 401,
        message: "Username or password is incorrect",
      };
    }
  },
};
