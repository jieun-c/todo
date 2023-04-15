import { atom } from "recoil";
export const isDark = atom({
  key: "isDark",
  default: true,
  effects: [
    // 로컬스토리지 저장 예시
    ({ setSelf, onSet }) => {
      // setSelf 함수는 초기값 지정. onSet함수는 값이 변경될 때마다 값을 동기화
      const themeStoreKey = "Theme";
      const savedValue = sessionStorage.getItem(themeStoreKey);
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }
      onSet((newValue, _, isReset) => {
        isReset
          ? sessionStorage.removeItem(themeStoreKey)
          : sessionStorage.setItem(themeStoreKey, JSON.stringify(newValue));
      });
    },
  ],
});
