import React, { useEffect }  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link   } from 'react-router-dom';
import { deletePost, fetchPosts } from './Middleware/CrudOperation';

  
  
const Home = () => {
 
 const getPosts = useSelector(state=>state.users);
 
 const dispatch=useDispatch();
 useEffect(()=>{
  dispatch(fetchPosts());
 },[])
  const handleDelete=(id,name,email)=>{
 
  dispatch(deletePost({id,name,email}));    
  }
  return (
    <div className='container'>
        <h1> CRUD  </h1>
        <Link to="Redux_crud_middleware/Create" className='btn btn-success my-3' >Create</Link>
        <table className='table' >
          <thead>
            <tr>
              <th> ID </th>
              <th> Name </th>
              <th> Email </th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
 

            {getPosts.users && getPosts.users.map((user)=>(
              <tr key={user.id}>
              <td> {user.id}</td>  
              <td> {user.name}</td>  
              <td> {user.email}</td>  
                <td>
                  <Link to={`/Redux_crud_middleware/Edit/${user.id}`}  className='btn btn-sm btn-primary'>Edit</Link>
                  <button onClick={()=>handleDelete(user.id,user.name,user.email)} className='btn btn-sm btn-danger ms-2'>Delete</button>
                </td>
              </tr>
            ))    
          
          
          
          }
           
          </tbody>
        </table>
    </div>
  )
}

export default Home