import { useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import Login from './components/Login';
import Signup from './components/Signup';
import usePersistedState from 'use-persisted-state-hook'
import {createBrowserRouter, Routes, Route, createRoutesFromElements} from 'react-router-dom'

/*const router = createBrowserRouter(
  createRoutesFromElements(
    <Routes>
      <Route path="/" element={<User currUser={currUser} setCurrUser={setCurrUser} totAccts={totAccts} totFunds={totFunds} setTotAccts={setTotAccts} setTotFunds={setTotFunds}/>} />
      <Route path="/accounts" element={<Accounts currUser={currUser} setCurrUser={setCurrUser} setTotAccts={setTotAccts}/>} />
      <Route path="/funds" element={<Funds currUser={currUser} setCurrUser={setCurrUser} setTotFunds={setTotFunds} setError={setError}/>} />
      <Route path="user/edituser" element={<EditUser currUser={currUser} setCurrUser={setCurrUser}/>} />
      <Route path="/login" element={<Login currUser={currUser} setCurrUser={setCurrUser}/>} />
      <Route path="/signup" element={<Signup currUser={currUser} setCurrUser={setCurrUser}/>} />
    </Routes>

  )
)*/


const App=()=>{
  const [show, setShow]=useState(true)
  const [error, setError]=useState(null);
  const [totAccts, setTotAccts]=usePersistedState("totAccts", 0)
  const [totFunds, setTotFunds]=usePersistedState("totFunds", 0)
  const [currUser, setCurrUser]= usePersistedState('currUser', {name: null, id: null, email: null, totFunds: 0, totAccts: 0})

  if(!currUser.id && !error) 
    return (
        <div>
            { show?
                <Login setCurrUser={setCurrUser} setShow={setShow} setTotAccts={setTotAccts} setTotFunds={setTotFunds}/>            
                :
                <Signup setCurrUser={setCurrUser}  setShow={setShow} setTotAccts={setTotAccts} setTotFunds={setTotFunds} />
            }
        </div>
    )
    return (
    <div className="App">
      <NavBar currUser={currUser} setCurrUser={setCurrUser} totAccts={totAccts} totFunds={totFunds} setTotAccts={setTotAccts} setTotFunds={setTotFunds} setError={setError}/>
    </div>
  )
}

export default App;
