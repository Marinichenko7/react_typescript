import TodoItem from './TodoItem'
import { useAppSelector } from '../hook'
import cl from './TodosList.module.scss'

const TodosList:React.FC = () => {
    const todos = useAppSelector(state => state.todos.list)
    return (
        <div className={cl.blockTodos}>
            {
                todos.map((todo) =>
                    <TodoItem key={todo.id} {...todo} />
                )
            }
        </div>
    )
}

export default TodosList