import { useRef } from "react"
import Logout from "./Logout"
import DeleteUser from "./DeleteUser"

const EditUser=({setCurrUser, setShow, currUser})=>{
    let alert= null
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
    return(
        <div className='page'>
            <form ref={formRef} onSubmit={handleSubmit}>
                <h3>Edit Name or Email</h3>
                <div className="input">
                <input type="text" name='name' defaultValue={currUser.name}/>
                </div>
                <br></br>
                <div className="input">
                <input type="email" name='email' defaultValue={currUser.email}/>
                </div>
                <input type="hidden" name='password' defaultValue={currUser.password} />
                <input type="hidden" name='userid' defaultValue={currUser.id} />
                <br/>
                <input type='submit' className="submit" value="Submit" />
                <span id="alert">{alert}</span>
            </form>
            <div className="edit-user-btns">
            <DeleteUser setCurrUser={setCurrUser} />
            <br></br>
            <a className="homebtn" href="http://localhost:4000/">HOME</a>
            </div>
            
        </div>
    )
}
export default EditUser