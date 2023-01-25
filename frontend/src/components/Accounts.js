import { useState,useEffect } from "react"
import Account from "./Account"

const Accounts=({currUser})=>{
    const [message, setMessage]=useState([])
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
            setMessage(data)
            console.log(data)
        }
        catch(error){
            console.log("error", error)
            setMessage(null)
        }
    }
    useEffect(()=>{
        if(currUser)
            getText()
    },[currUser])
    return(
        /* <div>{message}</div> */
        <div>
            <h2>ACCOUNTS</h2><br></br>
            {message.map((message) =>
                <Account data={message} currUser={currUser} key={message.id} setMessage={setMessage}/>
            )}
        </div>
    )
}
export default Accounts
