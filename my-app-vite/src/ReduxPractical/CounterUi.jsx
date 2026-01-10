import React from 'react'
import { increment,decrement,reset,addbyNum } from './CounterSlice';
import { useDispatch, useSelector } from 'react-redux';
const CounterUi = () => {
    const counterValue=useSelector((state)=>state.counter.value)
    const dispatch=useDispatch();
  return (
    <div>
          <h2>Count:{counterValue}</h2>
            <button onClick={()=>{dispatch(increment())}}>Increment</button>
            <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
            <button onClick={()=>{dispatch(reset())}}>Reset</button>
            <button onClick={()=>{dispatch(addbyNum(7))}}>Add by 7</button>
    </div>
  )
}

export default CounterUi;  