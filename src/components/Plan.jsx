import data from "../../data.json";
import SinglePlan from "./SinglePlan";

const Plan = () => {
  const allPlans = data.items.map((item, i) => (
    <SinglePlan key={i} {...item} />
  ));

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
            {allPlans}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
