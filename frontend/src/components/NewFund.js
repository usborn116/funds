import { useRef } from "react"

const NewFund=({currUser, setFunds})=>{
    const formRef = useRef()

    const newf=async (fundInfo, setFunds)=>{
        const url="http://localhost:3000/funds"
        try{
            const response=await fetch(url, {
                method: 'post',
                headers: {
                    "content-type": 'application/json',
                    "accept": "application/json",
                    "authorization": localStorage.getItem("token")
                },
                body: JSON.stringify(fundInfo)
            }) 
            const data=await response.json()
            if(!response.ok) throw data.error
            setFunds(prevfunds => [...prevfunds, data])
        } catch (error){
            console.log("error", error)
        }
    }

    const handleSubmit=e=>{
        e.preventDefault()
        const formData=new FormData(formRef.current)
        const data=Object.fromEntries(formData)
        const fundInfo={
            "fund":{ name: data.name, allocated: data.allocated, target: data.target, target_date: data.date, user_id: data.userid}
        }
        newf(fundInfo, setFunds)
        e.target.reset()
    }

    const handleClick=e=>{
        e.preventDefault()
    }

    return(
        <div className="new">
        <form ref={formRef} onSubmit={handleSubmit}>
            <div className="input">
            <input type="text" name='name' placeholder="fund name" maxlength='20' required/>
            <br/>
            </div>
            <div className="input">
            <input type="float" name='allocated' placeholder="allocated amount" required />
            <br/>
            </div>
            <div className="input">
            <input type="float" name='target' placeholder="target amount" required />
            <br/>
            </div>
            <div className="input">
            <input type="date" name='date' placeholder="due date"/>
            <br/>
            </div>
            <input type="hidden" name='userid' value={currUser.id}/>
            <input type='submit' className="submit" value="Submit" />
        </form>
    </div>
    )
}
export default NewFund