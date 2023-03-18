import { useEffect, useState } from "react";

const BookingReservation = ({
  setIsReservationSuccess,
  setIsAllFieldsCorrect,
  input,
  setInput,
}) => {
  const [carImg, setCarImg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const carImages = {
      "Audi A1 S-Line": "audia1",
      "VW Golf 6": "golf6",
      "Toyota Camry": "toyotacamry",
      "BMW 320 ModernLine": "bmw320",
      "Mercedes-Benz GLK": "benz",
      "VW Passat CC": "passatcc",
    };

    setCarImg(carImages[input.carType] || "");
  }, [input.carType]);

  const reverseCar = () => {
    setIsReservationSuccess(true);
    setIsAllFieldsCorrect(false);
    setInput({
      carType: "",
      pickUpLocation: "",
      dropOfLocation: "",
      pickUpDate: "",
      dropOfDate: "",
    });
  };

  return (
    <div className="bg-[#fff] text-Black w-full flex flex-col h-screen fixed top-[50%] left-[50%] pr-[2px] border-2 border-solid border-[#fff] overflow-x-hidden -translate-x-[50%] -translate-y-[50%] z-[999] md:w-[800px] md:top-[54%]">
      <div className="bg-Red text-[#fff] text-2xl font-bold flex justify-between items-center py-3 px-4">
        <h2 className="uppercase">complete reservation</h2>
        <i
          className="fa-solid fa-xmark cursor-pointer"
          onClick={() => setIsAllFieldsCorrect(false)}
        ></i>
      </div>
      <div className="bg-[#ffeae6] flex flex-col gap-4 py-5 px-8">
        <h3 className="text-Red text-xl font-bold">
          <i className="fa-solid fa-circle-info text-2xl"></i> &nbsp; Upon
          completing this reservation enquiry, you will receive:
        </h3>
        <p className="text-[#777] text-lg font-medium">
          Your rental voucher to produce on arrival at the rental desk and a
          toll-free customer support number.
        </p>
      </div>
      <div className="grid grid-cols-1 text-center bg-[#fff] p-8 border-b-2 border-solid border-[hsla(0,0%,47%,.624)] md:grid-cols-2 md:text-left">
        <div className="flex flex-col gap-8">
          <div>
            <h4 className="text-Red text-xl font-bold mb-5">Location & Date</h4>
            <div className="flex justify-center items-center gap-3 md:justify-start md:items-start">
              <i className="fa-solid fa-location-dot hidden md:block text-[#777] text-lg"></i>
              <div>
                <h5 className="font-bold mb-1">Pick-Up Date & Time</h5>
                <p className="text-[#777]">
                  {input.pickUpDate} /{" "}
                  <input
                    type="time"
                    className="w-24 text-center cursor-pointer border"
                  />
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center gap-3 md:justify-start md:items-start">
              <i className="fa-solid fa-location-dot hidden md:block text-[#777] text-lg"></i>
              <div>
                <h5 className="font-bold mb-1">Drop-Off Date & Time</h5>
                <p className="text-[#777]">
                  {input.dropOfDate} /{" "}
                  <input
                    type="time"
                    className="w-24 text-center cursor-pointer border"
                  />
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center gap-3 md:justify-start md:items-start">
              <i className="fa-solid fa-calendar-days hidden md:block text-[#777] text-lg"></i>
              <div>
                <h5 className="font-bold mb-1">Pick-Up Location</h5>
                <p className="text-[#777]">{input.pickUpLocation}</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center gap-3 md:justify-start md:items-start">
              <i className="fa-solid fa-calendar-days hidden md:block text-[#777] text-lg"></i>
              <div>
                <h5 className="font-bold mb-1">Drop-Off Location</h5>
                <p className="text-[#777]">{input.dropOfLocation}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 mt-9">
          <h4 className="text-Red text-lg font-bold">
            <span className="text-Black">Car -</span>
            {input.carType}
          </h4>
          <img
            src={`./images/cars-big/${carImg}.jpg`}
            alt="car-img"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="bg-[#fff] flex flex-col p-8">
        <h3 className="text-Red text-lg font-bold mb-5 uppercase">
          personal information
        </h3>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="grid grid-cols-1 gap-5 py-3 md:grid-cols-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="firstName" className="text-[#777] font-medium">
                First Name <b className="text-Red">*</b>
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                className="bg-[#dbdbdb] text-[#555] text-sm font-Rubik font-medium p-4 border-none outline-none"
              />
              <p className="text-xs">This field is required</p>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="lastName" className="text-[#777] font-medium">
                Last Name <b className="text-Red">*</b>
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your last name"
                className="bg-[#dbdbdb] text-[#555] text-sm font-Rubik font-medium p-4 border-none outline-none"
              />
              <p className="text-xs">This field is required</p>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="phoneNumber" className="text-[#777] font-medium">
                Phone Number <b className="text-Red">*</b>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                placeholder="Enter your phone number"
                className="bg-[#dbdbdb] text-[#555] text-sm font-Rubik font-medium p-4 border-none outline-none"
              />
              <p className="text-xs">This field is required</p>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="age" className="text-[#777] font-medium">
                Age <b className="text-Red">*</b>
              </label>
              <input
                type="tel"
                id="age"
                placeholder="Enter your age"
                className="bg-[#dbdbdb] text-[#555] text-sm font-Rubik font-medium p-4 border-none outline-none"
              />
              <p className="text-xs">This field is required</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 py-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-[#777] font-medium">
                Email <b className="text-Red">*</b>
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter your email address"
                className="bg-[#dbdbdb] text-[#555] text-sm font-Rubik font-medium p-4 border-none outline-none"
              />
              <p className="text-xs">This field is required</p>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="address" className="text-[#777] font-medium">
                Address <b className="text-Red">*</b>
              </label>
              <input
                type="text"
                id="address"
                placeholder="Enter your street address"
                className="bg-[#dbdbdb] text-[#555] text-sm font-Rubik font-medium p-4 border-none outline-none"
              />
              <p className="text-xs">This field is required</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 py-3 md:grid-cols-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="city" className="text-[#777] font-medium">
                City <b className="text-Red">*</b>
              </label>
              <input
                type="text"
                id="city"
                placeholder="Enter your city"
                className="bg-[#dbdbdb] text-[#555] text-sm font-Rubik font-medium p-4 border-none outline-none"
              />
              <p className="text-xs">This field is required</p>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="zipCode" className="text-[#777] font-medium">
                Zip Code <b className="text-Red">*</b>
              </label>
              <input
                type="text"
                id="zipCode"
                placeholder="Enter your zip code"
                className="bg-[#dbdbdb] text-[#555] text-sm font-Rubik font-medium p-4 border-none outline-none"
              />
              <p className="text-xs">This field is required</p>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-5 mb-8 text-[#565454]">
            <input type="checkbox" id="news" className="w-4 h-4" />
            <label htmlFor="news">Please send me latest news and updates</label>
          </div>
          <div className="bg-[#dbdbdb] -mx-8 p-8 text-center">
            <button
              onClick={reverseCar}
              type="submit"
              className="bg-Red text-[#fff] text-2xl font-bold py-3 px-6 border border-solid border-[#ff0] transition-colors duration-300 hover:bg-[#fe3516]"
            >
              Reserve Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingReservation;
