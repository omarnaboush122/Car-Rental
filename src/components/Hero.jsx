import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-[#f8f8f8] w-full h-[97vh] ">
      <div className="container mx-auto px-8">
        <img src="./images/hero-bg.png" alt="hero" className="hidden" />
        <div className="relative flex items-center h-screen w-full">
          <article className="flex flex-col items-center text-center max-w-lg z-10">
            <h3 className="text-Black font-Rubik text-xl font-bold">
              Plan your trip now
            </h3>
            <h1 className="text-5xl text-Black font-bold mt-3 mb-6">
              Save <span className="text-Red">big</span> with our car rental
            </h1>
            <p className="text-[#706f7b] font-Rubik mb-10">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <div className="flex flex-col gap-5">
            <Link to="/" className="bg-Red text-[#fff] py-4 px-8 border-2 border-solid border-Red shadow-md">
              Book Ride &nbsp; <i className="fa-solid fa-circle-check"></i>
            </Link>
            <Link to="/">
              Learn More &nbsp; <i className="fa-solid fa-angle-right"></i>
            </Link>
          </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Hero;
