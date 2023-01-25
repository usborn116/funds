import Signup from "./Signup";
import Login from './Login'
import Logout from './Logout'
import { useState } from "react";
import Funds from "./Funds";
import Accounts from "./Accounts"

const User = ({currUser, setCurrUser}) => {
    const [show, setShow]=useState(true)
    if(currUser) 
        return (
            <div>
            Hello {currUser.name}
            <Funds currUser={currUser}/>
            <Accounts currUser={currUser}/>
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