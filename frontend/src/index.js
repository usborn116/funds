import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route } from 'react-router-dom'

import Accounts from './components/Accounts'
import Funds from './components/Funds'
import EditUser from './components/EditUser'
import User from './components/User'
import Login from './components/Login'
import Signup from './components/Signup'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <div id="footer">
    <p>© Usborn Ocampo</p>  
    <a href='https://github.com/usborn116' target="_blank">
        <img id='git' src="./github-mark.png" />
    </a>
    </div>
  </React.StrictMode>
);

