import { createSlice } from "@reduxjs/toolkit";
import { Itask } from "../../types";

type TModalState = {
    boardId: string;
    listId: string;
    task: Itask;
};

const initialState: TModalState = {
    boardId: "board-0",
    listId: "list-0",
    task: {
        taskId: "task-0",
        taskName: "task 0",
        taskDescription: "task description",
        taskOwner: "choi"
    }
};

const modalSlice = createSlice({
    name: 'modal',
    initialState: initialState,
    reducers: {}
});

export const modalReducer = modalSlice.reducer;
