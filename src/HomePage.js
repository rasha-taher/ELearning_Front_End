import Hero from "./Components/Hero";
import About from "./Components/about";
import PopularCoursePage from "./Components/PopularCoursePage";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function Home() {
  return (
    <div className="Home">
      <Hero />
      <About />
      <PopularCoursePage />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
