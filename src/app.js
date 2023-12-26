import express from "express";
import router from "./routes/route.js";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.use("/api", router);
export { app };
