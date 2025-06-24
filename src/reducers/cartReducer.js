import { createSlice } from '@reduxjs/toolkit';
const initialState = [];
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            //const exists = state.find(item => item.id === action.payload.id);
            if (!state.includes(action.payload)) {
                state.push(action.payload);
            }
        }
    }
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;