import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       await axios.post(
        "http://localhost:8800/api/auth/register",
        inputs
      );

      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  }; 

  return (
    <div className="auth">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="text"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button type="submit">Register</button>
        <div>
          {error && <p>{error}</p>}
          <span>
            Dont you have an account ?<Link to="/login">Login</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Register;
