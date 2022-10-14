function TodoListItem({item}) {
    return (
        <ul>
            <li className="todo-item">{item.name}</li>
        </ul>
    )
}

export default TodoListItem;