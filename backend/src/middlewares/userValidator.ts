import userRepo from "../repositories/userRepository";
import User from "../types/User";

const userValidator = async (req, res, next) => {
  const userName: string = req.body.data.userName;
  const password: string = req.body.data.password;
  const path: string = req.originalUrl;

  if (!userName) {
    res.status(400).json({ error: "Username is required" });
    return;
  }

  if (!password) {
    res.status(400).json({ error: "Password is required" });
    return;
  }

  if (!path.includes("login") && (await userRepo.existsByName(userName))) {
    res.status(422).json({ error: "Username is already taken" });
    return;
  }

  next();
};

export default userValidator;
