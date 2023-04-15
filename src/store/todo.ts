import { IData } from "./../@types/data";
import { atom, selector } from "recoil";

export enum Filters {
  "All" = "All",
  "Active" = "Active",
  "Completed" = "Completed",
}

export const todoData = atom<IData[]>({
  key: "todos",
  default: [],
  effects: [
    // 로컬스토리지 저장 예시
    ({ setSelf, onSet }) => {
      // setSelf 함수는 초기값 지정. onSet함수는 값이 변경될 때마다 값을 동기화
      const todoStoreKey = "ToDo";
      const savedValue = sessionStorage.getItem(todoStoreKey);
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }
      onSet((newValue, _, isReset) => {
        isReset
          ? sessionStorage.removeItem(todoStoreKey)
          : sessionStorage.setItem(todoStoreKey, JSON.stringify(newValue));
      });
    },
  ],
});

export const filterState = atom<Filters>({
  key: "filterState",
  default: Filters.All,
  effects: [
    // 로컬스토리지 저장 예시
    ({ setSelf, onSet }) => {
      // setSelf 함수는 초기값 지정. onSet함수는 값이 변경될 때마다 값을 동기화
      const filterStoreKey = "Filter";
      const savedValue = sessionStorage.getItem(filterStoreKey);
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }
      onSet((newValue, _, isReset) => {
        isReset
          ? sessionStorage.removeItem(filterStoreKey)
          : sessionStorage.setItem(filterStoreKey, JSON.stringify(newValue));
      });
    },
  ],
});

export const filteredTodo = selector({
  key: "filter",
  get: ({ get }) => {
    const todos = get(todoData);
    const filter = get(filterState);

    switch (filter) {
      case Filters.Active:
        return todos.filter((todo) => !todo.isCompleted);
      case Filters.Completed:
        return todos.filter((todo) => todo.isCompleted);
      default:
        return todos;
    }
  },
});
