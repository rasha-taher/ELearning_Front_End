import React, { useState } from "react";
import "../styles/ourTeacher.css";
import "../styles/F_responsive.css";

const Appoitment = () => {
  const [appoitment_name, setAppoitmentName] = useState("");
  const [appoitment_date, setDate] = useState("");
  const [appoitment_start_time, setAppoitmentStartTime] = useState("");
  const [appoitment_end_time, setAppoitmentEndTime] = useState("");
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [student_id, setStudentID] = useState("");
  const [teacher_id, setTeacherID] = useState("");
  const [teachername, setTeacherName] = useState("");

  const handleAddAppoitment = async () => {
    // Call the functions to get student_id and teacher_id based on name
    const studentIdResponse = await fetch(
      `http://localhost:5000/appoitment/getStudentId/${name}`
    );
    const teacherIdResponse = await fetch(
      `http://localhost:5000/appoitment/getTeacherId/${teachername}`
    );

    if (studentIdResponse.ok) {
      const studentData = await studentIdResponse.json();
      setStudentID(studentData.data.student_id);
    } else {
      // Handle the case where there is no student with this name
      window.alert("No student with this name.");
      return;
    }

    if (teacherIdResponse.ok) {
      const teacherData = await teacherIdResponse.json();
      setTeacherID(teacherData.data.teacher_id);
    } else {
      window.alert("No teacher with this name.");
      return;
    }

    const appoitmentBody = {
      appoitment_name,
      appoitment_date,
      appoitment_start_time,
      appoitment_end_time,
      status,
      student_id,
      teacher_id,
    };

    console.log(appoitmentBody);

    try {
      const response = await fetch("http://localhost:5000/appoitment/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appoitmentBody), // Corrected variable name
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        window.alert("Appointment added successfully!");
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error:", error);
      window.alert("Error adding appointment. Please try again later.");
    }
  };

  return (
    <div className="Appoitment">
      <div className="start">
        <div className="ligne"></div>
        <div className="T_title">Book Appoitment</div>
        <div className="ligne"></div>
      </div>
      <form className="BookAppoitment">
        <label className="app-label">
          Name:<br></br>
          <input
            className="input_appoitment"
            type="text"
            onChange={(e) => setAppoitmentName(e.target.value)}
          ></input>
        </label>
        <br></br>
        <label className="app-label">
          Student Name:<br></br>
          <input
            className="input_appoitment"
            type="text"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </label>
        <br></br>
        <label className="app-label">
          Teacher:<br></br>
          <input
            type="text"
            className="input_appoitment"
            onChange={(e) => setTeacherName(e.target.value)}
          />
        </label>
        <br></br>
        <label className="app-label">
          Status:<br></br>
          <input
            className="input_appoitment"
            type="text"
            onChange={(e) => setStatus(e.target.value)}
          ></input>
        </label>
        <br></br>
        <label className="app-label">
          Date:<br></br>
          <input
            className="input_appoitment"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          ></input>
        </label>
        <br></br>
        <label className="app-label">
          Start Time:<br></br>
          <input
            className="input_appoitment"
            type="time"
            onChange={(e) => setAppoitmentStartTime(e.target.value)}
          ></input>
        </label>
        <br></br>
        <label className="app-label">
          End Time:<br></br>
          <input
            className="input_appoitment"
            type="time"
            onChange={(e) => setAppoitmentEndTime(e.target.value)}
          ></input>
        </label>
        <br></br>
        <button className="book-app" onClick={handleAddAppoitment}>
          Book Appoitment
        </button>
      </form>
    </div>
  );
};

export default Appoitment;
