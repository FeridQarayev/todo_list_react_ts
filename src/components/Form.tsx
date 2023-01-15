import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/todoSlice/todoSlice";
interface IItem {
  id: number;
  title: string;
  complated: boolean;
}
interface IItems {
  items: IItem[];
  activeFilter: string;
}
const Form = () => {
  const selectiss = (state: IItems) => state.items;
  const items = useSelector(selectiss);
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    if (inputRef.current) {
      dispatch(addTodo(inputRef.current.value));
      inputRef.current.value = "";
    }
  };
  return (
    <form onSubmit={(e: any) => submitHandler(e)}>
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
