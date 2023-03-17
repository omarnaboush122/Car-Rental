const Booking = () => {
  return (
    <section className="booking-section relative">
      <div className="max-w-[1330px] mx-auto px-8">
        <div className="mx-auto mb-24">
          <article className="book-car relative flex flex-col bg-[#fff] text-Black w-full h-auto py-10 px-6 rounded-md shadow-md z-10">
            <h2 className=" text-3xl font-bold mb-7">Book a Car</h2>
            <form className="grid">
              <div className="flex flex-col">
                <label htmlFor="type" className="font-bold mb-3">
                  <i className="fa-solid fa-car text-Red"></i>
                  &nbsp; Select Your Car Type
                  <b className="text-Red">*</b>
                </label>
                <select
                  name="type"
                  id="type"
                  className="text-[#ababab] p-3 rounded font-Rubik border border-solid border-[#ccd7e6] outline-none"
                >
                  <option selected>Select Your Car Type</option>
                  <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                  <option value="VW Golf 6">VW Golf 6</option>
                  <option value="Toyota Camry">Toyota Camry</option>
                  <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
                  <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                  <option value="VW Passat CC">VW Passat CC</option>
                </select>
              </div>
            </form>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Booking;
