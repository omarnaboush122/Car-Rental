const Download = () => {
  return (
    <section className="download bg-[#f8f8f8] w-full h-auto py-24">
      <div className="max-w-[1480px] mx-auto px-8">
        <article className="flex flex-col gap-5 max-w-[550px] mx-auto text-center md:m-0 md:text-left">
          <h2 className="text-Black text-4xl font-bold md:text-5xl">
            Download our app to get most out of it
          </h2>
          <p className="text-[#706f7b] font-Rubik">
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>
        </article>
        <article className="flex flex-col items-center justify-center gap-8 mt-5 md:flex-row md:justify-start">
          <img
            src="./images/download/googleapp.svg"
            alt="google-play"
            className="w-56 cursor-pointer"
          />
          <img
            src="./images/download/appstore.svg"
            alt="app-store"
            className="w-56 cursor-pointer"
          />
        </article>
      </div>
    </section>
  );
};

export default Download;
