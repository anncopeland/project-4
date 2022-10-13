const Todo = require("../../models/todoSchema");

async function addTodo(req, res) {
    console.log("addTodo");
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

async function index(req, res) {
    const todos = await Todo.find({})
    res.json(todos)
    console.log(todos, "this is the index")
}

// show 


module.exports = {
    addTodo,
    index,
}
