import { useState,useEffect } from "react"
import NewFund from "./NewFund"

const Funds=({currUser})=>{
    const [message, setMessage]=useState([])
    const getText=async ()=>{
        try {
            const response=await fetch("http://localhost:3000/funds", {
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
            {message.map((message) =>
                <div>
                <p>{message.name}</p>
                <p>{message.target}</p>
                <p>{message.allocated}</p>
                </div>
            )}
            <NewFund setMessage={setMessage} currUser={currUser}/>
        </div>
    )
}
export default Funds




