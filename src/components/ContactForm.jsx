import { Link } from "react-router-dom";

const ContactForm = () => {
  return (
    <section>
      <div className="max-w-[1480px] mx-auto px-8">
        <div className="contact grid grid-cols-1 gap-8 mx-auto py-24 px-5 text-Black text-center">
          <article className="flex flex-col gap-3 w-[410px] mx-auto mb-5">
            <h2 className="text-5xl mb-5">Need additional information?</h2>
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
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
