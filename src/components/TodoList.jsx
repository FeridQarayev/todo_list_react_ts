import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { deleteTodo, toggle } from "../redux/todoSlice/todoSlice";
const TodoList = () => {
//   const items = useSelector((state) => state.todos.items); //[...]
//   const activeFilter = useSelector((state) => state.todos.activeFilter);
//   const dispatch = useDispatch();
//   let filtered = [];
//   switch (activeFilter) {
//     case "all":
//       filtered = items;
//       break;
//     case "active":
//       filtered = items.filter((item) => item.complated === false);
//       break;
//     case "complated":
//       filtered = items.filter((item) => item.complated === true);
//       break;
//     default:
//       break;
//   }
  return (
    <ul className="todo-list">
      {/*
      <li className="completed">
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>Learn JavaScript</label>
          <button className="destroy"></button>
        </div>
      </li>
      <li>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>Learn React</label>
          <button className="destroy"></button>
        </div>
      </li>
      <li>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>Have a life!</label>
          <button className="destroy"></button>
        </div>
      </li>
      */}
      {/* {filtered.map((item, index) => {
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
      })} */}
    </ul>
  );
};

export default TodoList;
