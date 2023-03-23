const SinglePlan = ({ icon, title, description }) => {
  return (
    <article className="p-3 text-center">
      <img src={icon} alt="icon-img" className="w-44 mx-auto h-auto" />
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-[#706f7b] font-Rubik max-w-xs mx-auto">
        {description}
      </p>
    </article>
  );
};

export default SinglePlan;
