import { useRef } from "react"
import { updateData } from "./helpers/helper_functions";

const UpdateAccount=({currUser, setAccounts, accounts, data })=>{
    const {id, name, amount } = data;
    const formRef = useRef()

    const handleSubmit=e=>{
        e.preventDefault()
        const popup = document.querySelectorAll('.popup')
        popup.forEach(p => p.removeAttribute('open'))
        const formData=new FormData(formRef.current)
        const data=Object.fromEntries(formData)
        const accountInfo={
            "account":{ name: data.name, amount: data.amount, user_id: data.userid}
        }
        updateData('accounts', id, accountInfo, setAccounts)
        e.target.reset()
    }

    return(
        <div className='update'>
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