import { createSlice } from '@reduxjs/toolkit';
export const CounterSlice=createSlice({
    name:'counter',
    initialState:{
        counter:0,
    },
    reducers:{
        increment:(state, action)=>{
            state.counter += action.payload;
        },
        decrement:(state, action)=>{
            state.counter -= action.payload;
        },
    }
});

export const{increment, decrement}=CounterSlice.actions;
export default CounterSlice.reducer;