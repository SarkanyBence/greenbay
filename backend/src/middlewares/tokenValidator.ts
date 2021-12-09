import jwt from "jsonwebtoken";

const tokenValidator = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: "No token provided!" });
  }
  const token = req.headers.authorization;

  try {
    res.locals.userData = jwt.verify(token, process.env.SECRET_TOKEN);
    next();
  } catch (error) {
    return res.status(401).json({ error: "Token rejected" });
  }
};

export default tokenValidator;
