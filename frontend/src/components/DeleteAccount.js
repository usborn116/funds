import { deleteData } from "./helpers/api_fetches"

const DeleteAccount =({currUser, id, setAccounts, accounts })=>{
    const handleClick=e=>{
        e.preventDefault()
        deleteData("accounts", id, setAccounts, accounts)
    }
    if(currUser.id)
    return (
        
        <div>
            <input type="button" className="button" value='Delete Account' onClick={handleClick}/>
        </div>
    )
}
export default DeleteAccount