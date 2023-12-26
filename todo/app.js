import express from "express";
import router from "./routes/route.js";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome ToDo Server ");
});
app.use("/", router);
export { app };
