import { createSlice } from "@reduxjs/toolkit";
import { ILogitem } from "../../types";

type LoggerState = {
  logArray: ILogitem[];
};

const initialState: LoggerState = {
  logArray: []
};

const loggerSlice = createSlice({
  name: "logger",
  initialState,
  reducers: {}
});

export const loggerReducer = loggerSlice.reducer;
