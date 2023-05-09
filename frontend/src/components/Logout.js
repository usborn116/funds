import { logout } from "./helpers/api_fetches"

const Logout =({setCurrUser})=>{
    const handleClick=e=>{
        e.preventDefault()
         logout(setCurrUser)
    }
    return (
        <div className='logout'>
            <input type="button" className="button" value='Logout' onClick={handleClick}/>
        </div>
    )
}
export default Logout