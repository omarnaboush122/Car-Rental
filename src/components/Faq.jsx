const Faq = () => {
  return (
    <section className="faq py-24">
      <div className="max-w-[1480px] mx-auto px-8">
        <div className="flex flex-col text-Black">
          <div className="flex flex-col max-w-[800px] mx-auto text-center">
            <h3 className="text-2xl font-bold">FAQ</h3>
            <h2 className="text-5xl font-bold my-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#706f7b] text-lg">
              Frequently Asked Questions About the Car Rental Booking Process on
              Our Website: Answers to Common Concerns and Inquiries.
            </p>
          </div>
          <div className="flex flex-col items-center mt-[70px]">
            <article className="bg-[#fff] text-Black w-full shadow-md cursor-pointer transition-all duration-200 md:w-[800px]">
              <div className="flex justify-between items-center py-6 px-11 shadow-md">
                <p className="text-lg font-medium">
                  1. What is special about comparing rental car deals?
                </p>
                <i className="fa-solid fa-angle-down text-xl"></i>
              </div>
              <p className="text-[#706f7b] text-lg font-Rubik max-h-52 py-7 px-11 overflow-hidden">
              Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.
              </p>
            </article>
            <article className="bg-[#fff] text-Black w-full shadow-md cursor-pointer transition-all duration-200 md:w-[800px]">
              <div className="flex justify-between items-center py-6 px-11 shadow-md">
                <p className="text-lg font-medium">
                  2. How do I find the car rental deals?
                </p>
                <i className="fa-solid fa-angle-down text-xl"></i>
              </div>
              <p className="text-[#706f7b] text-lg font-Rubik max-h-52 py-7 px-11 overflow-hidden">
                You can find car rental deals by researching online and
                comparing prices from different rental companies. Websites such
                as Expedia, Kayak, and Travelocity allow you to compare prices
                and view available rental options. It is also recommended to
                sign up for email newsletters and follow rental car companies on
                social media to be informed of any special deals or promotions.
              </p>
            </article>
            <article className="bg-[#fff] text-Black w-full shadow-md cursor-pointer transition-all duration-200 md:w-[800px]">
              <div className="flex justify-between items-center py-6 px-11 shadow-md">
                <p className="text-lg font-medium">
                  3. How do I find such low rental car prices?
                </p>
                <i className="fa-solid fa-angle-down text-xl"></i>
              </div>
              <p className="text-[#706f7b] text-lg font-Rubik max-h-52 py-7 px-11 overflow-hidden">
              Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
