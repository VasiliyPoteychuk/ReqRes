import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import User from './user';
import Users from './users';
import './index.css'
import AddUserForm from './addUser';
import UpdateUser from './editingUser';
import UpdatedForm from './form';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Users />}/>
      <Route path='/:id' element={<User />}/>
      <Route path='/addUser' element={<UpdatedForm/>}/>
      <Route path='/updateUser/:id' element={<UpdatedForm/>}/>
    </Routes>
    
  </BrowserRouter>
);

