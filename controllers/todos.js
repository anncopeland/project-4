const Todo = require("../models/todoSchema");

async function addTodo(req, res) {
    // const {todo} = req.body;
    try {
        const todo = await Todo.create(req.body)
        todo.save
        res.json(todo);
        console.log(`this is todos${todo}`);
    } 
    catch(error) {
        res.status(400).json(error)
    }
}

function index(req, res) {
    res.render("todos/index",
    {todos: Todo.getAll()}
    
)}

module.exports = {
    addTodo,
    index,
}
