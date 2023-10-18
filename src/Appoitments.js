import Header from "./Components/Header";
import OurTeacher from "./Components/OurTeacher";
import Appoitment from "./Components/Appoitment";
import Footer from "./Components/Footer";

function Appoitments() {
  return (
    <div className="Appoitments">
      <div className="home-container">
        <Header />
      </div>
      <OurTeacher />
      <Appoitment />
      <Footer />
    </div>
  );
}

export default Appoitments;
