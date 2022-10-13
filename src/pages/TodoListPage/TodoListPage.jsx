import TodoListItem from "../TodoListItem/TodoListItem";

function TodoListPage({todo}) {
    const todoListItems = todo.map((t, index) => 
        <TodoListItem item={t} index={index}/>);
    
    return (
           
            <ul>
                {todoListItems}
            </ul> 
    )

}

export default TodoListPage;