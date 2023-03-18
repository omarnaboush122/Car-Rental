const Pick = () => {
  return (
    <section className="py-24">
      <div className="max-w-[1480px] mx-auto px-8">
        <div className="flex flex-col">
          <div className="text-Black max-w-lg mx-auto text-center mb-12">
            <h3 className="text-2xl font-Rubik font-medium">Vehicle Models</h3>
            <h2 className="text-5xl font-Rubik font-bold my-3">
              Our rental fleet
            </h2>
            <p className="text-[#706f7b] font-Rubik">
              Choose from a variety of our amazing vehicles to rent for your
              next adventure or business trip
            </p>
          </div>
          <div className="flex flex-col justify-between gap-12">
            <article className="flex flex-col gap-2">
              <button className="bg-[#e9e9e9] text-xl font-bold py-3 px-6 border-none cursor-pointer transition-colors duration-300 hover:bg-Red hover:text-[#fff]">
                Audi A1 S-Line
              </button>
              <button className="bg-[#e9e9e9] text-xl font-bold py-3 px-6 border-none cursor-pointer transition-colors duration-300 hover:bg-Red hover:text-[#fff]">
                VW Golf 6
              </button>
              <button className="bg-[#e9e9e9] text-xl font-bold py-3 px-6 border-none cursor-pointer transition-colors duration-300 hover:bg-Red hover:text-[#fff]">
                Toyota Camry
              </button>
              <button className="bg-[#e9e9e9] text-xl font-bold py-3 px-6 border-none cursor-pointer transition-colors duration-300 hover:bg-Red hover:text-[#fff]">
                BMW 320 ModernLine
              </button>
              <button className="bg-[#e9e9e9] text-xl font-bold py-3 px-6 border-none cursor-pointer transition-colors duration-300 hover:bg-Red hover:text-[#fff]">
                Mercedes-Benz GLK
              </button>
              <button className="bg-[#e9e9e9] text-xl font-bold py-3 px-6 border-none cursor-pointer transition-colors duration-300 hover:bg-Red hover:text-[#fff]">
                VW Passat CC
              </button>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pick;
