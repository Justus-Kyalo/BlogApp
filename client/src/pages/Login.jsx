import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password" />
        <button>Login</button>
        <div>
          <p>This is an error</p>
          <span>
            Dont you have an account ?<Link to="/register">Register</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
