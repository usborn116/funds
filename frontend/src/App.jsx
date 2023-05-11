import { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import usePersistedState from 'use-persisted-state-hook'
import EditUser from './components/EditUser';
import Funds from './components/Funds';
import Accounts from './components/Accounts';
import User from './components/User';
import {Route, Routes} from 'react-router-dom'


const App=()=>{
  const [show, setShow]=useState(true)
  const [error, setError]=useState(null);
  const [totAccts, setTotAccts]=usePersistedState("totAccts", 0)
  const [totFunds, setTotFunds]=usePersistedState("totFunds", 0)
  const [currUser, setCurrUser]= usePersistedState('currUser', {name: null, id: null, email: null, totFunds: 0, totAccts: 0})
  console.log(totFunds)

  if(!currUser.id && !error) {
    return (
        <div>
          
            { show?
                <Login setCurrUser={setCurrUser} setShow={setShow}/>            
                :
                <Signup setCurrUser={setCurrUser}  setShow={setShow}/>
            }
        </div>
    )
  } else {
    return (
      <div className='app'>
        <Routes>
          <Route index path="/home" element={<User currUser={currUser} setCurrUser={setCurrUser} totAccts={totAccts} setTotAccts={setTotAccts} totFunds={totFunds} setTotFunds={setTotFunds} setError={setError}/>}/>
          <Route path="/accounts" element={<Accounts currUser={currUser} setCurrUser={setCurrUser} totAccts={totAccts} setTotAccts={setTotAccts} setError={setError}/>} />
          <Route path="/funds" element={<Funds currUser={currUser} setCurrUser={setCurrUser} totFunds={totFunds} setTotFunds={setTotFunds} setError={setError}/>} />
          <Route path="/user/edituser" element={<EditUser currUser={currUser} setCurrUser={setCurrUser} setError={setError}/>} />
        </Routes> 
      </div>
  )
 }
} 

export default App;
