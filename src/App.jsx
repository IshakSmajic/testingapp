import './App.css'
import AddTask from './components/AddTask'
import DeleteTask from './components/DeleteTask'
import ToggleTask  from './components/ToggleTask'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState([""]);
  return (

      <div>
        <AddTask/>
        <DeleteTask/>
        <ToggleTask/>
      </div>

  )
}

export default App
