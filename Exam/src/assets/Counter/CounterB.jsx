import React from 'react'
import { useMemo, useState } from 'react'
import { memo } from 'react'

const CounterB = () => {
    const [count, setCount] = useState(0)
    console.log("CounterB rendered");
    
    return (
        <div>
            <h2>CounterB: {count}</h2>
            <button onClick={() => setCount(count + 1)} className='border border-black w-24 h-8'>Increment</button>
            <button onClick={()=>setCount(count-1)} className='border border-black w-24 h-8'>Decrement</button>
            <button onClick={()=>setCount(0)} className='border border-black w-20 h-8'>Reset</button>
        </div>
    )
}



export default memo(CounterB)  