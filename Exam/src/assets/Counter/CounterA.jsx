import React from 'react'
import CounterB from './CounterB';
const CounterA = () => {
    const [countA, setCountA] = React.useState(0);
    const increment = () => {
        setCountA(countA + 1);
    }   
    const decrement=()=>{
        setCountA(countA - 1);
    }
    const reset=()=>{
        setCountA(0);
    }  
  return (
    <div>
        <h2>CounterA:{countA} </h2>
        <button onClick={increment} className='border border-black w-24 h-8'>Increment</button>
        <button onClick={decrement} className='border border-black w-24 h-8'>Decrement</button>
        <button onClick={reset} className='border border-black w-20 h-8'>Reset</button>
        <CounterB/>
    </div>
  )
}

export default CounterA