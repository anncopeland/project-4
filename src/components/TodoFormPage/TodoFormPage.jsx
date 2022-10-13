import { Component, useState } from 'react';
import * as todosAPI from '../../utilities/todos-api';

function TodoPage({user}, {addTodo}) {
    const [todo, setTodo] =useState("")
    const [newTodo, setNewTodo] =useState(
        {name:""}
    )
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setNewTodo({...newTodo, [e.target.name]:e.target.value})
        setError('');
    }

    async function handleAddTodo(e) {
        e.preventDefault();
        const todoz = await todosAPI.addTodo(newTodo);
        // addTodo(todoz);
        // setNewTodo({name:""})
    }

    return (
        <>
            <h1 >{user.name}'s todos...</h1>
            <form className="TodoForm" onSubmit={handleAddTodo}>
                <input className="todo-input" type="text" name="text" placeholder="todos..." 
                    onChange={handleChange} value={newTodo.text} autoComplete="off"/>
                    <button type="submit">save todo</button>
                {error && <label className="error">{error}</label>}
            </form>
        </>
    )
}

export default TodoPage;