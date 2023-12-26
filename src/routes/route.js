import express from "express";
import { getTodoData, postTodoData } from "../controller/todo.controller.js";
const router = express.Router();

router.get("/todo", getTodoData);
router.post("/todo", postTodoData);
router.post("/", (req, res) => {});

export default router;
