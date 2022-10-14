
const Todo = require("../../models/todoSchema");

async function addTodo(req, res) {
    
    console.log("addTodo");
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
    // console.log(todos, "this is the index")
}

//delete todo
async function deleteTodo(req, res) {
    // console.log("delelte", id)
    const deleteTodo = await Todo.findByIdAndDelete(req.params.id)
    res.json(deleteTodo) 
}

async function updateTodo(req, res) {
    const updatetodo = await Todo.findOne(req.body.id)
    updatetodo.isCompleted = true
    console.log(updatetodo)
    await updatetodo.save()
    res.json(updatetodo)
}

module.exports = {
    addTodo,
    index,
    deleteTodo,
    updateTodo,
}
