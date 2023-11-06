import React, { useState, useEffect } from "react";
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
  const [teacher_id, setTeacherID] = useState(""); // Store teacher_id
  const [teachers, setTeachers] = useState([]); // Store a list of teachers

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const teacherResponse = await fetch(
          "http://localhost:8000/user/getTeachers"
        );
        if (teacherResponse.ok) {
          const teacherData = await teacherResponse.json();
          setTeachers(teacherData.data);
        }
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    };
    fetchTeachers();
  }, []);

  const handleAddAppoitment = async () => {
    const studentIdResponse = await fetch(
      `http://localhost:8000/user/getStudent/${name}`
    );

    if (studentIdResponse.ok) {
      const studentData = await studentIdResponse.json();
      setStudentID(studentData.data.student_id);
    } else {
      window.alert("No student with this name.");
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
      const response = await fetch("http://localhost:8000/appoitment/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appoitmentBody),
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
        <div className="T_title">Book Appointment</div>
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
          <select
            className="input_appoitment"
            onChange={(e) => setTeacherID(e.target.value)}
          >
            <option value="">Select a teacher</option>
            {teachers.map((teacher) => (
              <option key={teacher.id} value={teacher.id}>
                {teacher.name}
              </option>
            ))}
          </select>
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
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default Appoitment;
