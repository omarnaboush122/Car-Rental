const ChooseUs = () => {
  return (
    <section className="choose bg-[#fff] pt-5 pb-24">
      <div className="max-w-[1480px] mx-auto px-8">
        <div className="flex flex-col">
          <img
            src="./images/chooseUs/main.png"
            alt="cars-img"
            className="w-full h-auto mx-auto sm:w-[90%]"
          />
          <div className="flex flex-col justify-around items-center gap-14 w-full mt-8 text-center lg:flex-row">
            <article className="flex flex-col items-center text-center max-w-[500px] text-Black lg:text-left lg:items-start">
              <h3 className="text-2xl font-Rubik font-bold mb-2">
                Why Choose Us
              </h3>
              <h2 className="text-5xl font-bold mb-5">
                Best valued deals you will ever find
              </h2>
              <p className="text-[#706f7b] font-Rubik mb-8">
                Discover the best deals you'll ever find with our unbeatable
                offers. We're dedicated to providing you with the best value for
                your money, so you can enjoy top-quality services and products
                without breaking the bank. Our deals are designed to give you
                the ultimate renting experience, so don't miss out on your
                chance to save big.
              </p>
              <a
                href="#home"
                className="bg-Red text-[#fff] font-bold w-fit py-4 px-8 rounded border-2 border-solid border-Red shadow-md transition-all duration-300 hover:bg-[#fa4226] hover:shadow-lg"
              >
                Find Details &nbsp;
                <i className="fa-solid fa-angle-right"></i>
              </a>
            </article>
            <article className="flex flex-col gap-11 max-w-[440px]">
              <div className="flex flex-col items-center sm:flex-row sm:items-start">
                <img
                  src="./images/chooseUs/icon1.png"
                  alt="icon-img"
                  className="w-28 h-28 mr-3"
                />
                <div className="flex flex-col justify-center gap-3">
                  <h3 className="text-2xl font-bold">Cross Country Drive</h3>
                  <p className="text-[#706f7b] font-Rubik">
                    Take your driving experience to the next level with our
                    top-notch vehicles for your cross-country adventures.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center sm:flex-row sm:items-start">
                <img
                  src="./images/chooseUs/icon2.png"
                  alt="icon-img"
                  className="w-28 h-28 mr-3"
                />
                <div className="flex flex-col justify-center gap-3">
                  <h3 className="text-2xl font-bold">All Inclusive Pricing</h3>
                  <p className="text-[#706f7b] font-Rubik">
                    Get everything you need in one convenient, transparent price
                    with our all-inclusive pricing policy.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center sm:flex-row sm:items-start">
                <img
                  src="./images/chooseUs/icon3.png"
                  alt="icon-img"
                  className="w-28 h-28 mr-3"
                />
                <div className="flex flex-col justify-center gap-3">
                  <h3 className="text-2xl font-bold">No Hidden Charges</h3>
                  <p className="text-[#706f7b] font-Rubik">
                    Enjoy peace of mind with our no hidden charges policy. We
                    believe in transparent and honest pricing.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
