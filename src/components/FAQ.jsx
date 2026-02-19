import { useState } from "react";
import { motion } from "framer-motion";

function FAQ() {
  const faqs = [
    {
      question: "What services does Technocorps offer?",
      answer:
        "We provide end-to-end IT services including custom software development, web and mobile apps, cloud solutions, blockchain, AI integrations, testing, and staff augmentation.",
    },
    {
      question: "How do I get started with a project?",
      answer:
        "Reach out through our contact page or email us. We’ll schedule a discovery call to understand your goals and propose the right solution.",
    },
    {
      question: "Do you offer dedicated developers?",
      answer:
        "Yes. You can hire dedicated developers or scale your team through our flexible staff augmentation services.",
    },
    {
      question: "What makes Technocorps different?",
      answer:
        "We combine technical expertise with a partnership approach — focusing on transparency, innovation, and long-term success.",
    },
    {
      question: "Which industries do you serve?",
      answer:
        "We work across FinTech, EdTech, HealthTech, E-commerce, Real Estate, and emerging startups.",
    },
    {
      question: "Do you work internationally?",
      answer:
        "Yes. We serve global clients including India and the USA, working seamlessly across time zones.",
    },
  ];

  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section className="
      bg-gradient-to-b
      from-[#08142B]
      to-[#0B1C3D]
      py-28
      text-white
    ">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-cyan-400 font-medium mb-3">
            FAQ
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Two Columns */}
        <div className="flex flex-col md:flex-row gap-6">

          {/* Column 1 */}
          <div className="flex flex-col gap-6 flex-1">

            {faqs.slice(0, 3).map((faq, index) => {
              const isOpen = openIndexes.includes(index);

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  className="
                    bg-white/5
                    backdrop-blur-lg
                    border border-white/10
                    rounded-xl
                    overflow-hidden
                    hover:border-cyan-400/40
                    transition
                  "
                >

                  {/* Question */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="
                      w-full text-left
                      px-6 py-5
                      flex justify-between items-center
                      font-medium
                    "
                  >
                    {faq.question}

                    <span
                      className={`
                        transform transition duration-300
                        text-cyan-400
                        ${isOpen ? "rotate-180" : ""}
                      `}
                    >
                      ⌄
                    </span>

                  </button>

                  {/* Answer */}
                  <div
                    className={`
                      px-6 text-gray-300 text-sm leading-relaxed
                      transition-all duration-500 ease-in-out overflow-hidden
                      ${isOpen
                        ? "max-h-96 pb-5 opacity-100"
                        : "max-h-0 opacity-0"}
                    `}
                  >
                    {faq.answer}
                  </div>

                </motion.div>
              );
            })}

          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6 flex-1">

            {faqs.slice(3, 6).map((faq, i) => {
              const index = i + 3;
              const isOpen = openIndexes.includes(index);

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  className="
                    bg-white/5
                    backdrop-blur-lg
                    border border-white/10
                    rounded-xl
                    overflow-hidden
                    hover:border-cyan-400/40
                    transition
                  "
                >

                  <button
                    onClick={() => toggleFAQ(index)}
                    className="
                      w-full text-left
                      px-6 py-5
                      flex justify-between items-center
                      font-medium
                    "
                  >
                    {faq.question}

                    <span
                      className={`
                        transform transition duration-300
                        text-cyan-400
                        ${isOpen ? "rotate-180" : ""}
                      `}
                    >
                      ⌄
                    </span>

                  </button>

                  <div
                    className={`
                      px-6 text-gray-300 text-sm leading-relaxed
                      transition-all duration-500 ease-in-out overflow-hidden
                      ${isOpen
                        ? "max-h-96 pb-5 opacity-100"
                        : "max-h-0 opacity-0"}
                    `}
                  >
                    {faq.answer}
                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}

export default FAQ;
