import React from 'react';
import Add from "../images/addAvatar.png"
const Register = () => {
  return (
    <div className="formContainer">
     <div className="formWrapper">
     <span className="logo">Lama Chat</span>
     <span className="title">Register</span>
       <form>
        <input type="text" placeholder='Enter Your Name'/>
        <input type="email" placeholder='Email ' />
        <input type="password" placeholder='Password' />
        <label htmlFor="file">
          <img src={Add} alt="" srcset=""/>
          <span>Add Avatar</span>
        </label>
        <input type="file" id='file' />
        <button>SignUp</button>
       </form>
       <p>You do have an account? Login</p>
     </div>
    </div>
  )
}

export default Register