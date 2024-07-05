import { createSlice } from "@reduxjs/toolkit";
import {    fetchPosts } from "../Middleware/CrudOperation"; 
 
const initialState = {
     users:  [],
    
   }
  
const userSlice=createSlice({
    name:"users",
    initialState,	 
    reducers:{},

    extraReducers:(builder)=>{
      builder
      .addCase(fetchPosts.pending,(state)=>{
        state.loading=true
      })
      .addCase(fetchPosts.fulfilled,(state,action)=>{
        state.loading=false
        state.users=action.payload
      })
      .addCase(fetchPosts.rejected,(state,action)=>{
        state.loading=false
        state.error=action.error.message
      }) 
       
        
     
    }
})

// export const {} = userSlice.actions;
export default userSlice.reducer;
 
 
