import React from 'react';
import "./ToDoItem.css";

const TodoItem = ({todo}) => {
    return(
        <div className="todoItem">
            <h1>{todo.name}</h1>
        </div>
    )
};

export default TodoItem;