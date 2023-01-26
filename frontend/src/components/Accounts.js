import { useState,useEffect } from "react"
import Account from "./Account"

const Accounts=({currUser})=>{
    const [accounts, setAccounts]=useState([])
    const [updates, setUpdates]=useState(0)
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
        if(currUser)
            getText()
    },[currUser, updates])
    return(
        /* <div>{message}</div> */
        <div>
            <h2>ACCOUNTS</h2><br></br>
            {accounts.map((account) =>
                <Account accounts={accounts} data={account} currUser={currUser} key={account.id} setAccounts={setAccounts} setUpdates={setUpdates}/>
            )}
        </div>
    )
}
export default Accounts
