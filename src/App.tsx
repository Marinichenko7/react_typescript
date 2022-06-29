import cl from './App.module.scss';
import { useState, useEffect } from 'react'
import TodoForm from './components/TodoForm';
import TodosList from './components/TodoList';
import { useAppDispatch } from './hook'
import { addTodo } from './store/todoSlice'

const App = () => {
    const [curentTodo, setCurentTodo] = useState('')
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
                    updateText={setCurentTodo}
                    curentTodo={curentTodo}
                    addTodoItem={addTodoItem}
                />
                <TodosList />
            </div>
        </div>
    )
}

export default App