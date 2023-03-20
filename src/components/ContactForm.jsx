import { Link } from "react-router-dom";

const ContactForm = () => {
  return (
    <section>
      <div className="max-w-[1480px] mx-auto px-8">
        <div className="contact grid grid-cols-1 gap-8 mx-auto py-24 px-5 text-Black text-center lg:grid-cols-2 lg:text-left">
          <article className="flex flex-col gap-3 w-[410px] mx-auto mb-5 lg:m-0">
            <h2 className="text-5xl font-bold mb-5">Need additional information?</h2>
            <p className="text-[#706f7b] font-Rubik mb-5 md:text-lg">
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </p>
            <Link className="text-Black font-medium mb-1 transition-colors duration-300 hover:text-Red">
              <i className="fa-solid fa-phone"></i>
              &nbsp; (123) 456-7869
            </Link>
            <Link className="text-Black font-medium mb-1 transition-colors duration-300 hover:text-Red">
              <i className="fa-solid fa-envelope"></i>
              &nbsp; carrental@carmail.com
            </Link>
            <Link className="text-Black font-medium mb-1 transition-colors duration-300 hover:text-Red">
              <i className="fa-solid fa-location-dot"></i>
              &nbsp; Belgrade, Serbia
            </Link>
          </article>
          <article className="flex flex-col">
            <form className="flex flex-col">
              <label htmlFor="name" className="text-lg font-bold mb-3">
                Full Name
                <b className="text-Red">*</b>
              </label>
              <input
                type="text"
                id="name"
                placeholder="E.g: Joe Shmoe"
                className="bg-[#f2f2f2] py-4 px-8 mb-6 border-none outline-none"
              />
              <label htmlFor="email" className="text-lg font-bold mb-3">
                Email
                <b className="text-Red">*</b>
              </label>
              <input
                type="email"
                id="email"
                placeholder="youremail@example.com"
                className="bg-[#f2f2f2] py-4 px-8 mb-6 border-none outline-none"
              />
              <label htmlFor="textarea" className="text-lg font-bold mb-3">
                Email
                <b className="text-Red">*</b>
              </label>
              <textarea
                id="textarea"
                placeholder="Write Here.."
                className="bg-[#f2f2f2] h-[180px] py-4 px-8 mb-6 border-none outline-none resize-none"
              ></textarea>
              <button className="bg-Red text-[#fff] text-lg py-4 px-8 font-bold border-2 border-solid border-Red rounded cursor-pointer shadow-md transition-all duration-300 hover:bg-[#fa4226] hover:shadow-lg">
                <i className="fa-solid fa-envelope-open-text"></i>
                &nbsp; Send Message
              </button>
            </form>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
