import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/todoSlice/todoSlice";
const Form = () => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    console.log("Salammm");
    e.preventDefault();
    if (inputRef.current) {
      dispatch(addTodo(inputRef.current.value));
      inputRef.current.value = "";
    }
  };
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
