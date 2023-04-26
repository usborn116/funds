import { logout } from "./helpers/api_fetches"

const Logout =({setCurrUser, setTotAccts, setTotFunds})=>{
    const handleClick=e=>{
        e.preventDefault()
         logout(setCurrUser)
    }
    return (
        <div>
            <input type="button" className="button" value='Logout' onClick={handleClick}/>
        </div>
    )
}
export default Logout