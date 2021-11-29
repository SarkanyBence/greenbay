import { config } from "dotenv";
config();
import app from "./server";

const port = Number(process.env.PORT || 4040);
app.listen(port, () => {
  console.info("Greenbay started on port: " + port);
});
