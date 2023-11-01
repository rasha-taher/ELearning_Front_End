import Header from "./Header";
import Footer from "./Footer";
import "../styles/userProfile.css";
import image from "../images/image.jpg";
import axios from "axios";
import { useState, useEffect } from "react";

const UserProfile = () => {

  const [userData, setUserData] = useState({
    id:"",
    name: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    const userEmail = document.cookie
      .split("; ")
      .find((row) => row.startsWith("userEmail"))
      .split("=")[1];

    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/student/getUserByEmail",
          {
            email: userEmail,
          }
        );

        if (response.data.success) {
          setUserData(response.data.data[0]);
        } else {
          console.error("Error:", response.data.error);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />

      <div className="user-container">
        <img src={image} className="user-image"></img>
        <p className="user-info"> User's ID: {userData.id}</p>
        <p className="user-info">
          {" "}
          Total Score : <p> 1000</p>{" "}
        </p>
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
            <button className="save-button"> Save</button>
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
