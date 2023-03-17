const Booking = () => {
  return (
    <section className="booking-section relative">
      <div className="max-w-[1330px] mx-auto px-8">
        <div className="mx-auto mb-24">
          <article className="book-car relative flex flex-col bg-[#fff] text-Black w-full h-auto py-10 px-6 rounded-md shadow-md z-10">
            <h2 className=" text-3xl font-bold mb-7">Book a Car</h2>
            <form className="grid grid-cols-1 gap-5">
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
                  <option selected>Select Your car Type</option>
                  <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                  <option value="VW Golf 6">VW Golf 6</option>
                  <option value="Toyota Camry">Toyota Camry</option>
                  <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
                  <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                  <option value="VW Passat CC">VW Passat CC</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="pick-location" className="font-bold mb-3">
                  <i className="fa-solid fa-location-dot text-Red"></i>
                  &nbsp; Pick-up
                  <b className="text-Red">*</b>
                </label>
                <select
                  name="pick-location"
                  id="pick-location"
                  className="text-[#ababab] p-3 rounded font-Rubik border border-solid border-[#ccd7e6] outline-none"
                >
                  <option selected>Select pick up location</option>
                  <option>Belgrade</option>
                  <option>Novi Sad</option>
                  <option>Nis</option>
                  <option>Kragujevac</option>
                  <option>Subotica</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="drop-location" className="font-bold mb-3">
                  <i className="fa-solid fa-location-dot text-Red"></i>
                  &nbsp; Drop-of
                  <b className="text-Red">*</b>
                </label>
                <select
                  name="drop-location"
                  id="drop-location"
                  className="text-[#ababab] p-3 rounded font-Rubik border border-solid border-[#ccd7e6] outline-none"
                >
                  <option selected>Select drop off location</option>
                  <option>Belgrade</option>
                  <option>Novi Sad</option>
                  <option>Nis</option>
                  <option>Kragujevac</option>
                  <option>Subotica</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="pick-date" className="font-bold mb-3">
                  <i className="fa-regular fa-calendar-days text-Red"></i>
                  &nbsp; Pick-up
                  <b className="text-Red">*</b>
                </label>
                <input
                  type="date"
                  name="pick-date"
                  id="pick-date"
                  className="text-[#878585] p-3 border border-solid border-[#ccd7e6] outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="drop-date" className="font-bold mb-3">
                  <i className="fa-regular fa-calendar-days text-Red"></i>
                  &nbsp; Drop-of
                  <b className="text-Red">*</b>
                </label>
                <input
                  type="date"
                  name="drop-date"
                  id="drop-date"
                  className="text-[#878585] p-3 border border-solid border-[#ccd7e6] outline-none"
                />
              </div>
            </form>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Booking;