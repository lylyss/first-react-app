import reactLogo from "./assets/react.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import Section from "./components/Body";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar imageSrc={reactLogo} />

      <Body />

      <Footer />
    </div>
  );
};

export default App;
