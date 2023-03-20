import { Link } from "react-router-dom";

const VehicleModels = () => {
  return (
    <section>
      <div className="max-w-[1480px] mx-auto px-8">
        <div className="grid grid-cols-1 gap-8 w-fit items-center text-center mx-auto py-24 md:grid-cols-2 lg:grid-cols-3">
          <article className="flex flex-col w-full border border-solid border-[#d5d5d5] rounded sm:w-[350px]">
            <div className="w-full h-auto rounded">
              <img
                src="./images/cars-big/audi-box.png"
                alt="audi-img"
                className="w-full h-[270px]"
              />
              <div className="flex flex-col py-5 px-6 text-Black">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-1 items-start">
                    <h3 className="text-2xl font-bold">Audi A1</h3>
                    <span className="flex gap-1">
                      <i className="fa-solid fa-star text-[#ffc933]"></i>
                      <i className="fa-solid fa-star text-[#ffc933]"></i>
                      <i className="fa-solid fa-star text-[#ffc933]"></i>
                      <i className="fa-solid fa-star text-[#ffc933]"></i>
                      <i className="fa-solid fa-star text-[#ffc933]"></i>
                    </span>
                  </div>
                  <div className="flex flex-col text-right">
                    <h3 className="text-3xl font-bold">$45</h3>
                    <p>per day</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-20 gap-y-5 my-5 pb-6 border-b border-solid border-[#c6c6c6]">
                  <span className="text-[#777] text-lg font-medium text-left">
                    <i className="fa-solid fa-car-side text-Black"></i>
                    &nbsp; Audi
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
          <article className="flex flex-col w-full border border-solid border-[#d5d5d5] rounded sm:w-[350px]">
            <div className="w-full h-auto rounded">
              <img
                src="./images/cars-big/golf6-box.png"
                alt="golf-img"
                className="w-full h-[270px]"
              />
              <div className="flex flex-col py-5 px-6 text-Black">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-1 items-start">
                    <h3 className="text-2xl font-bold">Golf 6</h3>
                    <span className="flex gap-1">
                      <i className="fa-solid fa-star text-[#ffc933]"></i>
                      <i className="fa-solid fa-star text-[#ffc933]"></i>
                      <i className="fa-solid fa-star text-[#ffc933]"></i>
                      <i className="fa-solid fa-star text-[#ffc933]"></i>
                      <i className="fa-solid fa-star text-[#ffc933]"></i>
                    </span>
                  </div>
                  <div className="flex flex-col text-right">
                    <h3 className="text-3xl font-bold">$37</h3>
                    <p>per day</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-20 gap-y-5 my-5 pb-6 border-b border-solid border-[#c6c6c6]">
                  <span className="text-[#777] text-lg font-medium text-left">
                    <i className="fa-solid fa-car-side text-Black"></i>
                    &nbsp; VW
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
          <article className="flex flex-col w-full border border-solid border-[#d5d5d5] rounded sm:w-[350px]">
            <div className="w-full h-auto rounded">
              <img
                src="./images/cars-big/toyota-box.png"
                alt="toyota-img"
                className="w-full h-[270px]"
              />
              <div className="flex flex-col py-5 px-6 text-Black">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-1 items-start">
                    <h3 className="text-2xl font-bold">Toyota</h3>
                    <span className="flex gap-1">
                      <i className="fa-solid fa-star text-[#ffc933]"></i>
                      <i className="fa-solid fa-star text-[#ffc933]"></i>
                      <i className="fa-solid fa-star text-[#ffc933]"></i>
                      <i className="fa-solid fa-star text-[#ffc933]"></i>
                      <i className="fa-solid fa-star text-[#ffc933]"></i>
                    </span>
                  </div>
                  <div className="flex flex-col text-right">
                    <h3 className="text-3xl font-bold">$30</h3>
                    <p>per day</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-20 gap-y-5 my-5 pb-6 border-b border-solid border-[#c6c6c6]">
                  <span className="text-[#777] text-lg font-medium text-left">
                    <i className="fa-solid fa-car-side text-Black"></i>
                    &nbsp; Camry
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
          <article className="flex flex-col w-full border border-solid border-[#d5d5d5] rounded sm:w-[350px]">
            <div className="w-full h-auto rounded">
              <img
                src="./images/cars-big/bmw-box.png"
                alt="bmw-img"
                className="w-full h-[270px]"
              />
              <div className="flex flex-col py-5 px-6 text-Black">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-1 items-start">
                    <h3 className="text-2xl font-bold">BMW 320</h3>
                    <span className="flex gap-1">
                      <i className="fa-solid fa-star text-[#ffc933]"></i>
                      <i className="fa-solid fa-star text-[#ffc933]"></i>
                      <i className="fa-solid fa-star text-[#ffc933]"></i>
                      <i className="fa-solid fa-star text-[#ffc933]"></i>
                      <i className="fa-solid fa-star text-[#ffc933]"></i>
                    </span>
                  </div>
                  <div className="flex flex-col text-right">
                    <h3 className="text-3xl font-bold">$35</h3>
                    <p>per day</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-20 gap-y-5 my-5 pb-6 border-b border-solid border-[#c6c6c6]">
                  <span className="text-[#777] text-lg font-medium text-left">
                    <i className="fa-solid fa-car-side text-Black"></i>
                    &nbsp; Modern
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
          <article className="flex flex-col w-full border border-solid border-[#d5d5d5] rounded sm:w-[350px]">
            <div className="w-full h-auto rounded">
              <img
                src="./images/cars-big/benz-box.png"
                alt="mercedes-img"
                className="w-full h-[270px]"
              />
              <div className="flex flex-col py-5 px-6 text-Black">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-1 items-start">
                    <h3 className="text-2xl font-bold">Mercedes</h3>
                    <span className="flex gap-1">
                      <i className="fa-solid fa-star text-[#ffc933]"></i>
                      <i className="fa-solid fa-star text-[#ffc933]"></i>
                      <i className="fa-solid fa-star text-[#ffc933]"></i>
                      <i className="fa-solid fa-star text-[#ffc933]"></i>
                      <i className="fa-solid fa-star text-[#ffc933]"></i>
                    </span>
                  </div>
                  <div className="flex flex-col text-right">
                    <h3 className="text-3xl font-bold">$50</h3>
                    <p>per day</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-20 gap-y-5 my-5 pb-6 border-b border-solid border-[#c6c6c6]">
                  <span className="text-[#777] text-lg font-medium text-left">
                    <i className="fa-solid fa-car-side text-Black"></i>
                    &nbsp; Benz
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
          <article className="flex flex-col w-full border border-solid border-[#d5d5d5] rounded sm:w-[350px]">
            <div className="w-full h-auto rounded">
              <img
                src="./images/cars-big/passat-box.png"
                alt="passat-img"
                className="w-full h-[270px]"
              />
              <div className="flex flex-col py-5 px-6 text-Black">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-1 items-start">
                    <h3 className="text-2xl font-bold">VW Passat</h3>
                    <span className="flex gap-1">
                      <i className="fa-solid fa-star text-[#ffc933]"></i>
                      <i className="fa-solid fa-star text-[#ffc933]"></i>
                      <i className="fa-solid fa-star text-[#ffc933]"></i>
                      <i className="fa-solid fa-star text-[#ffc933]"></i>
                      <i className="fa-solid fa-star text-[#ffc933]"></i>
                    </span>
                  </div>
                  <div className="flex flex-col text-right">
                    <h3 className="text-3xl font-bold">$25</h3>
                    <p>per day</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-20 gap-y-5 my-5 pb-6 border-b border-solid border-[#c6c6c6]">
                  <span className="text-[#777] text-lg font-medium text-left">
                    <i className="fa-solid fa-car-side text-Black"></i>
                    &nbsp; CC
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
        </div>
      </div>
    </section>
  );
};

export default VehicleModels;
