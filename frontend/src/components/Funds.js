import { useState,useEffect } from "react"
import NewFund from "./NewFund"
import Fund from "./Fund"

const Funds=({currUser})=>{
    const [funds, setFunds]=useState([])
    const [updates, setUpdates]=useState(0)
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
            console.log(data)
        }
        catch(error){
            console.log("error", error)
            setFunds(null)
        }
    }
    useEffect(()=>{
        if(currUser)
            getText()
    },[currUser, updates])
    return(
        /* <div>{message}</div> */
        <div>
            <h2>FUNDS</h2><br></br>
            {funds.map((fund) =>
                <Fund funds={funds} data={fund} currUser={currUser} key={fund.id} setFunds={setFunds} setUpdates={setUpdates}/>
            )}
            <NewFund currUser={currUser} setFunds={setFunds}/>
        </div>
    )
}
export default Funds




