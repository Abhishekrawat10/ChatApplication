import React from "react";
import Add from "../images/addAvatar.png";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lama Chat</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="Email " />
          <input type="password" placeholder="Password" />          
          <button>LogIn</button>
        </form>
        <p>You don't have an account? SignUp</p>
      </div>
    </div>
  );
};

export default Login;
