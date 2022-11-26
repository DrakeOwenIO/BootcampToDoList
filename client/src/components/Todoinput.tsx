import React, {useRef} from 'react';
import './ToDoInput.css'

const TodoInput = ({ createToDo }) => {
  const todoInput = useRef('')

  const handleSubmit = (e) => {
      e.preventDefault()
      createToDo(todoInput.current.valueOf)
      todoInput.current.valueOf = ""
      window.location.reload();
  }

  return(
      <form onSubmit={handleSubmit}>
          <input type="text" ref={todoInput} required className='input'/>
          <input type="submit" className='submitBtn'/>
      </form>
  )
}

export default TodoInput;