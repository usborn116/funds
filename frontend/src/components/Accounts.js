import { useState,useEffect } from "react"
import Account from "./Account"
import NewAccount from "./NewAccount"
import Graph from "./Graph"

const Accounts=({currUser, setCurrUser, setTotAccts})=>{
    const [accounts, setAccounts]=useState([])
    const [updates, setUpdates]=useState(0)
    const tota = [1]
    accounts.map((account) => tota.push(account.amount))
    setTotAccts(tota.reduce((sum, n) => sum + n))
    const getText=async ()=>{
        try {
            const response=await fetch("http://localhost:3000/accounts", {
                method: "get",
                headers: {
                    "content-type": "application/json",
                    "authorization": localStorage.getItem("token")
                }
            })
            if(!response.ok) throw Error
            const data=await response.json()
            setAccounts(data)
            console.log(data)
        }
        catch(error){
            console.log("error", error)
            setAccounts(null)
        }
    }
    useEffect(()=>{
        if(currUser.id)
            getText()
    },[currUser, updates])
    if (currUser.id)
        return(
            /* <div>{message}</div> */
            <div>
                <h2>ACCOUNTS</h2>
                <a className="homebtn" href="http://localhost:4000/">HOME</a><br></br>
                ____________________________________
                <br></br>
                <div className="acct-layout">
                    <Graph accounts={accounts}/>
                    <div className="accts">
                        {accounts.map((account) =>
                            <Account accounts={accounts} data={account} currUser={currUser} key={account.id} setAccounts={setAccounts} setUpdates={setUpdates}/>
                        )}
                <details className="new">
                <summary>
                    + New Account
                </summary>
                    <NewAccount currUser={currUser} setCurrUser={setCurrUser} setAccounts={setAccounts}/>
                </details>
                    </div>
                </div>
                
                
            </div>
        )
        return(
            <div>
            <h3>You need to <a href="http://localhost:4000/login">Log In</a> or <a href="http://localhost:4000/accounts">Sign Up</a></h3>
            </div>
        )
}
export default Accounts
