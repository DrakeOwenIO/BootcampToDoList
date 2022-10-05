import React, {useRef} from 'react';

const TodoInput = ({ createToDo }) => {
    const todoInput = useRef('')

    const handleSubmit = (e) => {
        e.preventDefault()

        createToDo(todoInput.current.value)
        e.target.value = ''
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" ref={todoInput}/>
            <input type="submit"/>
        </form>
    )
}

export default TodoInput;