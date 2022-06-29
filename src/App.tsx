import cl from './App.module.scss';
import React, { useState } from 'react'
import TodoForm from './components/TodoForm';
import TodosList from './components/TodosList';
import { useAppDispatch } from './hook'
import { addTodo } from './store/todoSlice'

const App:React.FC = () => {
    const [ curentTodo, setCurentTodo ] = useState('')
    const dispatch = useAppDispatch()

    const addTodoItem = () => {
        if (curentTodo.trim().length) {
            dispatch(addTodo(curentTodo))
            setCurentTodo('')
        }
    }
    return (
        <div className={cl.container}>
            <div className={cl.content}>
                <TodoForm
                    curentTodo={curentTodo}
                    setCurentTodo={setCurentTodo}
                    addTodoItem={addTodoItem}
                />
                <TodosList />
            </div>
        </div>
    )
}

export default App