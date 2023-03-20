import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Models from "./pages/Models";
import OurTeam from "./pages/OurTeam";
import TestimonialsPage from "./pages/TestimonialsPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/models" element={<Models />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/our-team" element={<OurTeam />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
