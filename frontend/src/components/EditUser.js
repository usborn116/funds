import { useRef } from "react"
import Logout from "./Logout"
import DeleteUser from "./DeleteUser"
import Login from "./Login"
import { useNavigate } from "react-router-dom"

const EditUser=({setCurrUser, setShow, currUser})=>{
    const navigate=useNavigate();
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
            window.alert('Changes saved!')
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

    const navhome=e=>{
        e.preventDefault()
        navigate('/')
      }

    if(currUser.id)
        return(
            <div className='page'>
                <button className="homebtn" onClick={navhome}>HOME</button><br></br>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <h3>Edit Name or Email</h3>
                    <div className="input">
                    <input type="text" name='name' defaultValue={currUser.name}/>
                    </div>
                    <div className="input">
                    <input type="email" name='email' defaultValue={currUser.email}/>
                    </div>
                    <input type="hidden" name='password' defaultValue={currUser.password} />
                    <input type="hidden" name='userid' defaultValue={currUser.id} />
                    <input type='submit' className="button" value="Submit" />
                </form>
                <div className="edit-user-btns">
                <DeleteUser setCurrUser={setCurrUser} />

                
                </div>
                
            </div>
        )
        return(
            <Login />
        )
}
export default EditUser