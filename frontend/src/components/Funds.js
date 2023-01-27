import { useState,useEffect } from "react"
import NewFund from "./NewFund"
import Fund from "./Fund"
import Login from "./Login"

const Funds=({currUser, setCurrUser, setTotFunds})=>{
    const [funds, setFunds]=useState([])
    const [updates, setUpdates]=useState(0)
    const totf = [0]
    funds.map((fund) => totf.push(fund.allocated))
    setTotFunds(totf.reduce((sum, n) => sum + n))
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
    },[currUser, updates])
    if (currUser.id)
    return(
        /* <div>{message}</div> */
        <div>
            <h2>FUNDS</h2><br></br>
            {funds.map((fund) =>
                <Fund funds={funds} data={fund} currUser={currUser} key={fund.id} setFunds={setFunds} setUpdates={setUpdates}/>
            )}
            <br></br>
            <details>
            <summary>
                Create a fund
            </summary>
            <NewFund currUser={currUser} setCurrUser={setCurrUser} setFunds={setFunds}/>
            </details>
            <br></br>
            <a href="http://localhost:4000/">HOME</a>
        </div>
    )
    return (
    <div>
            <h3>You need to log in</h3>
            <Login />
            </div>
    )
}
export default Funds




