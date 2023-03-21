

const Member = ({img,name,job}) => {
  return (
    <article className="bg-[#fff] w-[330px] shadow-lg">
          <div>
            <img
              src={img}
              alt="member-of-team"
              className="bg-[#f6f6f6] w-full h-auto"
            />
          </div>
          <div className="text-Black p-8">
            <h3 className="text-2xl font-bold">{name}</h3>
            <p className="text-[#777] text-lg font-medium">{job}</p>
          </div>
        </article>
  );
}

export default Member;
