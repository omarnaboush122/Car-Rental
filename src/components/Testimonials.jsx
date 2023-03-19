const Testimonials = () => {
  return (
    <section className="bg-[#f8f8f8] text-Black py-24">
      <div className="max-w-[1480px] mx-auto px-8">
        <div className="flex flex-col">
          <div className=" max-w-3xl mx-auto mb-12 text-center">
            <h3 className="text-2xl font-Rubik font-medium mb-2">
              Reviewed by People
            </h3>
            <h2 className="text-5xl font-bold mb-4">Client's Testimonials</h2>
            <p className="text-[#706f7b] text-lg font-Rubik">
              Discover the positive impact we've made on the our clients by
              reading through their testimonials. Our clients have experienced
              our service and results, and they're eager to share their positive
              experiences with you.
            </p>
          </div>
          <div className="flex flex-col gap-8 w-full md:flex-row lg:p-8">
            <article className="bg-[#fff] relative w-fit py-12 px-8 shadow-lg lg:p-14">
              <p className="text-xl sm:text-2xl font-medium">
                "We rented a car from this website and had an amazing
                experience! The booking was easy and the rental rates were
                affordable."
              </p>
              <div className="flex">
                <div className="flex items-center gap-5 mt-8">
                  <img
                    src="./images/testimonials/pfp1.jpg"
                    alt="user-img"
                    className="w-20 h-20 rounded-full"
                  />
                  <span>
                    <h4 className="text-lg font-bold">Parry Hotter</h4>
                    <p className="font-Rubik">Beirut</p>
                  </span>
                </div>
              </div>
              <span className="hidden sm:block absolute bottom-14 right-14 text-Red text-6xl">
                <i className="fa-solid fa-quote-right"></i>
              </span>
            </article>
            <article className="bg-[#fff] relative w-fit py-12 px-8 shadow-lg lg:p-14">
              <p className="text-xl sm:text-2xl font-medium">
              "The car was in great condition and made our trip even better. Highly recommend for this car rental website!"
              </p>
              <div className="flex">
                <div className="flex items-center gap-5 mt-8">
                  <img
                    src="./images/testimonials/pfp2.jpg"
                    alt="user-img"
                    className="w-20 h-20 rounded-full"
                  />
                  <span>
                    <h4 className="text-lg font-bold">Ron Rizzly</h4>
                    <p className="font-Rubik">Tripoli</p>
                  </span>
                </div>
              </div>
              <span className="hidden sm:block absolute bottom-14 right-14 text-Red text-6xl">
                <i className="fa-solid fa-quote-right"></i>
              </span>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
