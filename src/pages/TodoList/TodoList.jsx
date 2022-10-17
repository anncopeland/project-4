import React from "react";
import "../TodoList/TodoList.css";
import {useState} from "react";
import * as todosAPI from "../../utilities/todos-api";
// import {useParams} from "react-router-dom";


function TodoList({user, todo, handleComplete, handleDelete, state, setState, setTodoReload}) {
    const [todoList, setTodoList] = useState([]);
    console.log(todo); 

    // let id = useParams().id

    async function handleDelete(id) {
        // const removeArr =[...todoList].filter(todo => todo.id !==id)
        // setTodoList(removeArr);
        console.log(id, "this is our id");
        const deletingTodo = await todosAPI.deleteTodo(id)
        console.log(`delete: ${deletingTodo}`)
        window.location.reload()
    };
   
    async function handleChange (e, id) {
        // console.log(check)
        console.log(e.target.value, "this ia console")
        console.log(todo._id)
        const completedTodo = await todosAPI.isCompletedTodo(todo);
        setTodoReload([1]);
    }
    
    return (
        // {todoList.map(todo => {}
        // if(user && (user._id == todo.user)) {}
        <>
            <form className="todo-list-form">
                <div className="todo-complete"
                    // style={{
                    //     color: todo.isCompleted === true
                    //     ? 
                    //     "red" 
                    //     : 
                    //     "none"}} 
                /> 
                <h3>{todo.text}</h3> 
                <label 
                    className="chk-label"
                >
                Complete
                </label>
                <input 
                     style={{
                        textDecoration: todo.isCompleted === true
                        ? 
                        "line-through" 
                        : 
                        "none"}} 
                    type="checkbox" 
                    onChange={(e) => 
                        handleChange(e, todo._id, todo.isCompleted)}
                    checked={state.isCompletedTodo}
                    name="isCompleted"
                /> 
                <button 
                    className="del-btn" 
                    key={todo.id} 
                    onClick={()=>handleDelete(todo._id)}
                >
                Delete
                </button>
            </form>
        </>
    )
}
                    
export default TodoList;