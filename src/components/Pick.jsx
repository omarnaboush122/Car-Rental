import { useState, useEffect } from "react";
import cars from "../CarsDetails";

const Pick = () => {
  const [car, setCar] = useState("audi");
  const [carDetails, setCarDetails] = useState(cars[car]);

  useEffect(() => {
    setCarDetails(cars[car] || "");
  }, [car]);

  return (
    <section className="py-24">
      <div className="max-w-[1480px] mx-auto px-8">
        <div className="flex flex-col">
          <div className="text-Black max-w-lg mx-auto text-center mb-12">
            <h3 className="text-2xl font-Rubik font-medium">Vehicle Models</h3>
            <h2 className="text-5xl font-Rubik font-bold my-3">
              Our rental fleet
            </h2>
            <p className="text-[#706f7b] text-lg font-Rubik">
              Choose from a variety of our amazing vehicles to rent for your
              next adventure or business trip
            </p>
          </div>
          <div className="flex flex-col justify-between gap-12 xl:flex-row xl:gap-2">
            <article className="flex flex-col gap-3">
              <button
                className={`${
                  car === "audi" ? "bg-Red text-[#fff]" : "bg-[#e9e9e9]"
                } text-xl font-bold py-[15px] px-[25px] border-none cursor-pointer transition-colors duration-300 hover:bg-Red hover:text-[#fff]`}
                onClick={() => setCar("audi")}
              >
                Audi A1 S-Line
              </button>
              <button
                className={`${
                  car === "golf" ? "bg-Red text-[#fff]" : "bg-[#e9e9e9]"
                } text-xl font-bold py-[15px] px-[25px] border-none cursor-pointer transition-colors duration-300 hover:bg-Red hover:text-[#fff]`}
                onClick={() => setCar("golf")}
              >
                VW Golf 6
              </button>
              <button
                className={`${
                  car === "toyota" ? "bg-Red text-[#fff]" : "bg-[#e9e9e9]"
                } text-xl font-bold py-[15px] px-[25px] border-none cursor-pointer transition-colors duration-300 hover:bg-Red hover:text-[#fff]`}
                onClick={() => setCar("toyota")}
              >
                Toyota Camry
              </button>
              <button
                className={`${
                  car === "bmw" ? "bg-Red text-[#fff]" : "bg-[#e9e9e9]"
                } text-xl font-bold py-[15px] px-[25px] border-none cursor-pointer transition-colors duration-300 hover:bg-Red hover:text-[#fff]`}
                onClick={() => setCar("bmw")}
              >
                BMW 320 ModernLine
              </button>
              <button
                className={`${
                  car === "mercedes" ? "bg-Red text-[#fff]" : "bg-[#e9e9e9]"
                } text-xl font-bold py-[15px] px-[25px] border-none cursor-pointer transition-colors duration-300 hover:bg-Red hover:text-[#fff]`}
                onClick={() => setCar("mercedes")}
              >
                Mercedes-Benz GLK
              </button>
              <button
                className={`${
                  car === "passat" ? "bg-Red text-[#fff]" : "bg-[#e9e9e9]"
                } text-xl font-bold py-[15px] px-[25px] border-none cursor-pointer transition-colors duration-300 hover:bg-Red hover:text-[#fff]`}
                onClick={() => setCar("passat")}
              >
                VW Passat CC
              </button>
            </article>
            <article className="flex flex-col justify-center items-center gap-12 md:flex-row md:justify-between md:items-start md:gap-5 xl:gap-32">
              <div className="relative md:w-[600px]">
                <img
                  src={`./images/cars-big/${carDetails.img}.jpg`}
                  alt="car-img"
                  className="w-full mt-14"
                />
              </div>
              <div className="w-64">
                <div className="bg-Red text-[#fff] w-full flex items-center gap-3 text-lg py-2 px-5 whitespace-nowrap">
                  <span className="text-3xl font-bold">
                    ${carDetails.price}
                  </span>{" "}
                  / rent per day
                </div>
                <div className="grid grid-cols-1">
                  <div className="grid grid-cols-2 py-[9px] px-[5px] text-center border-2 border-solid border-[#706f7b] border-t-0">
                    <span className="border-r-2 border-solid border-[#706f7b]">
                      Model
                    </span>
                    <span>{carDetails.model}</span>
                  </div>
                  <div className="grid grid-cols-2 py-[9px] px-[5px] text-center border-2 border-solid border-[#706f7b] border-t-0">
                    <span className="border-r-2 border-solid border-[#706f7b]">
                      Mark
                    </span>
                    <span>{carDetails.mark}</span>
                  </div>
                  <div className="grid grid-cols-2 py-[9px] px-[5px] text-center border-2 border-solid border-[#706f7b] border-t-0">
                    <span className="border-r-2 border-solid border-[#706f7b]">
                      Year
                    </span>
                    <span>{carDetails.year}</span>
                  </div>
                  <div className="grid grid-cols-2 py-[9px] px-[5px] text-center border-2 border-solid border-[#706f7b] border-t-0">
                    <span className="border-r-2 border-solid border-[#706f7b]">
                      Doors
                    </span>
                    <span>4/5</span>
                  </div>
                  <div className="grid grid-cols-2 py-[9px] px-[5px] text-center border-2 border-solid border-[#706f7b] border-t-0">
                    <span className="border-r-2 border-solid border-[#706f7b]">
                      AC
                    </span>
                    <span>Yes</span>
                  </div>
                  <div className="grid grid-cols-2 py-[9px] px-[5px] text-center border-2 border-solid border-[#706f7b] border-t-0">
                    <span className="border-r-2 border-solid border-[#706f7b]">
                      Transmission
                    </span>
                    <span>{carDetails.transmission}</span>
                  </div>
                  <div className="grid grid-cols-2 py-[9px] px-[5px] text-center border-2 border-solid border-[#706f7b] border-t-0">
                    <span className="border-r-2 border-solid border-[#706f7b]">
                      Fuel
                    </span>
                    <span>{carDetails.fuel}</span>
                  </div>
                </div>
                <a
                  href="#booking"
                  className="bg-Red text-[#fff] text-xl font-bold flex justify-center w-full p-3 uppercase shadow-md mt-4 transition-colors duration-300 hover:bg-[#e9381d]"
                >
                  reserve now
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pick;