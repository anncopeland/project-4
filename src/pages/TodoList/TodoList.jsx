import React from "react";
import "../TodoList/TodoList.css";
import TodoPage from "../../components/TodoPage/TodoPage";
import {useState} from "react";
import {FaTimes} from "react-router-dom";
import * as todosAPI from "../../utilities/todos-api";

function TodoList({todo}) {
    const [todoList, setTodoList] = useState([]);
    const [completed, setCompleted] = useState(false);
    // console.log(todo); 

    async function handleComplete() {
        setCompleted(true);
        await todosAPI.updateTodo(todo);
        console.log(completed)
      }

    return (
        <form className="todo-list">
            <div className="todo-complete"
                    style={{textDecoration: todo.isCompleted
                    ? "line-through" : "none"}}>
                    <h3>{todo.text}</h3>
                    <button onClick={handleComplete}>Complete</button>
                    
            </div> 
        </form>
    );
}

export default TodoList;