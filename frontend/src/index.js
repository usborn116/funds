import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './components/Login';
import Signup from './components/Signup';
import usePersistedState from 'use-persisted-state-hook'
import EditUser from './components/EditUser';
import Funds from './components/Funds';
import Accounts from './components/Account';
import User from './components/User';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import {createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/accounts" element={<Accounts/>} />
      <Route path="/funds" element={<Funds/>} />
      <Route path="user/edituser" element={<EditUser/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup/>} />
    </Route>

  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <div id="footer">
    <p>© Usborn Ocampo</p>  
    <a href='https://github.com/usborn116' target="_blank">
        <img id='git' src="./github-mark.png" />
    </a>
    </div>
  </React.StrictMode>
);

