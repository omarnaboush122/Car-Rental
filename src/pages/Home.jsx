import Banner from "../components/Banner";
import Booking from "../components/Booking";
import ChooseUs from "../components/Choose-us";
import Download from "../components/Download";
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import Pick from "../components/Pick";
import Plan from "../components/Plan";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <main>
      <Hero />
      <Booking />
      <Plan />
      <Pick />
      <Banner />
      <ChooseUs />
      <Testimonials />
      <Faq />
      <Download />
    </main>
  );
};

export default Home;
