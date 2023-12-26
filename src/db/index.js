import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    let connection = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(connection.connection.host, "conne....");
  } catch (error) {
    console.error("MongoseDB connection error", error);
  }
};

export default connectDB;
