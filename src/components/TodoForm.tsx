import MyTextarea from '../UI/input/MyTextarea'
import MyButton from '../UI/button/MyButton'
import cl from './TodoForm.module.scss'

interface TodoFormProps {
    handleTextTodo: () => void,
    curentTodo: string,
    addTodo: (str: string) => void
}

const TodoForm: React.FC<TodoFormProps> = ({ handleTextTodo, curentTodo, addTodo }) => {
    return (
        <div className={cl.todoForm}>
            <MyTextarea
                value={curentTodo}
                placeholder='заметка...'
                // onChange={(e) => handleTextTodo(e.target.value)}
            />
            <MyButton onClick={addTodo}>Добавить</MyButton>
        </div>
    )
}

export default TodoForm