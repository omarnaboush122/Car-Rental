const BookBanner = () => {
  return (
    <section className="book flex h-52 mt-20 relative w-full">
      <div className="bg-[#2d2d2d] w-full h-full absolute top-0 right-0 opacity-90"></div>
      <div className="max-w-[1480px] mx-auto px-8">
        <article className="flex flex-col justify-center items-center gap-3 text-center text-[#fff] w-full h-56 relative z-10 md:flex-row md:gap-12">
          <h2 className="text-3xl font-bold lg:text-4xl">
            Book a car by getting in touch with us
          </h2>
          <span className="flex items-center gap-3 text-Red text-2xl font-bold lg:text-3xl">
            <i className="fa-solid fa-phone"></i>
            <h3>(123) 456-7869</h3>
          </span>
        </article>
      </div>
    </section>
  );
};

export default BookBanner;
