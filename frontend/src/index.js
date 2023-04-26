import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <div id="footer">
    <p>© Usborn Ocampo</p>  
    <a href='https://github.com/usborn116' target="_blank">
        <img id='git' src="./github-mark.png" />
    </a>
    </div>
    </BrowserRouter>
  </React.StrictMode>
);

