import { useState } from "react";
import './Signup.css';

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  async function Signup(e) {
    e.preventDefault();

   
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
  }

  return (
    <div className="register-container">
      <center>
        <h1>Sign-up Page</h1>
        <form onSubmit={Signup}>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            value={email}
            required
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            value={password}
            required
          />
          <input
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            value={confirmPassword}
            required
          />
          <input
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            value={firstName}
            required
          />
          <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            value={lastName}
            required
          />
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            value={username}
            required
          />
          <input
            type="number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone Number"
            value={phoneNumber}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        {message && <p className="message">{message}</p>}
      </center>
    </div>
  );
}

export default Register;
