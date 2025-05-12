import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar imageSrc={reactLogo} />

      <Section />

      <Footer />
    </div>
  );
};

export default App;
