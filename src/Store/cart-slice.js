import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initilState : {
        items :[],
        totalQuantity : 0,
       // totalAmount : 0,
    },
    reducers:{
        addItemToCart(state, action){
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id ===newItem.id);
            if(!existingItem) //if new item not present then add to the items array
            {
                state.items.push({
                    itemId : newItem.id,
                    price:newItem.price,
                    quantity:1,
                    totalPrice : newItem.price,
                    name : newItem.title,
                });
            }
            else{
               existingItem.quantity++;
               existingItem.totalPrice = existingItem.totalPrice + newItem.price; 
            }
        },
        removeItemFromCart(){},
        

    }
})

export const cartActions= cartSlice.actions;

export default cartSlice;