import { Component, useState, useEffect } from 'react';
import * as todosAPI from '../../utilities/todos-api';
import TodoList from '../../pages/TodoList/TodoList';
import "../TodoPage/TodoPage.css";


function TodoPage({user}, {addTodo}) {
    const [todo, setTodo] =useState([])
    const [newTodo, setNewTodo] =useState("")
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setNewTodo({...newTodo, [e.target.name]:e.target.value})
        setError('');
        console.log(newTodo)
    }

    async function handleAddTodo(e) {
        e.preventDefault();
         const todoz = await todosAPI.addTodo({text: ""});
    }

    useEffect(function() {
        async function getTodos() {
            // get all menu items
            const todos = await todosAPI.index();
            setTodo(todos);
        }
            getTodos();
    }, []);
    console.log(todo);
    
    const todoList = todo.map((t, id) =>
        <TodoList 
            key={id}
            todo={t}
            id={id}
        />
    )

    return (
        <>
            <h1>{user.name}'s todos...</h1>
            <form className="TodoForm" onSubmit={() =>{todosAPI.addTodo(newTodo)}}>
                <input className="todo-input" type="text" name="text" placeholder="todos..." 
                    onChange={handleChange} value={newTodo.text} autoComplete="off"/>
                <button className="todo-btn" type="submit">add</button>
                {error && <label className="error">{error}</label>}
            </form>
            {todoList}
        </>
    )
}

export default TodoPage;