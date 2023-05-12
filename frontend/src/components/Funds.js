import { useState,useEffect } from "react"
import NewFund from "./NewFund"
import Fund from "./Fund"
import Login from "./Login"
import GraphFund from "./GraphFund"
import { useNavigate } from "react-router-dom"
import { getData } from "./helpers/helper_functions"
import { load } from "./helpers/helper_functions";
import Loading from "./Loading"

const Funds=({currUser, setCurrUser, setTotFunds, setError, setLoading, loading})=>{    
    const [funds, setFunds]=useState([])
    const navigate=useNavigate();
    setTotFunds(funds.reduce((sum, fund) => sum + fund.allocated, 0))
    useEffect(()=>{
        if(currUser)
            getData('funds', setFunds, setError)
    },[])

    const navhome=e=>{
        e.preventDefault()
        navigate('/home')
      }

    useEffect(() => {
        load(setLoading)
    }, [])

    if (currUser.id){
        return(
            <>
            { loading ? 
            <Loading /> :
            <div className="info">
                <h2>FUNDS</h2>
                <button className="homebtn" onClick={navhome}>HOME</button><br></br>
                ____________________________________
                <div className="fund-layout">
                    <GraphFund funds={funds} />
                    <div className="funds">
                        {funds.map((fund) =>
                            <Fund funds={funds} data={fund} currUser={currUser} key={fund.id} setFunds={setFunds}/>
                        )}
                    <details className="new popup">
                        <summary>
                            + Fund
                        </summary>
                        <NewFund currUser={currUser} setCurrUser={setCurrUser} setFunds={setFunds}/>
                    </details>
                    </div>
                </div>
            </div>
    }
            </>
        )
     }
    return (
    <div>
            <h3>You need to log in</h3>
            <Login />
            </div>
    )
}
export default Funds
