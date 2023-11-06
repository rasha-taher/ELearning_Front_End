import Header from "./Header";
import Footer from "./Footer";
import "../styles/userProfile.css";
import image from "../images/image.jpg";
import axios from "axios";
import { useState, useEffect } from "react";

const UserProfile = () => {
  const [appointments, setAppointments] = useState([]);

  const [userData, setUserData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
  });
  const handleSave = async () => {
    try {
      const response = await axios.post("http://localhost:5000/student/updateStudent", {
        id: userData.id,
        name: userData.name,
        email: userData.email,
        password: userData.password
      });

      if (response.data.success) {
        alert("User information updated successfully");
      } else {
        console.error("Error:", response.data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const cancelAppointment = async (id) => {
    try {
      const response = await axios.post(`http://localhost:5000/appoitment/cancelAppointment/${id}`);
      if (response.data.success) {
        // If successful, update the status in the state
        setAppointments((prevAppointments) =>
          prevAppointments.map((appointment) =>
            appointment.appoitment_id === id
              ? { ...appointment, status: 'Canceled' }
              : appointment
          )
        );
      } else {
        console.error('Error:', response.data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    const userEmailCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("userEmail"));

    if (userEmailCookie) {
      const userEmail = userEmailCookie.split("=")[1];

      const fetchData = async () => {
        try {
          const response = await axios.get( 
            `http://localhost:5000/student/getStudentByEmail/${userEmail}`
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
      const fetchAppoitment = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/student/getStudentAppoitment/${userEmail}`
          );

          if (response.data.success) {
            setAppointments(response.data.data);
          } else {
            console.error("Error:", response.data.error);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };
    
    
      fetchData();
      fetchAppoitment();
    }
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

            
          </div>
          <div className="button-container">
        <button className="save-button" onClick={handleSave}> Save</button>
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
          <div className="table-container">
      <p className="user-info"> Your Appointments</p>

      <table className="custom-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Teacher Name</th>
            <th>Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{appointment.appoitment_name}</td>
              <td>{appointment.name}</td>
              <td>{appointment.appoitment_date}</td>
              <td>{appointment. appoitment_start_time}</td>
              <td>{appointment.appoitment_end_time}</td>
              <td>{appointment.status}</td>
              <td>
              <button
                  className="action-button delete"
                  onClick={() => cancelAppointment(appointment.appoitment_id)}
                >  Cancel Appointment
                </button>
              </td>
            </tr>
        )  )}
        </tbody>
      </table>
    </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserProfile;