import React, { useState } from 'react'
import './SignUp.css'

import {useNavigate} from"react-router-dom"

import {Link} from "react-router-dom";
import axios from "axios";
import user_icon from './Assets/person.png'
import email_icon from './Assets/email.png'
import password_icon from './Assets/password.png'


 const SignUp = () => {

  const[email, setEmail]= useState()
  const[password, setPassword]= useState()
  const[name, setName]= useState()




  const navigate= useNavigate()

  const submitHandler= async(e) =>
  {

   
    

    axios.post('http://localhost:3001/register',{name, email, password})
    .then (result=> console.log(result))
    .catch(err=> console.log(err))
    navigate('/track')
   
    }
    
    
  
  return (
    <div className="container">
      <div className="header">
        <div className="text"> Sign Up  </div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" 
          value={name}
          placeholder='Name'
          onChange={(e)=> setName(e.target.value)}
           />
        </div>

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email"
         value={email} 
          placeholder='Email Id'
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

      
      <button type= "button" onClick={() => submitHandler()}> Sign Up </button>

      </div>

      <div className="registration"> Already have an account? <Link to="/login"> Click Here to login  </Link>
      </div>
  </div>


   


  )
}

export default SignUp

