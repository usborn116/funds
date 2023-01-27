import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'

import Accounts from './components/Accounts'
import Funds from './components/Funds'
import EditUser from './components/EditUser'
import NewFund from './components/NewFund'
import NewAccount from './components/NewAccount'
import User from './components/User'
import Login from './components/Login'
import Signup from './components/Signup'
import { useState, useEffect} from 'react'
import usePersistedState from 'use-persisted-state-hook'

function NavBar({currUser, setCurrUser}) {
    const [show, setShow]=useState(true)
    const [totAccts, setTotAccts]=usePersistedState(0)
    const [totFunds, setTotFunds]=usePersistedState(0)

    if(!currUser) 
        return (
            <div>
                { show?
                    <Login setCurrUser={setCurrUser} setShow={setShow}/>            
                    :
                    <Signup setCurrUser={setCurrUser}  setShow={setShow} />
                }
            </div>
        )
        return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<User currUser={currUser} setCurrUser={setCurrUser} totAccts={totAccts} totFunds={totFunds}/>} />
                <Route path="/accounts" element={<Accounts currUser={currUser} setCurrUser={setCurrUser} setTotAccts={setTotAccts}/>} />
                <Route path="/funds" element={<Funds currUser={currUser} setCurrUser={setCurrUser} setTotFunds={setTotFunds}/>} />
                <Route path="user/edituser" element={<EditUser currUser={currUser} setCurrUser={setCurrUser}/>} />
                <Route path="/login" element={<Login currUser={currUser} setCurrUser={setCurrUser}/>} />
                <Route path="/signup" element={<Signup currUser={currUser} setCurrUser={setCurrUser}/>} />

            </Routes>
        
        </BrowserRouter>
    )
}

export default NavBar