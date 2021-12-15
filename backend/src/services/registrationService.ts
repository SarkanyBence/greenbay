import userRepo from "../repositories/userRepository";
import User from "../types/User";

export = {
  saveUser: async (
    userName: string,
    password: string,
    email: string
  ): Promise<User> => {
    let newUser: User = new User(userName, password, email);

    return await userRepo.save(newUser);
  },
};
