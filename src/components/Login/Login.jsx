import React from "react";
import * as Component from "./loginComponent"


const Login = () => {
  return (
    <Component.body className="body">
      <Component.card className="card">
        <input type="checkbox" id="check" style={{display: "none"}}/>
        <Component.content className="content">
          <Component.login className="login">
            <div className="inner">
              <h2>Log In</h2>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <label htmlFor="check">Sign Up</label>
              <button>Login</button>
            </div>
          </Component.login>
        </Component.content>
        <Component.signup className="signup">
          <div className="inner">
            <h2>Sign up</h2>
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <label htmlFor="check">Sign Up</label>
            <button>Login</button>
          </div>
        </Component.signup>
      </Component.card>
    </Component.body>
  );
};

export default Login;
