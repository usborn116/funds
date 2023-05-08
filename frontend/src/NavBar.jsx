import React from 'react'
import {NavLink, Outlet, Routes, Route } from 'react-router-dom'

import Accounts from './components/Accounts'
import Funds from './components/Funds'
import EditUser from './components/EditUser'

function NavBar() {

    return (
        <div>
            <div className='nav-list'>
                <NavLink to="/accounts">Accounts</NavLink>
                <NavLink to="/funds">Funds</NavLink>
                <NavLink to="user/edituser">Edit User</NavLink>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default NavBar