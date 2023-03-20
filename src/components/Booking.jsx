import { useState } from "react";
import BookingReservation from "./BookingReservation";

const Booking = () => {
  const [input, setInput] = useState({
    carType: "",
    pickUpLocation: "",
    dropOfLocation: "",
    pickUpDate: "",
    dropOfDate: "",
  });

  const [isAllFieldsCorrect, setIsAllFieldsCorrect] = useState(false);
  const [isAllFieldsWrong, setIsAllFieldsWrong] = useState(false);
  const [isReservationSuccess, setIsReservationSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      input.carType &&
      input.pickUpLocation &&
      input.dropOfLocation &&
      input.pickUpDate &&
      input.dropOfDate
    ) {
      setIsAllFieldsCorrect(true);
      setIsAllFieldsWrong(false);
    } else {
      setIsAllFieldsCorrect(false);
      setIsAllFieldsWrong(true);
    }
  };

  return (
    <>
      <section id="booking" className="booking-section relative">
        {isAllFieldsCorrect && (
          <div className="bg-[rgba(0,0,0,.3)] w-full h-full fixed top-0 right-0 z-[99]"></div>
        )}
        <div className="max-w-[1480px] mx-auto px-8">
          <div className="mx-auto mb-24">
            <article className="book-car relative flex flex-col bg-[#fff] text-Black w-full py-10 px-6 h-auto rounded-md shadow-lg z-10 sm:p-12">
              <h2 className=" text-3xl font-bold mb-7">Book a Car</h2>
              {isAllFieldsWrong && (
                <div className="flex items-center justify-between bg-[#f8d7da] text-[#721c24] font-bold -mt-3 mb-5 p-4 rounded-lg border-none">
                  All fields required!
                  <i
                    className="fa-solid fa-xmark cursor-pointer"
                    onClick={() => setIsAllFieldsWrong(false)}
                  ></i>
                </div>
              )}

              {isReservationSuccess && (
                <div className="flex items-center justify-between bg-[#c3fabe] text-[#2a6817] font-bold -mt-3 mb-5 p-4 rounded-lg border-none">
                  Check your email to confirm an order.
                  <i
                    className="fa-solid fa-xmark cursor-pointer"
                    onClick={() => setIsReservationSuccess(false)}
                  ></i>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
              >
                <div className="flex flex-col">
                  <label htmlFor="type" className="font-bold mb-3">
                    <i className="fa-solid fa-car text-Red"></i>
                    &nbsp; Select Your Car Type &nbsp;
                    <b className="text-Red">*</b>
                  </label>
                  <select
                    id="type"
                    className="text-[#ababab] p-3 rounded font-Rubik border border-solid border-[#ccd7e6] outline-none"
                    name="carType"
                    value={input.carType}
                    onChange={handleChange}
                  >
                    <option>Select Your car Type</option>
                    <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                    <option value="VW Golf 6">VW Golf 6</option>
                    <option value="Toyota Camry">Toyota Camry</option>
                    <option value="BMW 320 ModernLine">
                      BMW 320 ModernLine
                    </option>
                    <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                    <option value="VW Passat CC">VW Passat CC</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="pick-location" className="font-bold mb-3">
                    <i className="fa-solid fa-location-dot text-Red"></i>
                    &nbsp; Pick-up &nbsp;
                    <b className="text-Red">*</b>
                  </label>
                  <select
                    id="pickUpLocation"
                    className="text-[#ababab] p-3 rounded font-Rubik border border-solid border-[#ccd7e6] outline-none"
                    name="pickUpLocation"
                    value={input.pickUpLocation}
                    onChange={handleChange}
                  >
                    <option>Select pick up location</option>
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
                    &nbsp; Drop-of &nbsp;
                    <b className="text-Red">*</b>
                  </label>
                  <select
                    id="drop-location"
                    className="text-[#ababab] p-3 rounded font-Rubik border border-solid border-[#ccd7e6] outline-none"
                    name="dropOfLocation"
                    value={input.dropOfLocation}
                    onChange={handleChange}
                  >
                    <option>Select drop off location</option>
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
                    &nbsp; Pick-up &nbsp;
                    <b className="text-Red">*</b>
                  </label>
                  <input
                    type="date"
                    id="pick-date"
                    className="text-[#878585] p-3 border border-solid border-[#ccd7e6] outline-none"
                    name="pickUpDate"
                    value={input.pickUpDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="drop-date" className="font-bold mb-3">
                    <i className="fa-regular fa-calendar-days text-Red"></i>
                    &nbsp; Drop-of &nbsp;
                    <b className="text-Red">*</b>
                  </label>
                  <input
                    type="date"
                    id="drop-date"
                    className="text-[#878585] p-3 border border-solid border-[#ccd7e6] outline-none"
                    name="dropOfDate"
                    value={input.dropOfDate}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-Red text-[#fff] h-fit self-end p-3 rounded font-Rubik text-lg font-medium shadow-md border-none transition-shadow duration-300 hover:shadow-lg "
                >
                  Search
                </button>
              </form>
            </article>
          </div>
        </div>
      </section>
      {isAllFieldsCorrect && (
        <BookingReservation
          setIsReservationSuccess={setIsReservationSuccess}
          setIsAllFieldsCorrect={setIsAllFieldsCorrect}
          input={input}
          setInput={setInput}
        />
      )}
    </>
  );
};

export default Booking;
