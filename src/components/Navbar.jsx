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
        <div className="flex text-[2.8rem] cursor-pointer transition-all duration-300 hover:text-[#ff4d30]">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};



export default Navbar;
