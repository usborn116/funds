import { useState,useEffect, useContext } from "react"
import Account from "./Account"
import NewAccount from "./NewAccount"
import Graph from "./Graph"
import Login from "./Login"
import { useNavigate } from "react-router-dom"
import { getData } from './helpers/helper_functions'
import { load } from "./helpers/helper_functions";
import Loading from "./Loading"

const Accounts=({currUser, setCurrUser, setTotAccts, setLoading, loading})=>{
    const [accounts, setAccounts]=useState([])
    const navigate = useNavigate();
    setTotAccts(accounts.reduce((sum, account) => sum + account.amount, 0))
    useEffect(()=>{
        if(currUser)
            getData("accounts", setAccounts)
    },[currUser])

    useEffect(() => {
        load(setLoading)
    }, [])

    const navhome=e=>{
        e.preventDefault()
        navigate('/home')
      }
    if (currUser.id){
        return(
            <>
        { loading ? 
        <Loading /> :
        <div className="info">
                <h2>ACCOUNTS</h2>
                <button className="homebtn" onClick={navhome}>HOME</button><br></br>
                ____________________________________
                <div className="acct-layout">
                    <Graph accounts={accounts}/>
                    <div className="accts">
                        {accounts.map((account) =>
                            <Account accounts={accounts} data={account} currUser={currUser} key={account.id} setAccounts={setAccounts}/>
                        )}
                <details className="new popup">
                <summary>
                    + New Account
                </summary>
                    <NewAccount currUser={currUser} setCurrUser={setCurrUser} setAccounts={setAccounts}/>
                </details>
                    </div>
                </div>    
            </div>
                        }
                        </>
        )
    }
        return (
        <div>
                <h3>You need to log in</h3>
                <Login />
                </div>
        )
}
export default Accounts
