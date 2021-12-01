import userRepo from "../repositories/userRepository";
import User from "../types/User";
import * as bcrypt from "../utils/Bcrypt";
import tokenService from "./tokenService";

export = {
  checkUser: async (userName: string, password: string): Promise<any> => {
    let savedUser: User = await userRepo.findByName(userName);
    console.log(bcrypt.verify(password, savedUser.password));

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
