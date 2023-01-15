import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, setLocalList } from "../redux/todoSlice/todoSlice";
interface IItem {
  id: number;
  title: string;
  complated: boolean;
}
const Form = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (inputRef.current) {
      dispatch(addTodo(inputRef.current.value));
      inputRef.current.value = "";
    }
  };
  function localData(): void {
    const localStorData = localStorage.getItem("item");
    if (localStorData != null) {
      const data: IItem[] = JSON.parse(localStorData);
      data.map((item: IItem) => dispatch(setLocalList(item)));
    }
  }
  localData();
  return (
    <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => submitHandler(e)}>
      <input
        ref={inputRef}
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
      />
    </form>
  );
};

export default Form;
