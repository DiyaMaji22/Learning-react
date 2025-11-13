import React, { useReducer } from 'react'

const UseReducerExample = () => {

    const initialCountState=0;
    
    const reducerCount=(state,action)=>{
        switch(action){
            case 'increment':
                return state+1;
            case 'decrement':
                return state-1;
            case 'reset':
                return initialCountState;
        }
    }
    const [countState,dispatchCount]=useReducer(reducerCount,initialCountState)
  return (
    <div>
        <h1>Value:{countState}</h1>
        <button onClick={()=>dispatchCount('increment')}>Increment</button>
        <button onClick={()=>dispatchCount('decrement')}>Decrement</button>
        <button onClick={()=>dispatchCount('reset')}>Reset</button>
    </div>

  )
}

export default UseReducerExample