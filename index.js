import express from "express";
import dotenv from "dotenv";
import AppRoute from "./AppRoute";

dotenv.config();
const app = express();
app.use(express.json());
express.urlencoded({ extended: true });

app.get("/", (req, res) => {
  res.send("hello world");
});

const port = process?.env?.PORT ?? 3000;
AppRoute(app);
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
