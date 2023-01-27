import Signup from "./Signup";
import Login from './Login'
import Logout from './Logout'
import { useState } from "react";
import Funds from "./Funds";
import Accounts from "./Accounts"
import DeleteUser from "./DeleteUser";
import EditUser from "./EditUser";

const User = ({currUser, setCurrUser, totAccts, totFunds}) => {
    const [show, setShow]=useState(true)

    console.log(currUser)
    if(currUser.id) 
        return (
            <div>
            <h1>Hello {currUser.name} at {currUser.email}</h1>
            <h2>Total in accounts: {totAccts}</h2>
            <h2>Total in Funds: {totFunds}</h2>
            <ul id='nav-list'>
                <li><a href="http://localhost:4000/accounts">View Accounts</a></li>
                <li><a href="http://localhost:4000/funds">View Funds</a></li>
                <li><a href="http://localhost:4000/user/edituser">Edit Your Profile</a></li>
            </ul>
            <Logout setCurrUser={setCurrUser}/>
            </div>
        )
    return (
        <div>
            { show?
                <Login setCurrUser={setCurrUser} setShow={setShow}/>            
                :
                <Signup setCurrUser={setCurrUser}  setShow={setShow} />
            }
        </div>
    )
}
export default User