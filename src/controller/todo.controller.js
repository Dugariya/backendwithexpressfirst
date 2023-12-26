import { Todo } from "../models/todo.model.js";

export const getTodoData = async (req, res) => {
  const data = await Todo.find();
  return res.json(data);
};

export const postTodoData = async (req, res) => {
  console.log("comming...", req.body);
  const data = await Todo.create(req.body);
  return res.json(data);
};
