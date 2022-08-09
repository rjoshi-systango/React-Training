import React, { useState } from 'react';
import './App.css';
import Todos from './components/Todos/Todos';
// import Todo from './components/todo';
import NewTodos from './components/NewTodos';
import Todo from './components/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // const todo = [new Todo("Learn React"), new Todo("Learn TypeSsript")]

  const addHandler = (todoText: string) => {

    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    })

  }

  const removeTodo = (todoId: string) => {
    setTodos((prevTodos) => (
      prevTodos.filter((item) => item.id !== todoId)
    ))
  }
  return (
    <div className="App">
      <NewTodos onAddText={addHandler} />
      <Todos items={todos} onRemoveTodo={removeTodo}/>
    </div>
  );
}

export default App;
