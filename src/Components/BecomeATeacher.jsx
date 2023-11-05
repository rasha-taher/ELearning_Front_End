import Header from "./Header";
import Footer from "./Footer";
import "../styles/BecomeATeacher.css";
import gif1 from "../images/giphy.gif";
import gif2 from "../images/giphy-25.gif";
import axios from 'axios';
import React, { useState } from "react";

const BecomeATeacher = () => {
  const url = "http://localhost:5000";
  const [teacher_name, setName] = useState("");
  const [teacher_email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendRequest = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(url + "/request/sendRequest", {
        teacher_name,
        teacher_email,
        message,
      });

      if (response.data.success) {
        alert("Request sent successfully");
      } else {
        alert("Unable to send request. Error: " + response.data.error.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Unable to send request. Please try again later.");
    }
  };

  return (
    <div>
      <Header />
      <div className="become-container">
        <div className="inside-become-container">
          <p className="become-title">Become A Part of Our Family</p>

          <div className="apply">
            <div className="gif-cont">
              <img src={gif1} alt=" gif 1" className="apply-gif" />
            </div>
            <div className="apply-form">
              <form onSubmit={sendRequest}>
                <div>
                  <p className="user-info"> Full Name: </p>
                  <input
                    type="text"
                    className="user-input f"
                    value={teacher_name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <p className="user-info">Email: </p>
                  <input
                    type="text"
                    className="user-input f"
                    value={teacher_email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <p className="user-info">Tell Us Why Join Us!</p>
                  <textarea
                    type="text"
                    className="text-input"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div>
                  <button className="join-btn"> Send Request </button>
                </div>
              </form>
            </div>
            <div className="gif-cont">
              <img src={gif2} alt=" gif 1" className="apply-gif" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BecomeATeacher;
