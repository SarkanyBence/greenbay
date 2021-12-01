import userRepo from "../repositories/userRepository";

const userValidator = async (req, res, next) => {
  const userName: string = req.body.userName;
  const password: string = req.body.password;
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
    res.status(400).json({ error: "Username is already taken" });
    return;
  }

  next();
};

export default userValidator;
