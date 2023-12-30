import { createSlice } from "@reduxjs/toolkit";

const initialState=0

const counterSlice=createSlice({
    name:"counter",
    initialState:0,
    reducers:{
        increase:(state,action)=>state + ( action.payload || 1),
        decrease: (state)=> state-1,
        reset:(state)=> initialState

    }
})

console.log("counterSlice",counterSlice)
export const {increase,decrease,reset}=counterSlice.actions //automatically generate the actions creators
export default counterSlice.reducer; // createslice will generate the reducer, that we are exporting.
