import { createSlice } from '@reduxjs/toolkit';
const initialState = [];
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart( state, action ){
            console.log('State är: ', state);
            console.log('Action är: ', action);
            state.push(action.payload); // Ohoy kontrollera om produkten redan finns, lägg annars inte till.
        }
    }
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;