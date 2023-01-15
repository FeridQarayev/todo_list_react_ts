import { PayloadAction, createSlice } from "@reduxjs/toolkit";
let id = 4;
interface IItem {
  id: number;
  title: string;
  complated: boolean;
}
export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        id: 1,
        title: "HTML",
        complated: false,
      },
      {
        id: 2,
        title: "CSS",
        complated: true,
      },
      {
        id: 3,
        title: "JS",
        complated: false,
      },
    ],
    activeFilter: "all",
  },
  reducers: {
    toggle: (state, action: PayloadAction<{id:number}>) => {
      const { id } = action.payload;
      const item: IItem | undefined = state.items.find(
        (item) => item.id === id
      );
      if (item) item.complated = !item.complated;
    },
    addTodo: (state, action: PayloadAction<string>) => {
      console.log("geldi",action.payload);
      state.items.push({
        id: id,
        title: action.payload,
        complated: false,
      });
      id++;
    },
    deleteTodo: (state, action: PayloadAction<{id:number}>) => {
      const { id } = action.payload;
      const target: IItem | undefined = state.items.find(
        (item) => item.id === id
      );
      if (target) {
        const indexOfTarget: number = state.items.indexOf(target);
        state.items.splice(indexOfTarget, 1);
      }
    },
    changeActiveFilter: (state, action: PayloadAction<string>) => {
      state.activeFilter = action.payload;
    },
    clearCompleted: (state) => {
      state.items = state.items.filter((item) => item.complated === false);
    },
  },
});
export const {
  toggle,
  addTodo,
  deleteTodo,
  clearCompleted,
  changeActiveFilter,
} = todoSlice.actions;
export default todoSlice.reducer;
