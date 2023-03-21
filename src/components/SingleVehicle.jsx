import { Link } from "react-router-dom";

const SingleVehicle = ({ title, subTitle, img, price }) => {
  return (
    <article className="flex flex-col w-full border border-solid border-[#d5d5d5] rounded sm:w-[350px]">
      <div className="w-full h-auto rounded">
        <img src={img} alt="audi-img" className="w-full h-[270px]" />
        <div className="flex flex-col py-5 px-6 text-Black">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-1 items-start">
              <h3 className="text-2xl font-bold">{title}</h3>
              <span className="flex gap-1">
                <i className="fa-solid fa-star text-[#ffc933]"></i>
                <i className="fa-solid fa-star text-[#ffc933]"></i>
                <i className="fa-solid fa-star text-[#ffc933]"></i>
                <i className="fa-solid fa-star text-[#ffc933]"></i>
                <i className="fa-solid fa-star text-[#ffc933]"></i>
              </span>
            </div>
            <div className="flex flex-col text-right">
              <h3 className="text-3xl font-bold">${price}</h3>
              <p>per day</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-20 gap-y-5 my-5 pb-6 border-b border-solid border-[#c6c6c6]">
            <span className="text-[#777] text-lg font-medium text-left">
              <i className="fa-solid fa-car-side text-Black"></i>
              &nbsp; {subTitle}
            </span>
            <span className="text-[#777] text-lg font-medium text-right">
              4/5 &nbsp;
              <i className="fa-solid fa-car-side text-Black"></i>
            </span>
            <span className="text-[#777] text-lg font-medium text-left">
              <i className="fa-solid fa-car-side text-Black"></i>
              &nbsp; Manual
            </span>
            <span className="text-[#777] text-lg font-medium text-right">
              Diesel &nbsp;
              <i className="fa-solid fa-car-side text-Black"></i>
            </span>
          </div>
          <div className="bg-Red py-4 px-8 text-lg border-2 border-solid border-Red rounded shadow-md cursor-pointer transition-all duration-300 hover:bg-[#fa4226] hover:shadow-lg">
            <Link to="/" className="text-[#fff] font-bold">
              Book Ride
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SingleVehicle;
