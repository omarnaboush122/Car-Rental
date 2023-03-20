import { Link } from "react-router-dom";

const Intro = ({ title }) => {
  return (
    <section className="intro relative h-[410px]">
      <div className="bg-[hsla(0,0%,100%,.92)] absolute w-full h-full right-0 top-0"></div>
      <div className="max-w-[1480px] mx-auto px-8">
        <div className="flex flex-col justify-center relative w-full h-[410px] text-Black z-10">
          <h3 className="text-4xl font-bold mb-2">{title}</h3>
          <p className="text-lg font-medium">
            <Link
              to="/"
              className="text-Black transition-colors duration-300 hover:text-Red"
            >
              Home{" "}
            </Link>
            /{title}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
