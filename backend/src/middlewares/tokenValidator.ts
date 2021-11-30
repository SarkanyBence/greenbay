const tokenValidator = (req, res, next) => {
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

  next();
};

export default tokenValidator;
