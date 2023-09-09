import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      status: "pending",
      title: "Remove Button",
      description:
        "We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.",
      date: "2023-08-28",
      assignedTo: "Mir Hussain",
      priority: "high",
    },
  ],
};

export const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      payload.id = state.tasks.length === 0 ? 1 : state.tasks.at(-1).id + 1;
      payload.status = "pending";
      state.tasks.push(payload);
    },

    removeTask: (state, { payload }) => {
      state.tasks.filter((task) => task.id !== payload);
    },

    updateStatus: (state, { payload }) => {
      const targetedTask = state.tasks.find((task) => task.id === payload);
      const currentStatus = targetedTask.status;
      const updatedStatus =
        currentStatus === "pending"
          ? "running"
          : currentStatus === "running"
          ? "done"
          : "archive";
      targetedTask.status = updatedStatus;
    },
  },
});

export const { addTask, removeTask, updateStatus } = tasksSlice.actions;

export default tasksSlice.reducer;
