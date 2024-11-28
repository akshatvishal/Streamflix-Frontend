import { useState } from "react";
import './Signup.css';
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); 
  const navigate=useNavigate();

  async function Signup(e) {
    e.preventDefault();

    setLoading(true);
    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

  
    const formData = {
      email,
      password,
      confirm_password: confirmPassword,
      first_name: firstName,
      last_name: lastName,
      username,
      phone_number: phoneNumber, 
    };

    try {
      const response = await fetch("https://streamflix-6rvf.onrender.com/api/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(response);

      const result = await response.json();

      console.log(result);

      if (response.ok) {
        setMessage("Sign-up successful!");
      } else {
        setMessage(result.error || "Sign-up failed. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    }
    finally{
      setLoading(false)
    }
  }

  return (
    <div className="register-container">
       {loading && <Loader />} 
       <div className="leftpart">
         <div className="textpart">
           <p className="text">Let’s Get Started!</p>
         </div>
       </div>

       <div className="rightpart">

       <div className="logo">
          <img src="https://s3-alpha-sig.figma.com/img/afec/ea0a/14d8bdc23e35977a02474bbfe9928d8a?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MBtlSZtO6qomHmkhlSUVn79mydCrCXrwEfP-BJtpVXW7gA7T9rGrYAr639C6qqzavkAwPSK9QmoRDvsje2p-u2iZfepRJxb-ulbchxxDhQj4ipwqDgFmlIdSDOigzRyM6PeaGXbIi1sxVVmyVTAjCbWb7nIofuMFgKpqFmqgNEqGOEvdrjkyJsi8OJuvdiAavDHyzDNowTrCf1KUNBaLqs~KrJkYuJVKaB2V3nKdoaddEfGNHiUXOSP1F91JQKpVhEyBw~UBu8L8a5j6RdxE3PoryNiUe4vxJNVARRRk5xVswmiNxZYuhUBrq8fdBFiR5XJZC3IA3kjb~qOhC9q1lA__" alt="" />
        </div> 

       
        
       <div className="margin-manager">
        <div className="createaccount">
          create account
         </div>
        <form className="form" onSubmit={Signup}>
         <div className="name">
           <div className="firstname">
           <p>First Name</p>
           <input
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            value={firstName}
            required
          /> 
           </div>

          <div className="lastname">
          <p>Last Name</p>
          <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            value={lastName}
            required
          />
          </div>

         </div>

         <div className="usrandno">
           <div className="username">
             <p>Username</p>
             <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            value={username}
            required
          />

           </div>
           <div className="mobileno">
             <p>Mobile-no</p>
             <input
            type="number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone Number"
            value={phoneNumber}
            required
          />

           </div>
         </div>

         <div className="email">
           <p>E-mail</p>
           <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            value={email}
            required
          />
         </div>

         <div className="password">
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            value={password}
            required
          />
         </div>
          
          <div className="confirm">
            <p>Confirm password</p>
            <input
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            value={confirmPassword}
            required
          />

          </div>

          <div className="terms">
          <input type="checkbox" required/>
          <p>I agree with terms and conditions</p>
          </div>

          <div className="button">
          <button  type="submit" >Create Account</button>
          </div>
          
        </form>
        
        <div className="existed">
          <p>Already have an account?</p> <button onClick={()=> navigate('/Login')} >Login</button>
        </div>

        {message && <p className="message">{message}</p>}
        </div>
       </div>


    </div>
  );
}

export default Register;
