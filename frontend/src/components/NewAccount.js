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
        <div>
        <form ref={formRef} onSubmit={handleSubmit}>
            Account Name: <input type="text" name='name' placeholder="name" />
            <br/>
            Amount in Account: <input type="float" name='amount' placeholder="amount" />
            <br/>
            <input type="hidden" name='userid' value={currUser.id}/>
            <input type='submit' value="Submit" />
        </form>
    </div>
    )
}
export default NewAccount