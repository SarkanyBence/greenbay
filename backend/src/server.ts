import express, { Express } from "express";
import cors from "cors";
import userValidator from "./middlewares/userValidator";
import registerController from "./controllers/registerController";
import tokenValidator from "./middlewares/tokenValidator";
import loginController from "./controllers/loginController";
import itemController from "./controllers/itemController";

const app: Express = express();

app.set("json spaces", 4);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/register", userValidator, registerController);
app.use("/login", userValidator, loginController);
app.use("/items", tokenValidator, itemController);

export default app;
