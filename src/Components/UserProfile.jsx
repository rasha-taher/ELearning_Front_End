import Header from "./Header";
import Footer from "./Footer";
import "../styles/userProfile.css";
import image from "../images/image.jpg";

const UserProfile = () => {
  return (
    <div>
      <div className="home-container">
        <Header />
      </div>
      <div className="user-container">
        <img src={image} className="user-image"></img>
        <p className="user-info"> User's ID</p>
        <p className="user-info">
          {" "}
          Total Score : <p> 1000</p>{" "}
        </p>
        <div className="change-info-container">
          <div className="row">
            <div>
              <p className="user-info">Name: </p>
              <input type="text" className="user-input"></input>
            </div>
            <div>
              <p className="user-info">Email: </p>
              <input type="text" className="user-input"></input>
            </div>
          </div>
          <div className="row">
            <div>
              <p className="user-info">Password: </p>
              <input type="password" className="user-input"></input>
            </div>
            <div>
              <p className="user-info">Confirm Password: </p>
              <input type="password" className="user-input"></input>
            </div>
          </div>
          <button className="save-button"> Save</button>
          <div>
            <p className="user-info"> Registered Courses</p>

            <table class="custom-table">
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
      <Footer/>
    </div>
  );
};

export default UserProfile;
