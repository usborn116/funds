import { useRef } from "react"
import Logout from "./Logout"
import DeleteUser from "./DeleteUser"

const EditUser=({setCurrUser, setShow, currUser})=>{
    const formRef = useRef()
    const signup=async (userInfo, setCurrUser)=>{
        const url=`http://localhost:3000/signup`
        try{
            const response=await fetch(url, {
                method: 'put',
                headers: {
                    "content-type": 'application/json',
                    "accept": "application/json",
                    "authorization": localStorage.getItem("token")
                },
                body: JSON.stringify(userInfo)
            }) 
            const data=await response.json()
            if(!response.ok) throw data.error
            setCurrUser(data)
        } catch (error){
            console.log("error", error)
        }
    }
    const handleSubmit=e=>{
        e.preventDefault()
        const formData=new FormData(formRef.current)
        const data=Object.fromEntries(formData)
        const userInfo={
            "user":{ name: data.name, email: data.email, password: data.password}
        }
        signup(userInfo, setCurrUser)
        e.target.reset()
    }
    const handleClick=e=>{
        e.preventDefault()
        setShow(true)
    }
    return(
        <div>
        <form ref={formRef} onSubmit={handleSubmit}>
            Full Name: <input type="text" name='name' defaultValue={currUser.name}/>
            <br/>
            Email: <input type="email" name='email' defaultValue={currUser.email}/>
            <br/>
            New Password: <input type="password" name='password' defaultValue={currUser.password} />
            <input type="hidden" name='userid' defaultValue={currUser.id} />
            <br/>
            <input type='submit' value="Submit" />
        </form>
        <br />
        <Logout setCurrUser={setCurrUser}/>
        <DeleteUser setCurrUser={setCurrUser} />
        <a href="http://localhost:4000/">HOME</a>
    </div>
    )
}
export default EditUser