import {useState, useEffect} from 'react'
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from 'axios';
import Todos from './components/Todos';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Form from './components/Form';

function App() {

  const [todos, setTodos] = useState();

  // Calls the get route to show tasks already in the database
  useEffect(() => {
    const getTodos = async () => {
      const res = await axios.get('http://localhost:3000/tasks');
      setTodos(res.data);
    }
    getTodos();
  },[]);

  // Creates a new task
  const createTodo = async (text) => {
    const res = await axios.post('http://localhost:3000/task', {name: text})
    setTodos(res.data);
  };

  return (
    <div className="App">
      <div className='container'>
        <Header />
        <Form createToDo={createTodo}/>
        {todos ? <Todos todos={todos}/> : <Preloader />}
      </div>

    </div>
  );
}

export default App;