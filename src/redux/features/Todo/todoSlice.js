import { createSlice } from "@reduxjs/toolkit";

const initialState=[]

const todoSlice=createSlice({
    name:"todos",
    initialState,
    reducers:{
       ADD_ITEM:(state,action)=>{
        state.push(action.payload)
        return state
    },
    REMOVE_ITEM:(state,action)=>{
        state.splice(action.payload.id,1)
        return state
    },
    
    }
})

export const {ADD_ITEM,REMOVE_ITEM}=todoSlice.actions
export default todoSlice.reducer;