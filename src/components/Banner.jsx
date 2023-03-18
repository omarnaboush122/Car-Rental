const Banner = () => {
  return (
    <section className="bg-[#2d2d2d] flex w-full h-auto text-center my-20 py-16">
      <div className="max-w-[1480px] mx-auto px-8">
        <div className="text-[#fff] flex items-center justify-between w-full">
          <article className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">
              Save big with our cheap car rental!
            </h2>
            <p className="text-xl md:text-2xl">
              Top Airports. Local Suppliers.
              <span className="text-Red font-medium"> 24/7 </span>
              Support
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Banner;
