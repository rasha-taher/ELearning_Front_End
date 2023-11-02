import Learning from "./pages/Learning";
import {Routes,Route} from "react-router-dom"
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import SignIn from "./Components/Signin-up.jsx";
import Appoitments from "./Appoitments.js";
import "./styles/responsive.css";
import BecomeATeacher from "./Components/BecomeATeacher";
import About from "./Components/about";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
    
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="ProfilePage" element={<ProfilePage />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="SignIn" element={<SignIn />} />
          <Route path="Appoitments" element={<Appoitments />} />
            <Route path="BecomeATeacher" element={<BecomeATeacher />} />
              <Route path="/learning/*" element={<Learning />} />
        </Routes>
 
    </div>
  );
}

export default App;
