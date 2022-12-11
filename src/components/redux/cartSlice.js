import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    searchText :  '',
    cartTotalAmount: '',  
    totalAmount:0, 
    totalQuantity:0, 
}

const cartSlice = createSlice({
    name:'Cart', 
    initialState, 
    reducers: {
        getTotalAmount(state, {payload}){
            const {totalAmount, totalQuantity} = state.items.reduce((cartTotal, cartItem) => {
                const {price, quantity} =cartItem;
                const itemTotal = price * quantity;

                cartTotal.totalAmount += itemTotal;
                cartTotal.totalQuantity += quantity;
                return cartTotal;
            }, 
            {
                totalAmount: 0,
                totalQuantity:0
            }
            )
           state.totalAmount = parseFloat(totalAmount.toFixed(2))
           state.totalQuantity = totalQuantity;
        }, 

        addToCart(state, {payload}){          
            const exist =  state.items.find(item => item.id === payload.id);
            if(exist){
                state.items = state.items.map(item => item.id === payload.id ? {...item, quantity: item.quantity + 1} : item)
            }else{
                state.items.push( {...payload, quantity: 1})
            }
           
        },

        increment(state, {payload}) {            
            state.items = state.items.map(item => {
                if(item.id === payload) {
                    return {
                        ...item, 
                        quantity: item.quantity + 1
                    }
                }
                return item
            })
           
        }, 
        decrement(state, {payload}){
            state.items = state.items.map(item => {
                if(item.id === payload) {
                    if(item.quantity > 1) {
                        return {
                            ...item, 
                            quantity: item.quantity -1
                        }
                    }
                }
                return item
            })
        }, 
        removeItem(state, {payload}){
            state.items = state.items.filter(item => item.id !== payload)

        },
        clearTheCart(state, {payload}) {
            state.items = []
        }, 
        setSearchText (state, {payload}){
            state.searchText = payload;
        }, 
        cartInfo(state, {payload}) {
              
               state.cartTotalAmount = payload;
        }
    }
})


export const {getTotalAmount,cartInfo, addToCart, setSearchText, increment, decrement, removeItem, clearTheCart} = cartSlice.actions;
export default cartSlice.reducer;