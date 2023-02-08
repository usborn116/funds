import { useState,useEffect } from "react"
import NewFund from "./NewFund"
import Fund from "./Fund"
import Login from "./Login"
import GraphFund from "./GraphFund"

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
    
    if (currUser.id || localStorage.getItem('token'))
    return(
        <div>
            <h2>FUNDS</h2>
            <a className="homebtn" href="http://localhost:4000/">HOME</a><br></br>
            ____________________________________
            <br></br>
            <div className="fund-layout">
                <GraphFund funds={funds} />
                <div className="funds">
                    {funds.map((fund) =>
                        <Fund funds={funds} data={fund} currUser={currUser} key={fund.id} setFunds={setFunds} setUpdates={setUpdates}/>
                    )}
                    <details className="new">
                    <summary>
                        + Fund
                    </summary>
                    <NewFund currUser={currUser} setCurrUser={setCurrUser} setFunds={setFunds}/>
                    </details>
                </div>
            </div>
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




