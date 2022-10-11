// adding info from model todo to the above todo class
const Todo = require('../models/todo');

// This function is talkiing to the view
 function index(req, res) {
    res.render('todos/index', {
      todos: Todo.getAll(),
      time : req.time    // sending time to the view
    });
  }

function show(req, res) {
    res.render('todos/show', {
      skill: Todo.getOne(req.params.id),
     // Would like to display the number of todos in the list
      todoNum: Todo.getAll().findIndex(todo => todo.id === parseInt(req.params.id)) +1
    });
}

function newTodo(req, res) {
    res.render('todos/new');
}

function create(req, res) {
  console.log(req.body)
  Skill.create(req.body)
  res.redirect('/todos')
}

function deleteTodo(req, res){
  Todo.deleteTodo(req.params.id);
  // http://localhost:3000/todos
  res.redirect('/todos');
}

// Need to handle the scenario where the checklist is not checked.
// Checkbox inputs do not send anything in the form at all if they
// are not checked, so we need to set req.body.done accordingly.
function update(req, res){ 
  console.log(req.body.done);
  req.body.done = req.body.done === 'on';
  // Following will also do the job
  // req.body.done = !!req.body.done;
  Todo.update(req.params.id, req.body);
  res.redirect('/todos');
}

function edit(req, res){
  res.render('todos/edit', {
    todo: Todo.getOne(req.params.id)
  });
}

module.exports = {
    index,
    show, 
    create,
    new: newTodo,
    deleteTodo,
    edit,
    update
};
