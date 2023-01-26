import { useEffect, useRef } from "react"

const UpdateFund=({currUser, setFunds, funds, data, setUpdates})=>{
    const {id, name, allocated, target, target_date } = data;
    const formRef = useRef()
    
    const newf=async (fundInfo, setFunds)=>{
        const url=`http://localhost:3000/funds/${id}`
        try{
            const response=await fetch(url, {
                method: 'put',
                headers: {
                    "content-type": 'application/json',
                    "accept": "application/json",
                    "authorization": localStorage.getItem("token")
                },
                body: JSON.stringify(fundInfo)
            }) 
            const data=await response.json()
            if(!response.ok) throw data.error
            setUpdates(prev => prev + 1)
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
        <div>
        <form ref={formRef} onSubmit={handleSubmit}>
            Fund Name: <input type="text" name='name' defaultValue={name} />
            <br/>
            Allocated Amount: <input type="float" name='allocated' defaultValue={allocated} />
            <br/>
            Fund Target Amount: <input type="float" name='target' defaultValue={target} />
            <br/>
            Target Date: <input type="date" name='date' defaultValue={target_date} />
            <br/>
            <input type="hidden" name='userid' value={currUser.id}/>
            <input type="hidden" name='fundid' value={id}/>
            <input type='submit' value="Submit" />
        </form>
    </div>
    )
}
export default UpdateFund