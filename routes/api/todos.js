const express = require("express");
const router = express.Router();
const todosCtrl = require("../../controllers/api/todos");

// GET /api/todos
router.get("/", todosCtrl.index);

// GET /api/todos/:id
router.post("/addTodo/", todosCtrl.addTodo);

// router.put("/updateTodo/", todosCtrl.updateTodo);

//delete /api/todos
// router.delete("/deleteTodo/", todosCtrl.deleteTodo);
router.delete("/:id", todosCtrl.deleteTodo);

//isCompleted PUT /api/todos
router.put('/updateTodo/', todosCtrl.isCompletedTodo)

module.exports = router;