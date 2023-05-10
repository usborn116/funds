import { deleteData } from "./helpers/api_fetches"

const DeleteAccount =({data, setAccounts, accounts })=>{
    const handleClick=e=>{
        e.preventDefault()
        deleteData("accounts", data.id, setAccounts, accounts)
    }
    return (  
        <div>
            <input type="button" className="button" value='Delete Account' onClick={handleClick}/>
        </div>
    )
}
export default DeleteAccount