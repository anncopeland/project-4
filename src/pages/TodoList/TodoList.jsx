import React from "react";
import "../TodoList/TodoList.css";
import {useState} from "react";
import * as todosAPI from "../../utilities/todos-api";
import NotesPage from "../NotesPage/NotesPage";
import {useParams} from "react-router-dom";


function TodoList({user, todo, handleComplete, handleDelete, state, setState}) {
    const [todoList, setTodoList] = useState([]);
    // const [completed, setCompleted] = useState(false);
    // const [state, setState] = useState({isCompleted:false})
    console.log(todo); 

    let id = useParams().id

    // async function handleComplete() {
    //     setCompleted(true);
    //     await todosAPI.updateTodo(todo);
    //     console.log(`handleComplete ${completed}`)
    // };
    // console.log(`User id ${user._id}`);

    async function handleDelete(id) {
        // const removeArr =[...todoList].filter(todo => todo.id !==id)
        // setTodoList(removeArr);
        const deletingTodo = await todosAPI.deleteTodo(id);
        console.log(`delete: ${deletingTodo}`);
        window.location.reload();
    };
   
    async function handleChange (e, id, check) {
        // setTodoList(isCompletedTodo)
        // const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        // setState({
        //   ...state,
        //   [e.target.name]: value,
        // })
        // console.log(`e.target ${e.target.value}`)
        check ? setState(false) : setState(true)
        // setState(()=>{state.complete ? false : true})
        // setState(!state.complete)
        const completedTodo = await todosAPI.isCompletedTodo(id, state.isCompleted);
    }

    return (
        <>
            <form className="todo-list-form">
                {/* <div className="todo-complete"
                    style={{textDecoration: todo.isCompleted
                    ? "line-through" : "none"}}>  */}
                <h3>{todo.text}</h3> 
                <label className="chk-label">Complete</label>
                <input type="checkbox" 
                    onChange={(e) => handleChange(e, todo._id, todo.isCompleted)}
                    checked={state.isCompletedTodo}
                    name="isCompleted"
                /> 
                <button className="del-btn" key={todo.id} onClick={()=>handleDelete(todo._id)}>Delete</button>
            </form>
        </>
    );
}

export default TodoList;