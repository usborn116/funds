import { useRef } from "react"
import { login } from "./helpers/api_fetches"

const Login = ({setCurrUser, setShow, setTotAccts, setTotFunds}) =>{
  const formRef=useRef()
  const handleSubmit=e=>{
    e.preventDefault()
      const formData=new FormData(formRef.current)
      const data=Object.fromEntries(formData)
      const userInfo={
        "user":{ email: data.email, password: data.password }
      }
      login(userInfo, setCurrUser).then(() => {
        setTotAccts(0);
        setTotFunds(0);
      });
      e.target.reset()
  }
  const handleClick=e=>{
    e.preventDefault()
    setShow(false)
  }

  return(
    <div>
    <h1>Welcome to Funds!</h1>
    <div className="form">
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="input">
          <input type="email" name='email' placeholder="email" />
          <br/>
        </div>
        <div className="input">
          <input type="password" name='password' placeholder="password" />
          <br/>
        </div>
        <input type='submit' className='submit' value="Login" />
        <br></br>
      </form>
      <div className="formtext">Not registered? → <a href="#signup" onClick={handleClick} >Signup</a> </div>
    </div>
    </div>
  )
}
export default Login