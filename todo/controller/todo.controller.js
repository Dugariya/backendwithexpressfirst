import { Todo } from "../model/todo.model.js";

export const getOneTodoData = async (req, res) => {
  const todoId = req.params.id;
  try {
    const data = await Todo.findById(todoId);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "An error occurred while getting todo" });
  }
};

export const getTodoData = async (req, res) => {
  const data = await Todo.find();
  return res.json(data);
};

export const postTodoData = async (req, res) => {
  console.log("comming...", req.body);
  try {
    const data = await Todo.create(req.body);
    return res.json(data);
  } catch (error) {
    console.log("err...", error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteTodoData = async (req, res) => {
  try {
    const todoId = req.params.id;
    const deletedTodo = await Todo.findByIdAndDelete(todoId);
    if (deletedTodo) {
      res.status(200).json({ message: "Todo deleted successfully" });
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while deleting the todo" });
  }
};
export const updateTodoData = async (req, res) => {
  const todoId = req.params.id;
  const updateData = req.body;

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(todoId, updateData, {
      new: true,
    });

    if (updatedTodo) {
      res.status(200).json(updatedTodo);
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while updating the todo" });
  }
};
