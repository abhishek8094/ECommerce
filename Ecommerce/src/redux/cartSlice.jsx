import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers : {
        addToCart(state, action){
            state.push(action.payload);
        },

        removeFromCart(state, action){
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },

        deleteFromCart(state,action){
            return state.filter(item => item.id !== action.payload.id);
        },

        incrementQuantity(state, action) {
            const itemIndex = state.findIndex(item => item.id === action.payload.id);
            if (itemIndex !== -1) {
                state[itemIndex].quantity += 1;
            }
        },
        
        decrementQuantity(state, action) {
            const itemIndex = state.findIndex(item => item.id === action.payload.id);
            if (itemIndex !== -1 && state[itemIndex].quantity > 1) {
                state[itemIndex].quantity -= 1;
            }
        }
    }
});

export const { addToCart, deleteFromCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
