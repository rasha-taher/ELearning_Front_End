import Header from "./Header";
import Footer from "./Footer";
import "../styles/userProfile.css";
import image from "../images/image.jpg";
import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
const UserProfile = () => {
  const [appointments, setAppointments] = useState([]);
  const [registeredCourses, setRegisteredCourses] = useState([]);

  const [userData, setUserData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    image:""
  });

  
  const handleDropCourse = async (studentInfoId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/studentInfo/dropCourse/${studentInfoId}`
      );
      const data = response.data;

      if (data.success) {
        // Remove the deleted course from the state
        setRegisteredCourses((prevCourses) =>
          prevCourses.filter(
            (course) => course.student_info_id !== studentInfoId
          )
        );
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Error dropping course:", error);
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
          image:userData.image
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
            console.log(" the user's id: " + response.data.data[0].id);
            Cookies.set("userId", response.data.data[0].id, { expires: 7 }); // Set the cookie with a 7-day expiry
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
  const handleDeleteAccount = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account?"
    );
    if (confirmDelete) {
      // Execute backend function to delete account
      document.cookie =
        "userEmail=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

      deleteAccount();
    }
  };

  const deleteAccount = async () => {
    try {
      const response = await axios.post(
        `http://localhost:5000/studentInfo/deleteAccount`,
        {
          // Include any necessary data for your backend function
        }
      );

      const data = response.data;

      if (data.success) {
        alert("Account Deleted Successfully! ");
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Error deleting account:", error);
    }
  };
  const[selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Header />

      <div className="user-container">
        <label className="login-label">
          Language image :
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>

        {selectedImage && (
          <img src={selectedImage} className="user-image" alt="Selected" />
        )}
        <p className="user-info"> User's ID: {userData.id}</p>

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
            <button
              className="save-button del"
              onClick={handleDeleteAccount} // Add an event handler for delete button
            >
              Delete Account
            </button>
          </div>

          <div className="table-container">
            <p className="user-info"> Registered Courses</p>
            <table className="custom-table">
              <tr>
                <th>Language Name</th>
                <th>Day of enrollement</th>
                <th>Days of attendance</th>
                <th>Completed</th>
                <th>Scores</th>
                <th>Last Day</th>
                <th>Action</th>
              </tr>
              {registeredCourses.map((course) => (
                <tr key={course.student_info_id}>
                  <td>{course.language_id}</td>
                  <td>{course.enrolled_day}</td>
                  <td>{course.days_of_attendance}</td>
                  <td>{course.completed ? "Completed" : "In Progress"}</td>
                  <td>{course.scores_count}</td>
                  <td>{course.excpected_finish_day}</td>
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
