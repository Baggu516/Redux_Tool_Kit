import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { ADD_ITEM, REMOVE_ITEM } from '../redux/features/Todo/todoSlice'
const Todo = () => {
 const todo=useSelector((state)=>state.todo)
 console.log("todo",todo)
 const dispatch=useDispatch()
 const [text,setText]=useState("")
  return (
    <div>
        <p>Todo Items</p>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        <button onClick={()=>dispatch(ADD_ITEM(text))}> Add_Item</button>
        {todo&&todo.map((item,i)=>{
          return (
            <div key={i}>
          <li>{item}</li>
          <button onClick={()=>dispatch( REMOVE_ITEM({id:i}))}>remove</button>
            </div>
       
          )
       })}
    </div>
  )
}

export default Todo