import AboutCompany from "../components/About-Company";
import Contact from "../components/Contact";
import Intro from "../components/Intro";
import Plan from "../components/Plan";

const About = () => {
  return (
    <main>
      <Intro title="About" />
      <AboutCompany />
      <Plan />
      <Contact />
    </main>
  );
};

export default About;
