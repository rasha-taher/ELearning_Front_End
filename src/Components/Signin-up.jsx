import React, { useState } from "react";
import "../styles/signin.css";
import "../styles/F_responsive.css";
import { Link } from "react-router-dom";

function SignIn() {
  const handleSignUpClick = () => {
    const container = document.getElementById("container");
    container.classList.add("right-panel-active");
  };

  const handleSignInClick = () => {
    const container = document.getElementById("container");
    container.classList.remove("right-panel-active");
  };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    const response = await fetch("http://localhost:5000/student/studentLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      window.location.href = "/ProfilePage";
    } else {
      alert("Email Or Password may be incorrect");
    }
  };

  return (
    <div className="signin" id="signin">
      <div className="close-icon">
        <Link to="/">
          {" "}
          <i className="fas fa-times">x</i>
        </Link>
      </div>
      <div className="container" id="container">
        <div
          className="form-container sign-up-container"
          id="sign-up-container"
        >
          <form action="#" className="sign-form">
            <h1 className="cr-h1">Create Account</h1>
            <input type="text" placeholder="Name" className="sign-input" />
            <input type="email" placeholder="Email" className="sign-input" />
            <input
              type="password"
              placeholder="Password"
              className="sign-input"
            />
            <br />
            <button className="btn-signin">Sign Up</button>
            <div className="sign">
              {" "}
              <p className="sign-p ">
                Click here from
                <a className="Sign" onClick={handleSignInClick}>
                  Sign In
                </a>
              </p>
            </div>
          </form>
        </div>
        <div
          className="form-container sign-in-container"
          id="sign-in-container"
        >
          <h1 className="mind">MindX</h1>
          <form action="#" className="sign-form">
            <h1 className="cr-h1">Sign in</h1>
            <input
              type="email"
              placeholder="Email"
              className="sign-input"
              value={formData.email}
              onChange={handleChange}
              name="email"
            />
            <input
              type="password"
              placeholder="Password"
              className="sign-input"
              value={formData.password}
              onChange={handleChange}
              name="password"
            />
            <a href="#">Forgot your password?</a>
            <button className="btn-signin" onClick={handleLogin}>
              Sign In
            </button>
            <div className="sign">
              <p className="sign-p">
                Click here from
                <a className="Sign" onClick={handleSignUpClick}>
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <h1 className="mind">MindX</h1>
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p className="sign-p ">
                To stay connected with us, please login with your personal info
              </p>
              <button
                className="ghost btn-signin"
                id="signIn"
                onClick={handleSignInClick}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p className="sign-p ">
                Enter your personal details and start your journey with us
              </p>
              <button
                className="ghost btn-signin"
                id="signUp"
                onClick={handleSignUpClick}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignIn;
