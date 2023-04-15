import { useState } from "react";

// export interface IUseInputProps
//   extends Array<string | ((e: React.FormEvent<HTMLInputElement>) => void)> {}

type IUseInputProps = [
  string,
  (e: React.FormEvent<HTMLInputElement>) => void,
  React.Dispatch<React.SetStateAction<string>>
];

const useInput = (initialValue: string): IUseInputProps => {
  const [value, setValue] = useState(initialValue);
  const changeInput = (e: React.FormEvent<HTMLInputElement>): void => {
    setValue(e.currentTarget.value);
  };

  return [value, changeInput, setValue];
};

export default useInput;
