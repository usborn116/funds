import { useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import Login from './components/Login';
import Signup from './components/Signup';
import usePersistedState from 'use-persisted-state-hook'
import EditUser from './components/EditUser';
import Funds from './components/Funds';
import Accounts from './components/Account';
import User from './components/User';
import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from 'react-router-dom'


const App=()=>{
  const [show, setShow]=useState(true)
  const [error, setError]=useState(null);
  const [totAccts, setTotAccts]=usePersistedState("totAccts", 0)
  const [totFunds, setTotFunds]=usePersistedState("totFunds", 0)
  const [currUser, setCurrUser]= usePersistedState('currUser', {name: null, id: null, email: null, totFunds: 0, totAccts: 0})

  if(!currUser.id && !error) {
    console.log('nouser')
    return (
        <div>
          
            { show?
                <Login setCurrUser={setCurrUser} setShow={setShow} setTotAccts={setTotAccts} setTotFunds={setTotFunds}/>            
                :
                <Signup setCurrUser={setCurrUser}  setShow={setShow} setTotAccts={setTotAccts} setTotFunds={setTotFunds} />
            }
        </div>
    )
  } else {
    console.log('user')
    return (
    <div className="App">
      <User currUser={currUser} setCurrUser={setCurrUser} totAccts={totAccts} totFunds={totFunds} setTotAccts={setTotAccts} setTotFunds={setTotFunds} setError={setError}/>
    </div>
  )
 }
} 

export default App;
