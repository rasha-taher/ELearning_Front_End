import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/userProfile.css";
import image from "../images/image.jpg";

const UserProfile = () => {
  let [userEmail, setUserEmail] = useState("");
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
   
      const fetchData = async () => {
        setUserEmail(localStorage.setItem('userEmail', userEmail));
        try {
          const response = await axios.get(
              `http://localhost:5000/student/getUserByEmail/${userEmail}`
           
          );
          if (response.data.success) {
            const user = response.data.data[0];
            if (user) {
              setUserData(user);
            } else {
              console.error("User data not found in response");
            }
          } else {
            console.error("Error:", response.data.error);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };

      fetchData();
   
  }, []);
  
  const updateUserData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/student/updateUser",  // Adjust the URL as needed
        userData
      );

      if (response.data.success) {
        console.log("User data updated successfully.");
      } else {
        console.error("Error:", response.data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div>
      <Header />
      <div className="user-container">
        <img src={image} className="user-image" alt="User" />
        <p className="user-info"> User's ID: {userData.id}</p>
        <p className="user-info"> Total Score : <p> 1000</p> </p>
        <div className="change-info-container">
          <div className="row">
            <div>
              <p className="user-info">Name: </p>
              {userData && (
                <input
                  type="text"
                  className="user-input"
                  value={userData.name}
                  onChange={(e) =>
                    setUserData({ ...userData, name: e.target.value })
                  }
                />
              )}
            </div>
            <div>
              <p className="user-info">Email: </p>
              {userData && (
                <input
                  type="text"
                  className="user-input"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                />
              )}
            </div>
          </div>
          <div className="row">
            <div>
              <p className="user-info">Password: </p>
              {userData && (
                <input
                  type="password"
                  className="user-input"
                  value={userData.password || ""}
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                />
              )}
            </div>

        
          </div>
          <div className="button-container">
         
        <button className="save-button" onClick={updateUserData}>
          Save
        </button>
          </div>
          <div className="table-container">
            <p className="user-info"> Registered Courses</p>

            <table className="custom-table">
              <tr>
                <th>Course Name</th>
                <th>Teacher Name</th>
                <th>Status</th>
                <th>Score</th>
              </tr>
              <tr>
                <td>Course 1</td>
                <td>Teacher A</td>
                <td>Completed</td>
                <td>95</td>
              </tr>
              <tr>
                <td>Course 2</td>
                <td>Teacher B</td>
                <td>In Progress</td>
                <td>75</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
