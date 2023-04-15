import styles from "../styles/header.module.css";
import { MdDarkMode } from "react-icons/md";
import { TbSun } from "react-icons/tb";
import { useRecoilState } from "recoil";
import { Filters, filterState } from "../store/todo";
import { isDark } from "../store/theme";

const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useRecoilState(isDark);
  const [filter, setFilter] = useRecoilState(filterState);

  const changeTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  const changeFilter = (e: React.MouseEvent<HTMLElement>) => {
    setFilter(e.currentTarget.id as Filters);
  };

  return (
    <div className={styles.header}>
      <button className={styles.themeButton} onClick={changeTheme}>
        {isDarkTheme ? <TbSun className={styles.icon} /> : <MdDarkMode className={styles.icon} />}
      </button>
      <div className={styles.btn_group}>
        <button
          className={filter === Filters.All ? styles.active : ""}
          id={Filters.All}
          onClick={changeFilter}
        >
          All
        </button>
        <button
          className={filter === Filters.Active ? styles.active : ""}
          id={Filters.Active}
          onClick={changeFilter}
        >
          Active
        </button>
        <button
          className={filter === Filters.Completed ? styles.active : ""}
          id={Filters.Completed}
          onClick={changeFilter}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default Header;
