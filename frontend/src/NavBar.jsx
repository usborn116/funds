import React from 'react'
import {Link, NavLink } from 'react-router-dom'

import Accounts from './components/Accounts'
import Funds from './components/Funds'
import EditUser from './components/EditUser'

function NavBar() {

    return (
        <div>
            <div className='nav-list'>
                <Link to="/accounts">Accounts</Link>
                <Link to="/funds">Funds</Link>
                <Link to="user/edituser">Edit User</Link>
            </div>
        </div>
    )
}

export default NavBar