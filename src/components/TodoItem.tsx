import cl from './TodoItem.module.scss'
import { useAppDispatch } from '../hook'
import{ removeTodo, handleDone } from '../store/todoSlice'

interface TodoItemsProps {
    id: string,
    title: string,
    completed: boolean
}

const TodoItem: React.FC<TodoItemsProps> = ({ id, title, completed }) => {

    const dispatch = useAppDispatch()

    return (
        <div className={cl.todoWraper} key={id} >
            <label className={cl.labelBox}>
                <input
                    onChange={() => dispatch(handleDone(id))}
                    className={cl.checkBox}
                    type="checkbox"
                    checked={completed}
                />
                <span
                    className={cl.pseudoBox}
                ></span>

            </label>
            <span
                className={cl.removeTodo}
                onClick={() => dispatch(removeTodo(id))}
            ></span>
            <div className={cl.todoText}>{title}</div>
        </div>
    )
}

export default TodoItem