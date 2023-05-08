import { useRef } from "react"
import { newData } from "./helpers/api_fetches"

const NewAccount=({currUser, setAccounts})=>{
    const formRef = useRef()

    const handleSubmit=e=>{
        e.preventDefault()
        const formData=new FormData(formRef.current)
        const data=Object.fromEntries(formData)
        const acctInfo={
            "account":{ name: data.name, amount: data.amount, user_id: data.userid}
        }
        newData('accounts', acctInfo, setAccounts)
        const popup = document.querySelector('.popup')
        popup.removeAttribute('open')
        e.target.reset()
    }
    
    return(
        <div className="new">
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