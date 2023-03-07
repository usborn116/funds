import { useNavigate } from "react-router-dom"

const DeleteUser =({setCurrUser})=>{
    const navigate = useNavigate();
    const logout=async (setCurrUser)=>{
        try {
            const response=await fetch("http://localhost:3000/signup",{
                method: "delete",
                headers: {
                    "content-type": "application/json",
                    "authorization": localStorage.getItem("token")
                },
            })
            const data=await response.json()
            if(!response.ok) throw data.error
            localStorage.removeItem("token")
            console.log(data.message)
            setCurrUser({name: null, id: null, email: null, totFunds: 0, totAccts: 0})
            navigate('/home', {replace:true });
        } catch (error) {
            console.log("error", error)
        }
    }
    const handleClick=e=>{
        e.preventDefault()
        const result = window.confirm("Want to delete your account?")
        if (result) {
            logout(setCurrUser)
        }
         
    }
    return (
        <div>
            <input type="button" className="button deleteuser" value='Delete User' onClick={handleClick}/>
        </div>
    )
}
export default DeleteUser