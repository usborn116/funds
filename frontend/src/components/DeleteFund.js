import { deleteData } from "./helpers/api_fetches"

const DeleteFund =({currUser, id, setFunds, funds })=>{
    const handleClick=e=>{
        e.preventDefault()
        deleteData("funds", id, setFunds, funds)
    }
    return (
        <div>
            <input type="button" class="button" value='Delete Fund' onClick={handleClick}/>
        </div>
    )
}
export default DeleteFund