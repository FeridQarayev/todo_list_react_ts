import React from "react";
import TodoList from "./TodoList";
import { allToggle } from "../redux/todoSlice/todoSlice";
import { useDispatch } from "react-redux";

const Content = () => {
  const dispatch = useDispatch();
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label
        onClick={() => {
          dispatch(allToggle());
        }}
        htmlFor="toggle-all"
      >
        Mark all as complete
      </label>

      <TodoList />
    </section>
  );
};

export default Content;
