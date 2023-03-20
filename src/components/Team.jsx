const Team = () => {
  return (
    <section>
      <div className="grid grid-cols-1 gap-10 items-center text-center w-fit mx-auto py-24 px-5 md:grid-cols-2 lg:grid-cols-3">
        <article className="bg-[#fff] w-[330px] shadow-lg">
          <div>
            <img
              src="./images/team/1.png"
              alt="member-of-team"
              className="bg-[#f6f6f6] w-full h-auto"
            />
          </div>
          <div className="text-Black p-8">
            <h3 className="text-2xl font-bold">Luke Miller</h3>
            <p className="text-[#777] text-lg font-medium">Salesman</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Team;
