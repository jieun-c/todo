import { useRecoilValue } from "recoil";
import { filteredTodo, todoData } from "../store/todo";
import styles from "../styles/todos.module.css";
import Todo from "./todo";

const Todos = () => {
  const origin = useRecoilValue(todoData);
  const todos = useRecoilValue(filteredTodo);

  return (
    <div className={`${styles.container} ${origin.length !== 0 && styles.active}`}>
      {origin.length === 0 ? (
        <p className={styles.empty}>⬇️ 할일을 입력해주세요 🤓</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <Todo key={todo.id} {...todo} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todos;
