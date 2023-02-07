import { useState } from 'react';
import './App.css';
import User from './components/User'
import NavBar from './NavBar';
import Login from './components/Login';
import Signup from './components/Signup';
import usePersistedState from 'use-persisted-state-hook'


const App=()=>{
  const [currUser, setCurrUser]= usePersistedState('currUser', {name: null, id: null, email: null})
  if (!currUser.id)
    localStorage.removeItem("token")
  return (
    <div className="App">
      <NavBar currUser={currUser} setCurrUser={setCurrUser}/>
    </div>
  )
}

export default App;
