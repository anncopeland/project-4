import React, {Component} from "react";
import {useState} from "react";
import TodoList from "../TodoList/TodoList";

function TodoPage({user}, {addTodo}) {
    const [newTodo, setNewTodo] =useState(
        {name:""}
    )

    const handleChange = (e) => {
        setNewTodo({...newTodo, [e.target.name]:e.target.value})
    }

    const handleAddTodo = (e) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo({name:""})
    }

    return (
        <>
            <h1 >{user.name}'s todos...</h1>
            <form className="TodoForm" onSubmit={handleAddTodo}>
                
                <label>
                    <input type="text" placeholder="todos.."/>
                    <button type="submit">save todo</button>
                </label>
            </form>
            
        </>
    )
}

export default TodoPage;