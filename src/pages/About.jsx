import AboutCompany from "../components/About-Company";
import BookBanner from "../components/BookBanner";
import Intro from "../components/Intro";
import Plan from "../components/Plan";

const About = () => {
  return (
    <main>
      <Intro title="About" />
      <AboutCompany />
      <Plan />
      <BookBanner />
    </main>
  );
};

export default About;
