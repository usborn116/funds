import Logout from './Logout'
import { useEffect } from "react";
import { load } from "./helpers/helper_functions";
import NavBar from "../NavBar";
import Loading from './Loading';

const User = ({currUser, setCurrUser, totFunds, setTotFunds, totAccts, setTotAccts, setLoading, loading}) => {

    useEffect(() => {
        load(setLoading)
    }, [setLoading])

    return (
        <div className="user">
        { loading ? 
        <Loading /> :
        <div className="main">
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
        }
        </div>
        )
}
export default User