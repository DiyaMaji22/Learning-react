import { createSlice } from "@reduxjs/toolkit"; 

const CounterSlice = createSlice({
  name: "counter",
  initialState: { count: 7},
  reducers:{
    increment: (state) => {state.count+=1},
    decrement: (state) => {state.count-=1},
    reset: (state) => {state.count=0},
    addbyNum: (state, action) => {state.count+=action.payload}
    
  }
})
export const {increment, decrement, reset, addbyNum} = CounterSlice.actions;
export default CounterSlice.reducer;