import { useNavigate } from "react-router-dom"
import { deleteUser } from "./helpers/api_fetches";

const DeleteUser =({setCurrUser})=>{
    const navigate = useNavigate();
    const handleClick=e=>{
        e.preventDefault()
        const result = window.confirm("Want to delete your account?")
        if (result) {
            deleteUser(setCurrUser)
            navigate('/', {replace:true });
        }
         
    }
    return (
        <div>
            <input type="button" className="button deleteuser" value='Delete User' onClick={handleClick}/>
        </div>
    )
}
export default DeleteUser