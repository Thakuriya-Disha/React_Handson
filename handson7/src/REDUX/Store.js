import StudentReducer from "./Reducers/StudentReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: StudentReducer });

export default store;
