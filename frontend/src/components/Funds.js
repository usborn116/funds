import { useState,useEffect } from "react"
import NewFund from "./NewFund"
import Fund from "./Fund"

const Funds=({currUser})=>{
    const [funds, setFunds]=useState([])
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
            setFunds(data)
        }
        catch(error){
            console.log("error", error)
            setFunds(null)
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
            {funds.map((message) =>
                <Fund funds={funds} data={message} currUser={currUser} key={message.id} setFunds={setFunds}/>
            )}
            <NewFund currUser={currUser} setFunds={setFunds}/>
        </div>
    )
}
export default Funds




