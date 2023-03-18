import data from "../../data.json";

const Plan = () => {
  return (
    <section className="bg-[#fff] py-14">
      <div className="max-w-[1480px] mx-auto px-8">
        <div className="flex flex-col">
          <div className="text-Black mx-auto text-center">
            <h3 className="font-Rubik text-2xl font-medium">{data.title}</h3>
            <h2 className="font-Rubik text-5xl font-bold mt-4 mb-8">
              {data.subtitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 px-8 mt-9 md:grid-cols-2 lg:grid-cols-3">
            {data.items.map((item, i) => (
              <article key={i} className="p-3 text-center">
                <img
                  src={item.icon}
                  alt="icon-img"
                  className="w-44 mx-auto h-auto"
                />
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-[#706f7b] font-Rubik max-w-xs mx-auto">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
