import { logout } from "./helpers/api_fetches"

const Logout =({setCurrUser, setTotFunds, setTotAccts})=>{
    const handleClick=e=>{
        e.preventDefault()
        logout(setCurrUser, [setTotFunds, setTotAccts])
    }
    return (
        <div className='logout'>
            <input type="button" className="button" value='Logout' onClick={handleClick}/>
        </div>
    )
}
export default Logout