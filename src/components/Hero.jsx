import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    if (window.scrollY >= 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <section id="home" className="relative bg-[#f8f8f8] w-full h-[97vh] ">
      <div className="max-w-[1480px] mx-auto px-5">
        <img
          src="./images/hero/hero-bg.png"
          alt="hero"
          className="hidden md:block absolute right-0 top-0 z-10"
        />
        <div className="relative flex justify-center items-center h-screen w-full md:justify-start">
          <article className="flex flex-col items-center text-center mt-14 max-w-lg z-[99] md:text-start md:items-start">
            <h3 className="text-Black font-Rubik text-2xl font-bold">
              Plan your trip now
            </h3>
            <h1 className="text-5xl text-Black font-bold mt-3 mb-6 md:text-6xl">
              Save <span className="text-Red">big</span> with our car rental
            </h1>
            <p className="text-[#706f7b] font-Rubik mb-10 md:text-lg">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <div className="flex flex-col gap-5 font-Rubik sm:flex-row">
              <Link
                to="/"
                className="bg-Red text-[#fff] font-bold py-[18px] px-20 rounded border-2 border-solid border-Red shadow-md transition-colors duration-300 hover:bg-[#fa4226] sm:px-8"
              >
                Book Ride &nbsp; <i className="fa-solid fa-circle-check"></i>
              </Link>
              <Link
                to="/"
                className="bg-Black text-[#fff] font-bold py-[18px] px-20 rounded border-2 border-solid border-Black transition-colors duration-300 hover:bg-[#fff] hover:text-Black sm:px-8"
              >
                Learn More &nbsp; <i className="fa-solid fa-angle-right"></i>
              </Link>
            </div>
          </article>
          <img
            src="./images/hero/main-car.png"
            alt="car-img"
            className="hidden md:block absolute right-0 w-[65%] mt-14 z-20"
          />
        </div>
      </div>
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="bg-Red text-[#fff] text-2xl text-center w-8 h-8 p-5 fixed right-12 bottom-12 flex justify-center items-center border-4 border-solid border-[#fff] cursor-pointer z-30"
        >
          <i className="fa-solid fa-angle-up"></i>
        </div>
      )}
    </section>
  );
};

export default Hero;
