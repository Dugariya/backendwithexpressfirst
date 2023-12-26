import "dotenv/config";

import connectDB from "./db/index.js";
import { app } from "./app.js";
connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.log(`connection failed mongoose db ${err} `);
    });
    app.listen(process.env.PORT, () => {
      console.log(`server is running on port address ${process.env.PORT}`);
    });
  })
  .catch((err) => console.error(`mongoose db connection failed ${err}`));
console.log("welcome to new index js ");
