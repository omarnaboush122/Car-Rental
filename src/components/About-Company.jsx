const AboutCompany = () => {
  return (
    <section>
      <div className="max-w-[1480px] mx-auto px-8">
        <div className="grid grid-cols-1 max-w-full text-center gap-12 my-24 mx-auto sm:max-w-[500px] xl:max-w-[70%] xl:flex xl:items-center xl:text-left">
          <img
            src="./images/about/about-main.jpg"
            alt="main-img"
            className="w-full h-auto sm:w-[430px] sm:h-[430px]"
          />
          <article className="flex flex-col text-Black">
            <h3 className="font-Rubik text-2xl font-medium mb-3">
              About Company
            </h3>
            <h2 className="text-5xl font-bold">
              You start the engine and your adventure begins
            </h2>
            <p className="text-[#706f7b] font-Rubik mt-5 mb-10">
              Certain but she but shyness why cottage. Guy the put instrument
              sir entreaties affronting. Pretended exquisite see cordially the
              you. Weeks quiet do vexed or whose. Motionless if no to affronting
              imprudence no precaution. My indulged as disposal strongly
              attended.
            </p>
            <div className="grid grid-cols-1 mx-auto sm:grid-cols-3 sm:mx-0 sm:gap-8">
              <div className="flex flex-col items-center gap-2 sm:items-start sm:gap-0">
                <img
                  src="./images/about/icon1.png"
                  alt="car-icon"
                  className="w-[70px]"
                />
                <span className="flex flex-col items-center text-center gap-3 sm:flex-row sm:text-left">
                  <h3 className="text-5xl font-bold">20</h3>
                  <p className="text-[#706f7b] text-lg font-Rubik mb-10 sm:mt-7 sm:text-xl">
                    Car Types
                  </p>
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 sm:items-start sm:gap-0">
                <img
                  src="./images/about/icon2.png"
                  alt="car-icon"
                  className="w-[70px]"
                />
                <span className="flex flex-col items-center text-center gap-3 sm:flex-row sm:text-left">
                  <h3 className="text-5xl font-bold">85</h3>
                  <p className="text-[#706f7b] text-lg font-Rubik mb-10 sm:mt-7">
                    Rental Outlets
                  </p>
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 sm:items-start sm:gap-0">
                <img
                  src="./images/about/icon3.png"
                  alt="car-icon"
                  className="w-[50px]"
                />
                <span className="flex flex-col items-center text-center gap-3 sm:flex-row sm:text-left">
                  <h3 className="text-5xl font-bold">75</h3>
                  <p className="text-[#706f7b] text-lg font-Rubik mb-10 sm:mt-7">
                    Repair Shop
                  </p>
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
