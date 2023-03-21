

const SingleFeature = ({ imageSrc, title, description }) => {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:items-start">
      <img src={imageSrc} alt="icon-img" className="w-28 h-28 mr-3" />
      <div className="flex flex-col justify-center gap-3">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-[#706f7b] font-Rubik">{description}</p>
      </div>
    </div>
  );
};

export default SingleFeature;
