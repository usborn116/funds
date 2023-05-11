import { useNavigate } from "react-router-dom"
const NotFound = () => {

    const navigate = useNavigate()

    const navhome=e=>{
        e.preventDefault()
        navigate(-1)
      }

    return(
        <>
        <h1>Not Found</h1>
        <button className="homebtn" onClick={navhome}>GO BACK</button><br></br>
        </>
    )
}

export default NotFound