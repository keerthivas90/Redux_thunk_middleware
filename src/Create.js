import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sendPost } from './Middleware/CrudOperation';

const CreateApp = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const dispatch=useDispatch();
  const Postusers=useSelector(state=>state.users);
  const totalID= Postusers.users.map((user)=><li key={user.id}> {user.id}</li>); 
  const navigate = useNavigate();
  const handleSubmit =(e)=>{
    e.preventDefault();
    dispatch(sendPost({
      id:(totalID)? String( totalID.length + 1) : String(1),
      name,
      email
    }));
    navigate("/Redux_crud_middleware");
  }
   
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-tems-center '>
      <div className='w-50 border bg-secondary text-white p-5'>
        <h1> Add New User  </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' className='form-control' placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} />
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input type='email' name='email' className='form-control' placeholder='Enter emailID' onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <button className='btn btn-info'>Submit</button>
        </form>
      </div>        
    </div>
  )
}

export default CreateApp