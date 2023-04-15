import styles from "./styles/app.module.css";
import Header from "./components/header";
import TodoInput from "./components/todoinput";
import Todos from "./components/todos";
import { useRecoilValue } from "recoil";
import { isDark } from "./store/theme";
import "./styles/theme.css";

const App = () => {
  const isDarkTheme = useRecoilValue(isDark);
  return (
    <>
      <div className={`${styles.container} ${isDarkTheme ? "dark_theme" : "light_theme"}`}>
        <div className={`${styles.contents} contents`}>
          <Header />
          <Todos />
          <TodoInput />
        </div>
      </div>
    </>
  );
};

export default App;
