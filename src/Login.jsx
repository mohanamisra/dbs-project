import React, {useState}  from 'react'
import email_icon from './Assets/email.png'
import password_icon from './Assets/password.png'
import {useNavigate} from"react-router-dom"
import './Login.css'
import {Link} from "react-router-dom";
import axios from "axios";

const Login = () => {

  const navigate= useNavigate()

    const[email, setEmail]= useState()
    const[password, setPassword]= useState()

  

    const submitHandler= async(e) =>
    {
    
      axios.post('http://localhost:3001/login',{ email, password})
      .then(result=>
    {
        console.log(result)
        if (result.data ==" Successfully logged in");
          navigate("/track")
        
    })
    .catch(err=> console.log(err))

    }

  return (
    <div className="container">
      <div className="header">
        <div className="text"> Login  </div>

       
        <div className="underline"></div>
      </div>

      <div className="inputs">
        

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email"
           value={email} 
          placeholder='email'
          onChange={(e)=> setEmail(e.target.value)}
          />

        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password"
          value={password} 
           placeholder='Password'
           onChange={(e)=> setPassword(e.target.value)}
           />
        </div>


      </div>


      <div className="submit-container"> 

      
      <button type= "button" onClick={() => submitHandler()}> Login </button>

      </div>

      
      

      <div className="registration"> New User? <Link to="/register"> Click Here to create account  </Link>
      </div>
      </div>



  )
}

export default Login