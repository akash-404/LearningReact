import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action)=>{
            // Vanilla(older) redux => Don't mutate state and we needed to do something like
            //  const newState = [...state];       newState.items.push(action.payload);      return newState;

            // Redux toolkit -> We HAVE to mutate the state as in below line
            // currently redux takes care of immutable states and does same thing as above in background using Immer library
            state.items.push(action.payload);
        },
        removeItem: (state)=>{
            state.items.pop();
        },
        clearCart: (state)=>{
            state.items.length = 0;
        },
        
    }
})

// redux give different names for export like we need to export reducer instead of reducers which will be combination of all the reducers ina slice
export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;