import { Component, useState, useEffect } from 'react';
import * as todosAPI from '../../utilities/todos-api';
import TodoList from '../../pages/TodoList/TodoList';
import "../TodoPage/TodoPage.css";


function TodoPage({user}) {
    const [todo, setTodo] =useState([])
    const [newTodo, setNewTodo] =useState({
        text: ""
    })
    const [state, setState] = useState({isCompleted:false})

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setNewTodo({...newTodo, [e.target.name]:e.target.value})
        setError('');
        console.log(newTodo)
    }

    async function handleAddTodo(e) {
        e.preventDefault();
         const todoz = await todosAPI.addTodo(newTodo);
         setNewTodo(todoz)
         window.location.reload();
    }
    console.log(newTodo)

    useEffect(function() {
        async function getTodos() {
            // get all menu items
            const todos = await todosAPI.index();
            setTodo(todos);
        }
            getTodos();
    }, []);
   
    const todoList = todo.map((t, idx) =>
        <TodoList 
            key={idx}
            todo={t}
            idx={idx}
            user={user}
            state={state}
            setState={setState}
        />
    )

    return (
        <>
            <h1>{user.name}'s todos...</h1>
            <form className="todo-form" onSubmit={handleAddTodo}>
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