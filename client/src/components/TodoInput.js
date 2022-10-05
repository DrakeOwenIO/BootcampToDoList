import React, {useRef} from 'react';

const TodoInput = ({ createToDo }) => {
    const todoInput = useRef('')

    const handleSubmit = (e) => {
        e.preventDefault()
        createToDo(todoInput.current.value)
        todoInput.current.value = ""
        window.location.reload();
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" ref={todoInput} required/>
            <input type="submit"/>
        </form>
    )
}

export default TodoInput;