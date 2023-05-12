import { useNavigate } from "react-router-dom"
const NotFound = () => {

    const navigate = useNavigate()

    const navhome=e=>{
        e.preventDefault()
        navigate('/home')
      }

    return(
        <>
        <h1>Not Found</h1>
        <button className="homebtn" onClick={navhome}>HOME</button><br></br>
        </>
    )
}

export default NotFound