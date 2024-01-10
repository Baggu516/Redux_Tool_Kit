import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"
const initialState={
   loading:false,
   data:[],
   err:"" 
}
const getSlice=createSlice({
    name:"todos",
    initialState,
    reducers:{
        fetchRequest:(state)=>{state.loading=true},
        fetchData:(state,action)=>{
            state.data=action.payload
            state.loading=false
            state.err=""
  
        },
        fetchFailure:(state,action)=>{
            state.data=[]
            state.loading=false
            state.err=action.payload
        }
    }
})
export const {fetchData,fetchFailure,fetchRequest}=getSlice.actions
export default getSlice.reducer;
export const fetchposts=()=>{
    return (dispatch)=>{
        dispatch(fetchRequest)
        axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
        .then(res=>dispatch(fetchData(res.data))).catch((err)=>dispatch(fetchFailure(err.message)))  
    }
}