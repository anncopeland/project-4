const express = require("express");
const router = express.Router();
const todosCtrl = require("../../controllers/todos");

// GET /api/todos
router.get("/", todosCtrl.index);

// GET /api/todos/:id
router.post("/", todosCtrl.addTodo);

module.exports = router;