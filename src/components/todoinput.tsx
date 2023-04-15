import { useRecoilState, useRecoilValue } from "recoil";
import { todoData } from "../store/todo";
import useInput from "../hooks/useInput";
import styles from "../styles/todoinput.module.css";

const TodoInput = () => {
  const [todos, setTodos] = useRecoilState(todoData);
  const [todo, changeTodo, setTodo] = useInput("");

  const addTodo = () => {
    if (!todo) {
      alert("✏️ 할 일을 입력해주세요.");
      return;
    }
    setTodos([{ id: Date.now().toString(), content: todo, isCompleted: false }, ...todos]);
    setTodo("");
  };

  return (
    <div className={`${styles.input_bg} input_bg`}>
      <div className={styles.input_box}>
        <input
          type="text"
          placeholder="Add Todo"
          name="todo"
          value={todo}
          onChange={changeTodo}
          onKeyUp={(e) => {
            if (e.key === "Enter" && todo.length !== 0) addTodo();
          }}
          maxLength={20}
          required
        />
        <button onClick={addTodo}>Add</button>
      </div>
    </div>
  );
};

export default TodoInput;
