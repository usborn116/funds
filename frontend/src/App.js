import { useState } from 'react';
import './App.css';
import User from './components/User'
import NavBar from './NavBar';
import Login from './components/Login';
import Signup from './components/Signup';
import usePersistedState from 'use-persisted-state-hook'


const App=()=>{
  const [currUser, setCurrUser]= usePersistedState('currUser', {name: null, id: null, email: null})
  console.log(currUser)
  return (
    <div className="App">
      <h1>Welcome to the Funds app!</h1>
      <NavBar currUser={currUser} setCurrUser={setCurrUser}/>
    </div>
  )
}

export default App;
