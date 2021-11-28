import app from "./server";
import dotenv from "dotenv";

dotenv.config();

const port = Number(process.env.PORT || 4040);
app.listen(port, () => {
  console.info("Express application started on port: " + port);
});
