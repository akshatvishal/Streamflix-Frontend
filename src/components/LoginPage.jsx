import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const LoginPage = () => {
const [username,setUsername]=useState('')
const [password,setPassword]=useState('')
const [mess,setmess]=useState('')
 

async function handlesubmit(e){
  e.preventDefault();
  console.log(username);
  let item={username,password}
  
  axios.post("https://streamflix-6rvf.onrender.com/api/login/",{
    email:username,
    password:password
  }).then(res=>localStorage.setItem("token",JSON.stringify(res.token)))
  
  
  
}            

 const navigate=useNavigate();
  return (
    <div className="register-container">
       <div className="rightpart">

       <div className="logo">
          <img src="https://s3-alpha-sig.figma.com/img/afec/ea0a/14d8bdc23e35977a02474bbfe9928d8a?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MBtlSZtO6qomHmkhlSUVn79mydCrCXrwEfP-BJtpVXW7gA7T9rGrYAr639C6qqzavkAwPSK9QmoRDvsje2p-u2iZfepRJxb-ulbchxxDhQj4ipwqDgFmlIdSDOigzRyM6PeaGXbIi1sxVVmyVTAjCbWb7nIofuMFgKpqFmqgNEqGOEvdrjkyJsi8OJuvdiAavDHyzDNowTrCf1KUNBaLqs~KrJkYuJVKaB2V3nKdoaddEfGNHiUXOSP1F91JQKpVhEyBw~UBu8L8a5j6RdxE3PoryNiUe4vxJNVARRRk5xVswmiNxZYuhUBrq8fdBFiR5XJZC3IA3kjb~qOhC9q1lA__" alt="" />
        </div> 

       
        
       <div className="margin-manager">
         <div className="loginn">
            Log In
         </div>

         <p>Please enter your log in details to log in</p>
          <form className='from' onSubmit={handlesubmit}>
              <div className="usernamee">
              <input type="email" placeholder='Enter Your Email' value={username} onChange={(e)=>setUsername(e.target.value)} required />
              </div>
              <div className="password">
              <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
              </div>

               <div className="messege">{mess}</div>
                 <div className="remember">
                  <input type="checkbox" />
                  Remember me
                  
              </div>

              <button className='logbutton' type='submit'>Log In</button>

              <div className="textt">
                <p>Don’t have an account?</p> <button onClick={()=> navigate('/')}>create account</button>
              </div>
          </form>
        </div>

       </div>

       <div className="leftpart">
         <div className="textpart">
           <p className="text">Welcome!</p>
         </div>
       </div>
    </div>
  )
}

export default LoginPage