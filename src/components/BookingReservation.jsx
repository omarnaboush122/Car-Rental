

const BookingReservation = () => {
  return (
    <div className="bg-[#fff] text-Black w-full flex flex-col h-screen fixed top-[50%] left-[50%] pr-[2px] border-2 border-solid border-[#fff] overflow-x-hidden overflow-y-scroll -translate-x-[50%] -translate-y-[50%] z-[999]">
      <div className="bg-Red text-[#fff] text-2xl font-bold flex justify-between items-center py-3 px-4">
        <h2 className="uppercase">complete reservation</h2>
        <i className="fa-solid fa-xmark cursor-pointer"></i>
      </div>
      <div className="bg-[#ffeae6] flex flex-col gap-4 py-5 px-8">
        <h3 className="text-Red text-xl font-bold">
          <i className="fa-solid fa-circle-info text-2xl"></i> &nbsp;
          Upon completing this reservation enquiry, you will receive:
          </h3>
          <p className="text-[#777] text-lg font-medium">
          Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.
          </p>
      </div>
    </div>
  );
}

export default BookingReservation;
