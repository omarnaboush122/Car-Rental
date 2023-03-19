import { useState } from "react";
import questions from "../data/QuestionsData";

const Faq = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  const handleQuestionClick = (index) => {
    setActiveQuestionIndex(index === activeQuestionIndex ? null : index);
  };

  return (
    <section className="faq py-24">
      <div className="max-w-[1480px] mx-auto px-8">
        <div className="flex flex-col text-Black">
          <div className="flex flex-col max-w-[800px] mx-auto text-center">
            <h3 className="text-2xl font-bold">FAQ</h3>
            <h2 className="text-5xl font-bold my-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#706f7b] text-lg">
              Frequently Asked Questions About the Car Rental Booking Process on
              Our Website: Answers to Common Concerns and Inquiries.
            </p>
          </div>
          <div className="flex flex-col items-center mt-[70px]">
            {questions.map((question, i) => (
              <article
                key={i}
                className="w-full shadow-md cursor-pointer transition-all duration-200 md:w-[800px]"
                onClick={() => handleQuestionClick(i)}
              >
                <div
                  className={`${
                    activeQuestionIndex === i
                      ? "bg-Red text-[#fff]"
                      : "bg-[#fff] text-Black"
                  } flex justify-between items-center py-6 px-11 shadow-md`}
                >
                  <p className="text-lg font-medium">{question.title}</p>
                  <i className="fa-solid fa-angle-down text-xl"></i>
                </div>

                {activeQuestionIndex === i && (
                  <p
                    className={`${
                      activeQuestionIndex === i
                        ? "max-h-[550px] sm:max-h-[250px]"
                        : "max-h-0"
                    } text-[#706f7b] bg-[#fff] text-lg font-Rubik py-7 px-11 transition-all duration-300 ease-in-out`}
                  >
                    {question.content}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
