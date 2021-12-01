import User from "../types/User";
import jwt from "jsonwebtoken";

export = {
  generateToken: (user: User): string => {
    return jwt.sign(
      {
        id: user.id,
        userName: user.userName,
        registrateAt: user.registrateAt,
      },
      process.env.SECRET_TOKEN,
      { expiresIn: "86400s" }
    );
  },
};
