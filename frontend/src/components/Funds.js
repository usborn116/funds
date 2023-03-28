import { useState,useEffect } from "react"
import NewFund from "./NewFund"
import Fund from "./Fund"
import Login from "./Login"
import GraphFund from "./GraphFund"
import { useNavigate } from "react-router-dom"

const Funds=({currUser, setCurrUser, setTotFunds})=>{
    const navigate=useNavigate();
    const [funds, setFunds]=useState([])
    const [updates, setUpdates]=useState(0)
    const totf = funds.map((fund) => fund.allocated)
    setTotFunds(totf.reduce((sum, n) => sum + n, 0))
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

    const navhome=e=>{
        e.preventDefault()
        navigate('/')
      }
    
    if (currUser.id || localStorage.getItem('token'))
    return(
        <div>
            <h2>FUNDS</h2>
            <button className="homebtn" onClick={navhome}>HOME</button><br></br>
            ____________________________________
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




