import MyTextarea from '../UI/input/MyTextarea'
import MyButton from '../UI/button/MyButton'
import cl from './TodoForm.module.scss'

interface TodoFormProps {
    setCurentTodo: (str: string) => void,
    curentTodo: string,
    addTodoItem: () => void,
}

const TodoForm: React.FC<TodoFormProps> = ({ curentTodo, setCurentTodo, addTodoItem }) => {
    return (
        <div className={cl.todoForm}>
            <MyTextarea
                value={curentTodo}
                placeholder='заметка...'
                onChange={(e) => setCurentTodo(e.currentTarget.value)}
            />
            <MyButton onClick={addTodoItem}>Добавить</MyButton>
        </div>
    )
}

export default TodoForm