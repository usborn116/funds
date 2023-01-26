import { useRef } from "react"

const UpdateAccount=({currUser, setAccounts, accounts, data, setUpdates})=>{
    const {id, name, amount } = data;
    const formRef = useRef()

    const newf=async (accountInfo, setAccounts)=>{
        const url=`http://localhost:3000/accounts/${id}`
        try{
            const response=await fetch(url, {
                method: 'put',
                headers: {
                    "content-type": 'application/json',
                    "accept": "application/json",
                    "authorization": localStorage.getItem("token")
                },
                body: JSON.stringify(accountInfo)
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
        const accountInfo={
            "account":{ name: data.name, amount: data.amount, user_id: data.userid}
        }
        newf(accountInfo, setAccounts)
        e.target.reset()
    }

    const handleClick=e=>{
        e.preventDefault()
    }

    return(
        <div>
        <form ref={formRef} onSubmit={handleSubmit}>
            Account Name: <input type="text" name='name' defaultValue={name} />
            <br/>
            Amount: <input type="float" name='amount' defaultValue={amount}/>
            <br/>
            <input type="hidden" name='userid' value={currUser.id}/>
            <input type='submit' value="Submit" />
        </form>
    </div>
    )
}
export default UpdateAccount