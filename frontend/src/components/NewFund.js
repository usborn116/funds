import { useRef } from "react"

const NewFund=({currUser, setMessage})=>{
    const formRef = useRef()

    const newf=async (fundInfo, setMessage)=>{
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
            setMessage(prevmessage => [...prevmessage, data])
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
        newf(fundInfo, setMessage)
        e.target.reset()
    }

    const handleClick=e=>{
        e.preventDefault()
    }

    return(
        <div>
        <form ref={formRef} onSubmit={handleSubmit}>
            Fund Name: <input type="text" name='name' placeholder="name" />
            <br/>
            Allocated Amount: <input type="float" name='allocated' placeholder="allocated amount" />
            <br/>
            Fund Target Amount: <input type="float" name='target' placeholder="target amount" />
            <br/>
            Target Date: <input type="date" name='date' />
            <br/>
            <input type="hidden" name='userid' value={currUser.id}/>
            <input type='submit' value="Submit" />
        </form>
    </div>
    )
}
export default NewFund