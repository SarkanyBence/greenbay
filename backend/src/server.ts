import express, { Express } from "express";
import cors from "cors";
import userValidator from "./middlewares/userValidator";
import registerController from "./controllers/registerController";

const app: Express = express();

app.set("json spaces", 4);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/register", userValidator, registerController);

// app.use(
//   (
//     err: Error,
//     req: express.Request,
//     res: express.Response,
//     next: express.NextFunction
//   ) => {
//     return res.status(500).json({
//       errorName: err.name,
//       message: err.message,
//       stack: err.stack || "no stack defined",
//     });
//   }
// );

export default app;
