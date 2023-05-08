import Signup from "./Signup";
import Login from './Login'
import Logout from './Logout'
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import NavBar from "../NavBar";

const User = ({currUser, setCurrUser, totAccts, totFunds, setTotFunds, setTotAccts}) => {
    const [show, setShow]=useState(true)
    console.log(currUser)

    /*const navfunds=e=>{
        e.preventDefault()
        navigate('/funds')
      }
    const navaccts=e=>{
        e.preventDefault()
        navigate('/accounts')
      }

      const navedit=e=>{
        e.preventDefault()
        navigate('/user/edituser')
      }
      */
    return (
            <div className="user">
                <div className="greet">
                    <h1>Hello {currUser.name}!</h1>
                    <h2>$$ Allocated in Funds: ${Math.round(totFunds)}</h2>
                    <h2>$$ in Accounts: ${Math.round(totAccts)}</h2>
                </div>
                <div className="whole-bar w3-light-grey w3-round-large">
                        <div className="progress w3-container w3-blue w3-round-large" style={{width: (totFunds/totAccts)*100 + '%'}}></div>
                    </div>
                <h3> {Math.round((totFunds/totAccts)*100)}% Allocated</h3>
                <div className="test">
                </div>
                <div className='nav-list'>
                    <NavBar />
                </div>
                <Logout setCurrUser={setCurrUser} setTotAccts={setTotAccts} setTotFunds={setTotFunds} />
            </div>
        )
}
export default User