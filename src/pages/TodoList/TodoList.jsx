import React from "react";
import "../TodoList/TodoList.css";
// import TodoPage from "../../components/TodoPage/TodoPage";
import {useState} from "react";
import * as todosAPI from "../../utilities/todos-api";
import NotesPage from "../NotesPage/NotesPage";
import {useParams} from "react-router-dom";

function TodoList({user, todo, handleComplete, handleDelete}) {
    const [todoList, setTodoList] = useState([]);
    const [completed, setCompleted] = useState(false);
    // console.log(todo); 

    let id = useParams().id

    async function handleComplete() {
        setCompleted(true);
        await todosAPI.updateTodo(todo);
        console.log(completed)
    };
    console.log(user._id);

    async function handleDelete(id) {
        // const removeArr =[...todoList].filter(todo => todo.id !==id)
        // setTodoList(removeArr);
        const deletingTodo = await todosAPI.deleteTodo(id);
        console.log(`delete: ${deletingTodo}`)
        // navigate('/todolist')
        window.location.reload();
    };

    return (
        <>
        {/* {user && user._id === todo.user ?  */}
            {/* {todo.user === user._id ?  */}
            <form className="todo-list">
        {/* {if (user && (user._id === estimate.user)) */}
                <div className="todo-complete"
                    style={{textDecoration: todo.isCompleted
                    ? "line-through" : "none"}}> 
                     
                    <h3>{todo.text}</h3>
                    <button onClick={handleComplete}>Complete</button>
                    <button className="del-btn" key={todo.id} onClick={()=>handleDelete(todo._id)}>Delete</button>
                </div> 
            </form>
             {/* :
            <div></div>
            <h1>{todo.text}</h1>
         }  */}
        </>
    );
}

export default TodoList;