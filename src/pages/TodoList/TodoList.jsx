import React from "react";
import "../TodoList/TodoList.css";
import TodoPage from "../../components/TodoPage/TodoPage";
import {useState, useEffect} from "react";


function TodoList({todo, index, completeTodo, deleteTodo}) {
    const [todoList, setTodoList] = useState([]);

   console.log(todo); 
   
   return (
        <form className="todo-list">
            <div className="todo-container" 
                style={{textDecoration: todo.completed 
                ? "line-through" : ""}}>
                <h3>{todo.text}</h3>
                <button onClick={() => completeTodo(index)}>Complete</button>
            </div> 
        </form>
    );
}

export default TodoList;