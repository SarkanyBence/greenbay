import userRepo from "../repositories/userRepository";

const userValidator = async (req, res, next) => {
  const userName: string = req.body.userName;
  const password: string = req.body.password;

  if (!userName) {
    res.status(400).json({ error: "Username is required" });
    return;
  }
  if (!password) {
    res.status(400).json({ error: "Password is required" });
    return;
  }
  const exists: boolean = await userRepo.existsByName(userName);
  if (exists) {
    res.status(400).json({ error: "Username is already taken" });
    return;
  }
  next();
};

export default userValidator;