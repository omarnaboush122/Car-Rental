const Plan = () => {
  return (
    <section className="bg-[#fff] py-14">
      <div className="max-w-[1480px] mx-auto px-8">
        <div className="flex flex-col">
          <div className="text-Black mx-auto text-center">
            <h3 className="font-Rubik text-2xl font-medium">
              Plan your trip now
            </h3>
            <h2 className="font-Rubik text-5xl font-bold mt-4 mb-8">
              Quick & easy car rental
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 px-8 mt-9 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-3 text-center">
              <img
                src="./images/plan/icon1.png"
                alt="icon-img"
                className="w-44 mx-auto h-auto"
              />
              <h3 className="text-2xl font-bold mb-3">Select Car</h3>
              <p className="text-[#706f7b] font-Rubik max-w-xs mx-auto">
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs
              </p>
            </div>
            <div className="p-3 text-center">
              <img
                src="./images/plan/icon2.png"
                alt="icon-img"
                className="w-44 mx-auto h-auto"
              />
              <h3 className="text-2xl font-bold mb-3">Contact Operator</h3>
              <p className="text-[#706f7b] font-Rubik max-w-xs mx-auto">
                Our knowledgeable and friendly operators are always ready to
                help with any questions or concerns
              </p>
            </div>
            <div className="p-3 text-center">
              <img
                src="./images/plan/icon3.png"
                alt="icon-img"
                className="w-44 mx-auto h-auto"
              />
              <h3 className="text-2xl font-bold mb-3">Let's Drive</h3>
              <p className="text-[#706f7b] font-Rubik max-w-xs mx-auto">
                Whether you're hitting the open road, we've got you covered with
                our wide range of cars
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
