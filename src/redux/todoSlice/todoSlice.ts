import { PayloadAction, createSlice } from "@reduxjs/toolkit";
let id = 0;
interface IItem {
  id: number;
  title: string;
  complated: boolean;
}
export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    items: Array<IItem>(),
    activeFilter: "all",
    allComplated: false,
  },
  reducers: {
    toggle: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      const item: IItem | undefined = state.items.find(
        (item) => item.id === id
      );
      if (item) item.complated = !item.complated;
      localStorage.setItem("item", JSON.stringify(state.items));
    },
    addTodo: (state, action: PayloadAction<string>) => {
      state.items.push({
        id: id,
        title: action.payload,
        complated: false,
      });
      id++;
      localStorage.setItem("item", JSON.stringify(state.items));
    },
    deleteTodo: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      const target: IItem | undefined = state.items.find(
        (item: IItem) => item.id === id
      );
      const targetLocal = localStorage.getItem("item");
      if (targetLocal != null) {
        const datas: IItem[] = JSON.parse(targetLocal);
        const data: IItem | undefined = datas.find(
          (item: IItem) => item.id === id
        );
        if (data) {
          const indexOfTargetLocal: number = datas.indexOf(data);
          datas.splice(indexOfTargetLocal, 1);
          localStorage.setItem("item", JSON.stringify(datas));
        }
      }
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
      localStorage.setItem("item", JSON.stringify(state.items));
    },
    allToggle: (state) => {
      if (state.allComplated) {
        state.items.map((item: IItem) => {
          item.complated = false;
        });
        state.allComplated = false;
      } else {
        state.items.map((item: IItem) => {
          item.complated = true;
        });
        state.allComplated = true;
      }
    },
    setLocalList: (state, action: PayloadAction<IItem>) => {
      state.items.push(action.payload);
    },
  },
});

export const {
  toggle,
  addTodo,
  deleteTodo,
  clearCompleted,
  changeActiveFilter,
  allToggle,
  setLocalList,
} = todoSlice.actions;
export default todoSlice.reducer;
