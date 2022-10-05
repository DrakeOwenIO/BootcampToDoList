import React from 'react'
import TodoItem from './TodoItem';

const Todos = ({todos}) => {
   return(
    todos?.map(todo => (
        <TodoItem key={todo._id} todo={todo}/>
    ))
   )
};

export default Todos;