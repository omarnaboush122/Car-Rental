const Footer = () => {
  return (
    <footer className="bg-[#fff] py-24">
      <div className="max-w-[1480px] mx-auto px-8">
        <div className="grid grid-cols-1 text-Black justify-center gap-20 sm:grid-cols-2 lg:grid-cols-4">
          <ul className="text-center sm:text-left">
            <li className="text-2xl mb-4">
              <span className="font-bold uppercase">car </span>
              Rental
            </li>
            <li className="text-[#706f7b] mb-8">
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </li>
            <li className="font-Rubik font-medium mb-3">
              <a
                href="tel:123456789"
                className="text-Black transition-colors duration-300 hover:text-Red"
              >
                <i className="fa-solid fa-phone"></i> &nbsp; (123) -456-789
              </a>
            </li>
            <li className="font-Rubik font-medium mb-3">
              <a
                href="mailto: carrental@gmail.com"
                className="text-Black transition-colors duration-300 hover:text-Red"
              >
                <i className="fa-solid fa-envelope"></i>
                &nbsp; carrental@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://xpeedstudio.com/"
                target="_blank"
                className="text-Black transition-colors duration-300 hover:text-Red"
              >
                Design by XpeedStudio
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-3 text-center sm:text-left">
            <li className="text-2xl font-bold uppercase">Company</li>
            <li>
              <a
                href="#home"
                className="text-Black transition-colors duration-300 hover:text-Red"
              >
                New York
              </a>
            </li>
            <li>
              <a
                href="#home"
                className="text-Black transition-colors duration-300 hover:text-Red"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#home"
                className="text-Black transition-colors duration-300 hover:text-Red"
              >
                Mobile
              </a>
            </li>
            <li>
              <a
                href="#home"
                className="text-Black transition-colors duration-300 hover:text-Red"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#home"
                className="text-Black transition-colors duration-300 hover:text-Red"
              >
                How we work
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-3 text-center sm:text-left">
            <li className="text-2xl font-bold uppercase">working hours</li>
            <li>Mon - Fri: 9:00AM - 9:00PM</li>
            <li>Sat: 9:00AM - 19:00PM</li>
            <li>Sun: Closed</li>
          </ul>
          <ul className="flex flex-col gap-3 text-center sm:text-left">
            <li className="text-2xl font-bold uppercase">Subscription</li>
            <li>Subscribe your Email address for latest news & updates.</li>
            <li>
              <input
                type="email"
                placeholder="Enter Email Address"
                className="bg-[#ececec] w-full py-3 px-14 font-Rubik rounded border-none outline-none"
              />
            </li>
            <li>
              <button className="bg-Red text-[#fff] w-full py-3 px-6 text-lg font-bold border-2 border-solid border-Red rounded cursor-pointer shadow-md transition-all duration-300 hover:bg-[#fa4226] hover:shadow-lg">
                Submit
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
