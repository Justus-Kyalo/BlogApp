import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form action="">
        <input required type="text" placeholder="username" />
        <input required type="email" placeholder="email" />
        <input required type="text" placeholder="password" />
        <button>Register</button>
        <div>
          <p>This is an error</p>
          <span>
            Dont you have an account ?<Link to="/login">Login</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Register;
