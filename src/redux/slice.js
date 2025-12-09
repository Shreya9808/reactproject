import { createSlice } from "@reduxjs/toolkit";

const initialState= { items : localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [] }; 

const addtocart= createSlice({
    name:'cart',
    initialState,
    reducers:{
        additem:(state,action)=>
        { 
            console.log(action.payload);
            state.items.push(action.payload);
            localStorage.setItem('cart',JSON.stringify(state.items));
            
            
         },
        removeitem:(state,action)=>{
            const cartdata = state.items.filter(item => item.id !== action.payload.id);
            state.items= cartdata;
            localStorage.setItem('cart',JSON.stringify(cartdata));
            

         },
          clearitem:(state)=>{
            state.items= [];
           
            

         },
        updateQuantity:(state,action)=>{
            const item = state.items.find(x => x.id === action.payload.id);
            if(item){
                item.quantity = action.payload.quantity;
                localStorage.setItem('cart',JSON.stringify(state.items));
            }
        }
       

    }
})

export const{additem,removeitem,clearitem,updateQuantity}=addtocart.actions
export default addtocart.reducer

