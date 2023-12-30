import { configureStore } from "@reduxjs/toolkit";
import conterReducer from "../features/counter/counterSlice"
import todoSlice from "../features/Todo/todoSlice";

export const store=configureStore({
       reducer:{
        counter:conterReducer,
        todo:todoSlice
       }
})