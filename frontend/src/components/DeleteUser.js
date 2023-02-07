const DeleteUser =({setCurrUser})=>{
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
            setCurrUser(null)
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