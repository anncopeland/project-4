const express = require("express");
const router = express.Router();
const todosCtrl = require("../../controllers/api/todos");

// GET /api/todos
router.get("/", todosCtrl.index);

// GET /api/todos/:id
router.post("/addTodo/", todosCtrl.addTodo);

// delete /api/todos
// router.delete("/deleteTodo/", todosCtrl.deleteTodo);

module.exports = router;