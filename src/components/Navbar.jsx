import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <nav>
      <div className="flex justify-between items-center w-full h-auto p-8 mx-auto absolute top-0 left-0 right-0 z-50 lg:hidden">
        <div className="w-40">
          <Link to="/">
            <img
              src="./images/logo/logo.png"
              alt="logo"
              className="w-full h-full"
            />
          </Link>
        </div>
        <div
          onClick={openNav}
          className="flex text-3xl cursor-pointer transition-colors duration-300 hover:text-Red"
        >
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
      <div
        className={`flex justify-center items-center bg-[#fff] w-full h-screen fixed top-0 transition-all duration-500 ease-in-out z-[999] ${
          isNavOpen ? "left-0" : "-left-full"
        }`}
      >
        <div
          onClick={closeNav}
          className="absolute top-8 right-8 text-3xl cursor-pointer transition-colors duration-300 hover:text-Red"
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
        <ul className="flex flex-col text-2xl gap-8 text-center">
          <li>
            <Link
              to="/"
              className="text-Black font-medium transition-colors duration-300 hover:text-Red"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-Black font-medium transition-colors duration-300 hover:text-Red"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/models"
              className="text-Black font-medium transition-colors duration-300 hover:text-Red"
            >
              Models
            </Link>
          </li>
          <li>
            <Link
              to="/testimonials"
              className="text-Black font-medium transition-colors duration-300 hover:text-Red"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="/our-team"
              className="text-Black font-medium transition-colors duration-300 hover:text-Red"
            >
              Our Team
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-Black font-medium transition-colors duration-300 hover:text-Red"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden lg:flex justify-between items-center w-full h-auto p-8 mx-auto absolute top-0 left-0 right-0 z-50">
        <div className="w-40">
          <Link to="/">
            <img
              src="./images/logo/logo.png"
              alt="logo"
              className="w-full h-full"
            />
          </Link>
        </div>
        <ul className="flex gap-8 font-Rubik text-lg">
          <li>
            <Link
              to="/"
              className="text-Black font-medium transition-colors duration-300 hover:text-Red"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-Black font-medium transition-colors duration-300 hover:text-Red"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="models"
              className="text-Black font-medium transition-colors duration-300 hover:text-Red"
            >
              Vehicle Models
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              className="text-Black font-medium transition-colors duration-300 hover:text-Red"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="our-team"
              className="text-Black font-medium transition-colors duration-300 hover:text-Red"
            >
              Our Team
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              className="text-Black font-medium transition-colors duration-300 hover:text-Red"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-5 font-Rubik text-lg font-medium">
          <Link
            to="/"
            className="text-Black font-medium transition-colors duration-300 hover:text-Red"
          >
            Sign In
          </Link>
          <Link
            to="/"
            className="bg-Red text-[#fff] py-4 px-8 rounded transition-shadow duration-300 hover:shadow-lg"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
