const Todo = require("../../models/todoSchema");

async function index(req, res) {
    const todos = await Todo.find({user: req.user._id})
    res.json(todos)
    // console.log(todos, "this is the index")
}

// create todo
async function addTodo(req, res) {
    
    try {
        req.body.user = req.user._id
        const todoList = await new Todo(req.body);
        console.log(todoList)
        console.log(`EVERYTHING! ${req.body}`)
        todoList.save()
        res.json(todoList)  // to the database
        console.log(`this is the todo list: ${todoList}`)
    } 
    catch(error) {
        res.status(400).json(error)
    }
}

// update todo
async function isCompletedTodo(req, res) {
    console.log(req.body._id)
    const updatetodo = await Todo.findOne({_id:req.body._id})
    updatetodo.isCompleted = true
    console.log(updatetodo, "this is the controller")
    await updatetodo.save()
    res.json(updatetodo)
}

// delete todo
async function deleteTodo(req, res) {
    // console.log("delelte", id)
    const deleteTodo = await Todo.findByIdAndDelete(req.params.id)
    res.json(deleteTodo) 
}

// export all 
module.exports = {
    index,
    addTodo,
    isCompletedTodo,
    deleteTodo,
}
