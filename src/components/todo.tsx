import { useRecoilState } from "recoil";
import { IData } from "../@types/data";
import { todoData } from "../store/todo";
import { AiFillDelete } from "react-icons/ai";
import styles from "../styles/todo.module.css";

const Todo = ({ ...todo }: IData) => {
  const [todos, setTodos] = useRecoilState(todoData);
  const onChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.currentTarget;
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isCompleted: checked } : todo)));
  };

  const onDelete = (todo: IData) => {
    if (!window.confirm(`${todo.content} 을(를) 삭제하시겠습니까?`)) return;
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  return (
    <li>
      {todo && (
        <>
          <div className={styles.todo_box}>
            <input
              type="checkbox"
              name={todo.id}
              id={todo.id}
              checked={todo.isCompleted}
              onChange={onChecked}
            />
            <label htmlFor={todo.id}>
              <span className={todo.isCompleted ? styles.completed_todo : ""}> {todo.content}</span>
            </label>
            <button onClick={() => onDelete(todo)}>
              <AiFillDelete size="20" title="delete" />
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default Todo;
