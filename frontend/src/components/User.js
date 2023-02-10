import Signup from "./Signup";
import Login from './Login'
import Logout from './Logout'
import { useState } from "react";
import Funds from "./Funds";
import Accounts from "./Accounts"
import DeleteUser from "./DeleteUser";
import EditUser from "./EditUser";
import { useNavigate } from "react-router-dom"

const User = ({currUser, setCurrUser, totAccts, totFunds, setTotFunds, setTotAccts}) => {
    const navigate=useNavigate();
    const [show, setShow]=useState(true)
    console.log(currUser)

    const navfunds=e=>{
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
    if(currUser.id) 
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
                <Accounts currUser={currUser} setCurrUser={setCurrUser} setTotAccts={setTotAccts}/>
                <Funds currUser={currUser} setCurrUser={setCurrUser} setTotFunds={setTotFunds}/>
                </div>
                <div className='nav-list'>
                    <button onClick={navaccts}>Accounts</button>
                    <button onClick={navfunds}>Funds</button>
                    <button onClick={navedit}>Profile</button>
                </div>
                <Logout setCurrUser={setCurrUser} setTotAccts={setTotAccts} setTotFunds={setTotFunds} />
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