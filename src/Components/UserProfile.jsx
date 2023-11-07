import Header from "./Header";
import Footer from "./Footer";
import "../styles/userProfile.css";
import image from "../images/image.jpg";
import axios from "axios";
import { useState, useEffect } from "react";

const UserProfile = () => {
  const [appointments, setAppointments] = useState([]);
  const [registeredCourses, setRegisteredCourses] = useState([]);

  const [userData, setUserData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
  });
  const handleDropCourse = async (studentInfoId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/studentInfo/dropCourse/${studentInfoId}`);
      const data = response.data;

      if (data.success) {
        // Remove the deleted course from the state
        setRegisteredCourses(prevCourses => prevCourses.filter(course => course.student_info_id !== studentInfoId));
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error dropping course:', error);
    }
  };

  const handleSave = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/student/updateStudent",
        {
          id: userData.id,
          name: userData.name,
          email: userData.email,
          password: userData.password,
        }
      );

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
      const response = await axios.post(
        `http://localhost:5000/appoitment/cancelAppointment/${id}`
      );
      if (response.data.success) {
        // If successful, update the status in the state
        setAppointments((prevAppointments) =>
          prevAppointments.map((appointment) =>
            appointment.appoitment_id === id
              ? { ...appointment, status: "Canceled" }
              : appointment
          )
        );
      } else {
        console.error("Error:", response.data.error);
      }
    } catch (error) {
      console.error("Error:", error);
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

      const fetchStudentInformation = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/studentInfo/getStudentInformation/${userEmail}`
          );
          if (response.data.success) {
            setRegisteredCourses(response.data.data);
          } else {
            console.error("Error:", response.data.error);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };

      fetchStudentInformation();
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
          <div className="button-container">
            <button className="save-button" onClick={handleSave}>
              {" "}
              Save
            </button>
          </div>
          <div className="table-container">
            <p className="user-info"> Registered Courses</p>
            <table className="custom-table">
              <tr>
                <th>Language Name</th>
                {/* <th>Teacher Name</th> */}
                <th>Days of attendance</th>
                <th>Completed</th>
                <th>Scores</th>
                <th>Chapter Completed</th>
                <th>Action</th>
              </tr>
              {registeredCourses.map((course) => (
                <tr key={course.student_info_id}>
                  <td>{course.language_id}</td>
                  {/* <td>{course.teacher_name}</td> */}
                  <td>{course.days_of_attendance}</td>
                  <td>{course.completed ? "Completed" : "In Progress"}</td>
                  <td>{course.scores_count}</td>
                  <td>{course.chapter_completed}</td>
                  <td>
                    <button
                      className="action-button delete"
                      onClick={() => handleDropCourse(course.student_info_id)}
                    >
                      Drop Course
                    </button>
                  </td>
                </tr>
              ))}
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
                    <td>{appointment.appoitment_start_time}</td>
                    <td>{appointment.appoitment_end_time}</td>
                    <td>{appointment.status}</td>
                    <td>
                      <button
                        className="action-button delete"
                        onClick={() =>
                          cancelAppointment(appointment.appoitment_id)
                        }
                      >
                        {" "}
                        Cancel Appointment
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
