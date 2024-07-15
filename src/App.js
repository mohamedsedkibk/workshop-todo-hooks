import logo from './logo.svg';
import './App.css';
import AddTodoForm from './AddTodoForm';
import { useState } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todoList , setTodoList] = useState([
    {
      description : 'todo -01',
      id : '01'
    },
    {
      description : 'todo -02',
      id : '02'
    }

  ])



  const addNewTask = (todo) => {
    setTodoList([
      ...todoList, {...todo, id:uuidv4()}
    ])
  }

  const removeTodo = (id) => {
    setTodoList(
      todoList.filter((obj) => obj.id !== id)
    )
  }



  return (
    <div className="App">
      <AddTodoForm add={addNewTask}/>
      <TodoList data={todoList} removeTodo={removeTodo}/>
    </div>
  );
}

export default App;
