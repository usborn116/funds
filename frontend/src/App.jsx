import { useState} from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import usePersistedState from 'use-persisted-state-hook'
import EditUser from './components/EditUser';
import Funds from './components/Funds';
import Accounts from './components/Accounts';
import User from './components/User';
import {Route, Routes} from 'react-router-dom'
import NotFound from './components/NotFound';



const App=()=>{
  const [show, setShow]=useState(true)
  const [error, setError]=useState(null);
  const [totAccts, setTotAccts]=usePersistedState("totAccts", 0)
  const [totFunds, setTotFunds]=usePersistedState("totFunds", 0)
  const [currUser, setCurrUser]= usePersistedState('currUser', {name: null, id: null, email: null, totFunds: 0, totAccts: 0})
  const [loading, setLoading] = useState(true);

  if(!currUser.id || error) {
    return (
        <div>
          
            { show?
                <Login setCurrUser={setCurrUser} setShow={setShow} setError={setError} setTotAccts={setTotAccts} setTotFunds={setTotFunds}/>            
                :
                <Signup setCurrUser={setCurrUser}  setShow={setShow}/>
            }
        </div>
    )
  } else {
    return (
      <div className='app'>
        <Routes>
          <Route index path="/home" element={<User currUser={currUser} setCurrUser={setCurrUser} totAccts={totAccts} setTotAccts={setTotAccts} totFunds={totFunds} setTotFunds={setTotFunds} setError={setError} setLoading={setLoading} loading={loading}/>}/>
          <Route path="/accounts" element={<Accounts currUser={currUser} setCurrUser={setCurrUser} totAccts={totAccts} setTotAccts={setTotAccts} setError={setError} setLoading={setLoading} loading={loading}/>} />
          <Route path="/funds" element={<Funds currUser={currUser} setCurrUser={setCurrUser} totFunds={totFunds} setTotFunds={setTotFunds} setError={setError} setLoading={setLoading} loading={loading}/>} />
          <Route path="/user/edituser" element={<EditUser currUser={currUser} setCurrUser={setCurrUser} setError={setError}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes> 
      </div>
  )
 }
} 

export default App;
