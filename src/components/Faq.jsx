import { useState } from "react";
import questions from "../data/QuestionsData";
const Faq = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

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
                className="bg-[#fff] text-Black w-full shadow-md cursor-pointer transition-all duration-200 md:w-[800px]"
              >
                <div className="flex justify-between items-center py-6 px-11 shadow-md">
                  <p className="text-lg font-medium">{question.title}</p>
                  <i className="fa-solid fa-angle-down text-xl"></i>
                </div>
                <p className="text-[#706f7b] text-lg font-Rubik max-h-52 py-7 px-11 overflow-hidden">
                  {question.content}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
