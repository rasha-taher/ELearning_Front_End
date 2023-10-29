import React from "react";
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

  return (
    <div className="signin" id="signin">
      <div class="close-icon">
      <Link to="/">   <i class="fas fa-times">x</i></Link>
      </div>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#"  className="sign-form">
            <h1 className="cr-h1">Create Account</h1>
            <input type="text" placeholder="Name" className="sign-input"/>
            <input type="email" placeholder="Email"className="sign-input" />
            <input type="password" placeholder="Password" className="sign-input"/>
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
        <div className="form-container sign-in-container">
          <h1 className="mind">MindX</h1>
          <form action="#" className="sign-form">
            <h1 className="cr-h1">Sign in</h1>
            <input type="email" placeholder="Email" className="sign-input"/>
            <input type="password" placeholder="Password"  className="sign-input"/>
            <a href="#">Forgot your password?</a>
            <button className="btn-signin" >Sign In</button>
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
              <button className="ghost btn-signin" id="signIn" onClick={handleSignInClick}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p className="sign-p ">Enter your personal details and start your journey with us</p>
              <button className="ghost btn-signin" id="signUp" onClick={handleSignUpClick}>
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
