import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className=' font-bold text-[20]'>Counter made using Redux-Toolkit</h1>
     <AddTodo/>
     <Todos/>
    </>
  )
}

export default App
