import { useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import Login from './components/Login';
import Signup from './components/Signup';
import usePersistedState from 'use-persisted-state-hook'


const App=()=>{
  const [show, setShow]=useState(true)
  const [totAccts, setTotAccts]=usePersistedState("totAccts", 0)
  const [totFunds, setTotFunds]=usePersistedState("totFunds", 0)
  const [currUser, setCurrUser]= usePersistedState('currUser', {name: null, id: null, email: null, totFunds: 0, totAccts: 0})

  if(!currUser.id || !localStorage.getItem('token')) 
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
      <NavBar currUser={currUser} setCurrUser={setCurrUser} totAccts={totAccts} totFunds={totFunds} setTotAccts={setTotAccts} setTotFunds={setTotFunds}/>
    </div>
  )
}

export default App;
