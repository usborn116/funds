import React from 'react'
import {Link, NavLink } from 'react-router-dom'

function NavBar() {

    return (
        <div>
            <div className='nav-list'>
                <Link to="/accounts">Accounts</Link>
                <Link to="/funds">Funds</Link>
                <Link to="/user/edituser">Edit User</Link>
            </div>
        </div>
    )
}

export default NavBar