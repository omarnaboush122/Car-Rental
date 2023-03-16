import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between items-center w-full max-w-[133rem] h-auto py-11 px-8 mx-auto absolute top-0 left-0 right-0 z-50">
        <div className="w-[14.5rem]">
          <Link to="/">
            <img
              src="./images/logo/logo.png"
              alt="logo"
              className="w-full h-full"
            />
          </Link>
        </div>
        <div className="flex text-[2.8rem] cursor-pointer transition-colors duration-300 hover:text-[#ff4d30]">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
      <div className="flex justify-center items-center bg-white w-full h-screen fixed top-0 left-0 transition-all duration-500 ease-in-out z-[999]">
        <div className="absolute top-10 right-10 text-3xl cursor-pointer transition-colors duration-300 hover:text-[#ff4d30]">
          <i className="fa-solid fa-xmark"></i>
        </div>
        <ul className="flex flex-col text-2xl gap-8 text-center">
          <li>
            <Link
              to="/"
              className="text-[#010103] font-medium transition-colors duration-300 hover:text-[#ff4d30]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-[#010103] font-medium transition-colors duration-300 hover:text-[#ff4d30]"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="models"
              className="text-[#010103] font-medium transition-colors duration-300 hover:text-[#ff4d30]"
            >
              Models
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              className="text-[#010103] font-medium transition-colors duration-300 hover:text-[#ff4d30]"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="our-team"
              className="text-[#010103] font-medium transition-colors duration-300 hover:text-[#ff4d30]"
            >
              Our Team
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              className="text-[#010103] font-medium transition-colors duration-300 hover:text-[#ff4d30]"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
