import React, { use, useReducer } from 'react';

const useReducerExample1=()=>{

    const initialCartState={count:0};
    const discountAction={text:"not applied"}
    const reducerCart=(state,action)=>{
        switch(action){
            case 'addcart':
                return {count:state.count+1};
            case 'removecart':
                return {count:state.count-1};
            case 'resetcart':
                return initialCartState;
        }
    }
    const discount=(state,action)=>{
        switch(action){
            case 'applydiscount':
                return {text:"Discount Applied"};
            case 'removediscount':
                return {text:"Discount removed"};
        }
    }

    const [cartState,dispatchCart]=  useReducer(reducerCart,initialCartState);
    const [discountState,discountRate]=useReducer(discount,discountAction);
    return(
        <div>
            <h1>Cart Value:{cartState.count}</h1>
           <button onClick={()=>dispatchCart('addcart')}>AddCart</button>
           <button onClick={()=>dispatchCart('removecart')}>RemoveCart</button>
           <button onClick={()=>dispatchCart('resetcart')}>ResetCart</button>
           <h1>Discount Value:{discountState.text}</h1>
           <button onClick={()=>discountRate('applydiscount')}>Apply discount</button>
           <button onClick={()=>discountRate('removediscount')}>Remove discount</button>
        </div>
    )


}
export default useReducerExample1; 