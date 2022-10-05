import React from 'react'

const TodoItem = ({todo}) => {
    return(
        <div className="todoItem">
            <h1>{todo.name}</h1>
            <p>{todo._id}</p>
        </div>
    )
};

export default TodoItem;