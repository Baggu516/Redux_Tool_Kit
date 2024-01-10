import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchposts } from '../redux/features/ExtraReducer/postItems'
const ExtraReducerComponent = () => {
    let{loading,data,err}=useSelector(state=>state.postitem)
    console.log(loading,data,err)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchposts())
        // dispatch(starting_request)
        // axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
        // .then(res=>dispatch(data_fetch(res.data))).catch((err)=>dispatch(failure_request(err.message)))
    },[])
  return (
    <div>ExtraReducerComponent</div>
  )
}

export default ExtraReducerComponent