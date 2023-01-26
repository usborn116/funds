import Signup from "./Signup";
import Login from './Login'
import Logout from './Logout'
import { useState } from "react";
import Funds from "./Funds";
import Accounts from "./Accounts"
import DeleteUser from "./DeleteUser";
import EditUser from "./EditUser";

const User = ({currUser, setCurrUser}) => {
    const [show, setShow]=useState(true)
    if(currUser) 
        return (
            <div>
            <h1>Hello {currUser.name} at {currUser.email}</h1>
            <Funds currUser={currUser}/>
            <Accounts currUser={currUser}/>
            <Logout setCurrUser={setCurrUser}/>
            <DeleteUser setCurrUser={setCurrUser} />
            <EditUser setCurrUser={setCurrUser} currUser={currUser} />
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