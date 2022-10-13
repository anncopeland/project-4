import React from "react";

function TodoList({todo}) {
   console.log(todo); 
   return (
           
            <ul>
               <li>{todo.text}</li> 
            </ul> 
    )

}

export default TodoList;