import { useState,useEffect } from "react"
import NewFund from "./NewFund"
import Fund from "./Fund"

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
            <h2>FUNDS</h2><br></br>
            {message.map((message) =>
                <Fund data={message} currUser={currUser} key={message.id} setMessage={setMessage}/>
            )}
        </div>
    )
}
export default Funds




