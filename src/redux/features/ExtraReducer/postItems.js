import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
const initialState={
   loading:false,
   data:[],
   err:"" 
}
// ..... action creater { pending,fulfilled,rejected }......................
export const fetchposts=createAsyncThunk("postitems/fetchposts",()=>{
    return   axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
    .then(res=>res.data) 
})
const {pending,fulfilled,rejected}=fetchposts //this actions created 

const postItems=createSlice({
    name:"post",
    initialState,
    // reducers:{}
    extraReducers:(builder)=>{
        builder.addCase(pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fulfilled,(state,action)=>{
            state.data=action.payload
            state.loading=false
            state.err=""
        })
        builder.addCase(rejected,(state,action)=>{
            state.data=[]
            state.loading=false
            state.err=action.payload
        })
    }
})
export default postItems.reducer
