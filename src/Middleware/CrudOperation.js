
import { createAsyncThunk } from "@reduxjs/toolkit";
 
 

export const sendPost = createAsyncThunk('postUsers',async(obj)=>{
	  
    fetch('http://localhost:8080/users', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
    alert("Profile Addedd Successfully")
  })

  export const fetchPosts = createAsyncThunk(
	  'fetchUsers',
	  async () => {
	    const response = await fetch("http://localhost:8080/users")
	    const data = await response.json();
	    return data
	  }
	) 
	export const editPost = createAsyncThunk('editUsers',async(obj)=>{
 
    fetch(`http://localhost:8080/users/${obj.id}`, {
    method: 'PATCH',
    body: JSON.stringify(obj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
    alert("Profile Edited Successfully")
  })

 

  export const deletePost = createAsyncThunk('deleteUsers', async (obj)=>{
    fetch(`http://localhost:8080/users/${obj.id}`,{
    method: 'DELETE'
    })  
    alert("Profile Deleted Successfully") 
 window.location.reload();
  })

  

    
 
 