import express from "express";
import {
  deleteTodoData,
  getOneTodoData,
  getTodoData,
  postTodoData,
  updateTodoData,
} from "../controller/todo.controller.js";

const router = express.Router();
router.get("/todo/:id/", getOneTodoData);
router.get("/todo", getTodoData);
router.post("/todo", postTodoData);
router.patch("/todo/:id/", updateTodoData);
router.delete("/todo/:id/", deleteTodoData);

export default router;
