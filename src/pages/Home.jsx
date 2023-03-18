import Banner from "../components/Banner";
import Booking from "../components/Booking";
import Hero from "../components/Hero";
import Pick from "../components/Pick";
import Plan from "../components/Plan";

const Home = () => {
  return (
    <main>
      <Hero />
      <Booking />
      <Plan />
      <Pick />
      <Banner />
    </main>
  );
};

export default Home;
