import React from "react";
import "../TodoList/TodoList.css";


function TodoList({todo}) {
   console.log(todo); 
   
   return (
        <div className="todo-list">
            <h3>{todo.text}</h3>
        </div>
    )
}

export default TodoList;