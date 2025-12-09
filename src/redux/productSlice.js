import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export  const fetchproducts= createAsyncThunk(
    'prod',
    async()=>{
        const res= await fetch('https://dummyjson.com/products')
        const data= await res.json();
        return data.products;
     })

     const initialState={
        items:[],
        status:undefined,
        error:null
     }
const productSlice= createSlice({
    name:"prod",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchproducts.fulfilled,(state,action)=>{
            console.log(action.payload)
            state.items=action.payload,
            state.status='fulfilled'
            
            
        })
    }
        


})

export default productSlice.reducer


