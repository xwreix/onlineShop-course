import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        totalPrice: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            const price = (Number(state.totalPrice) + Number(action.payload.price)).toFixed(2);
            state.totalPrice = price;
        },
        removeProduct: (state, action) => {
            state.products = action.payload.filtered;
            state.quantity = action.payload.filtered.length;
            const price = (Number(state.totalPrice) - Number(action.payload.removedPrice)).toFixed(2);
            state.totalPrice = price;
        },
        clearCart: (state) =>{
            state.products = [];
            state.totalPrice = 0;
            state.quantity = 0;
        }
    }
});

export const {addProduct, removeProduct, clearCart} = cartSlice.actions;
export default cartSlice.reducer;