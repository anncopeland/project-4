const express = require("express");
const router = express.Router();
const todosCtrl = require("../../controllers/api/todos");

// GET /api/todos
router.get("/", todosCtrl.index);

// GET /api/todos/:id
router.post("/addTodo/", todosCtrl.addTodo);
// router.post("/", todosCtrl.addTodo);

router.put("/updateTodo/", todosCtrl.updateTodo);

//delete /api/todos
router.delete("/deleteTodo/:id", todosCtrl.deleteTodo);

module.exports = router;