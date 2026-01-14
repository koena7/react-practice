import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoContextProvider } from './contexts/TodoContext';
import { useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev]);
  }

  const editTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo));
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) => 
        prevTodo.id===id ? {...prevTodo, isComplete: !prevTodo.isComplete} : prevTodo
      )
    )
  }

  //Managing local storage

  useEffect(() => {
    console.log('fetching from local storage')
    const myTodos = JSON.parse(localStorage.getItem('mytodos'));
    console.log(myTodos)
    if (myTodos && myTodos.length>0) setTodos(myTodos)
  }, [])

  useEffect(() => {
    console.log('Saving to local storage')
    console.log(todos)
    localStorage.setItem('mytodos', JSON.stringify(todos))
  }, [todos])

  return (
    <TodoContextProvider value = {{todos, addTodo, editTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {
                          todos.map((each) => {return(
                            <div key={each.id} className='w-full'>
                              <TodoItem todo={each}/>
                            </div>
                          )})
                        }
                    </div>
                </div>
            </div>
    </TodoContextProvider>
  )
}

export default App
