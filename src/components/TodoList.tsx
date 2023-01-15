import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggle } from "../redux/todoSlice/todoSlice";

interface IItem {
  id: number;
  title: string;
  complated: boolean;
}
interface IState {
  todos: { activeFilter: string; items: IItem[]; allComplated: boolean };
}
const TodoList = () => {
  const items = useSelector((state: IState) => state.todos.items);
  const activeFilter: string = useSelector(
    (state: IState) => state.todos.activeFilter
  );
  const dispatch = useDispatch();
  let filtered: IItem[] = [];
  switch (activeFilter) {
    case "all":
      filtered = items;
      break;
    case "active":
      filtered = items.filter((item) => item.complated === false);
      break;
    case "complated":
      filtered = items.filter((item) => item.complated === true);
      break;
    default:
      break;
  }
  return (
    <ul className="todo-list">
      {filtered.map((item: IItem, index: number) => {
        return (
          <li key={index} className={item.complated ? "completed" : ""}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={item.complated}
                onChange={() => {
                  dispatch(toggle({ id: item.id }));
                }}
              />
              <label>{item.title}</label>
              <button
                className="destroy"
                onClick={() => {
                  dispatch(deleteTodo({ id: item.id }));
                }}
              ></button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
