import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increase,
  decrease,
  reset,
} from "../redux/features/counter/counterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter); // Here state : {counter:conterReducer}

  const dispatch = useDispatch();
  return (
    <div>
    <p>{count}</p>
    <button onClick={()=>dispatch(increase())}>increase</button>
    <button onClick={()=>dispatch(decrease())}>decrease</button>
    <button onClick={()=>dispatch(reset())}>reset</button>
    </div>
  )
;
};

export default Counter;
