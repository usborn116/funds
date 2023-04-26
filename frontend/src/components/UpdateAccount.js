import { useRef } from "react"
import { updateData, getData } from "./helpers/api_fetches";

const UpdateAccount=({currUser, setAccounts, accounts, data })=>{
    const {id, name, amount } = data;
    const formRef = useRef()

    const handleSubmit=e=>{
        e.preventDefault()
        const formData=new FormData(formRef.current)
        const data=Object.fromEntries(formData)
        const accountInfo={
            "account":{ name: data.name, amount: data.amount, user_id: data.userid}
        }
        updateData('accounts', id, accountInfo, setAccounts)
        getData('accounts', setAccounts)
        e.target.reset()
    }

    return(
        <div class='update'>
        <form ref={formRef} onSubmit={handleSubmit}>
            <h3>Edit Name/Amount</h3>
            <div className="input">
            <input type="text" name='name' defaultValue={name} />
            <br/>
            </div>
            <div className="input">
            <input className="input" type="float" name='amount' defaultValue={amount}/>
            <br/>
            </div>
            <input type="hidden" name='userid' value={currUser.id}/>
            <input className="button" type='submit' value="Submit" />
        </form>
    </div>
    )
}
export default UpdateAccount