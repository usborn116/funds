import { useRef } from "react"

const NewAccount=({currUser, setAccounts})=>{
    const formRef = useRef()

    const newf=async (acctInfo, setMessage)=>{
        const url="http://localhost:3000/accounts"
        try{
            const response=await fetch(url, {
                method: 'post',
                headers: {
                    "content-type": 'application/json',
                    "accept": "application/json",
                    "authorization": localStorage.getItem("token")
                },
                body: JSON.stringify(acctInfo)
            }) 
            const data=await response.json()
            if(!response.ok) throw data.error
            setAccounts(prevmessage => [...prevmessage, data])
        } catch (error){
            console.log("error", error)
        }
    }

    const handleSubmit=e=>{
        e.preventDefault()
        const formData=new FormData(formRef.current)
        const data=Object.fromEntries(formData)
        const acctInfo={
            "account":{ name: data.name, amount: data.amount, user_id: data.userid}
        }
        newf(acctInfo, setAccounts)
        e.target.reset()
    }

    const handleClick=e=>{
        e.preventDefault()
    }

    return(
        <div class="new">
        <form ref={formRef} onSubmit={handleSubmit}>
            <div className="input">
            <input type="text" name='name' placeholder="Name" />
            <br/>
            </div>
            <div className="input">
            <input type="float" name='amount' placeholder="Amount" />
            <br/>
            </div>
            <input type="hidden" name='userid' value={currUser.id}/>
            <input type='submit' className="button" value="Submit" />
        </form>
    </div>
    )
}
export default NewAccount