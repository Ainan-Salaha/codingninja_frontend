import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./login.css";

const Signup = () => {
  const [logindata, setLogindata] = useState({
    name: null,
    email: null,
    password: null,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLogindata({ ...logindata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(logindata);

    try {
      const details = await axios.post(
        "https://backend-codingninja.onrender.com/signup",
        logindata
      );
      toast.success(details.data.message);
      console.log("register sucess full");
      navigate("/login");
    } catch (error) {
      console.log("Error in login", error);
      toast.error(
        "Kindly fill the repected field Or Checking details are enter correctly.."
      );
    }
  };

  return (
    <div className="sign_bg">

      <div className="signupContainer">
        <div className="login_text">
          <h2 style={{ textAlign: "center" }}>
            Create Account 
            <Link to="/">
              <span style={{ color: "#d6d1e1" }}>
                <i className="fa-solid fa-xmark"></i>
              </span>
            </Link>
          </h2>
        </div>
        <div className="signupForm">
        <form className="inputLable" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Name *"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            id="email"
              required
            placeholder="Email *"
            onChange={handleChange}
            //   value={logindata.email}
          />
          <input
            type="password"
            name="password"
            id="password"
              required
            placeholder="Password *"
            onChange={handleChange}
          />

          <button type="submit" className="inputBtn">
            Continue
          </button>
        </form>
        <div>
          Have an account? <Link to="/login" className="link">Login</Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Signup;

