import { configureStore } from "@reduxjs/toolkit";
import conterReducer from "../features/counter/counterSlice"
import todoSlice from "../features/Todo/todoSlice";
import getSlice from "../features/getItems/getSlice";
export const store=configureStore({
       reducer:{
        counter:conterReducer,
        todo:todoSlice,
        getItem:getSlice
       }
})