import { motion } from "framer-motion";
import Reveal from "./Reveal";

function Services() {
  const services = [
    {
      title: "Web App Development",
      desc: "We design and build fast, secure web applications tailored to your business needs — from customer platforms to internal tools.",
      icon: "💻",
    },
    {
      title: "Blockchain Services",
      desc: "We develop blockchain-based solutions including smart contracts, decentralized apps, and secure trading platforms.",
      icon: "⛓️",
    },
    {
      title: "Software Testing",
      desc: "We ensure your software runs smoothly with manual, automated, performance, and security testing services.",
      icon: "🧪",
    },
    {
      title: "Staff Consultancy",
      desc: "We provide skilled developers and tech experts to support your projects and scale your team quickly.",
      icon: "👥",
    },
  ];

  return (
    <section className="
      bg-gradient-to-b
      from-[#08142B]
      to-[#0B1C3D]
      py-28
      text-white
    " id="services">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <Reveal>
          <div className="text-center mb-20">

            <h2 className="text-4xl font-bold mb-4">
              Services We Offer
            </h2>

            <p className="text-gray-300 max-w-2xl mx-auto">
              We help businesses build, test, and scale digital products
              with the right technology and the right expertise.
            </p>

          </div>
        </Reveal>

        {/* Services Grid */}
        <div className="grid md:grid-cols-4 gap-10">

          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.04,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
              }}
              className="
                bg-white/5
                backdrop-blur-lg
                border border-white/10
                p-8
                rounded-2xl
                text-center
                hover:border-cyan-400/40
                hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
                transition
              "
            >

              {/* Icon Box */}
              <div className="
                w-16 h-16
                mx-auto mb-6
                flex items-center justify-center
                rounded-xl
                bg-gradient-to-br
                from-blue-600
                to-cyan-500
                text-2xl
                shadow-lg
              ">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.desc}
              </p>

              {/* Learn More
              <p className="
                mt-6 text-cyan-400 text-sm
                hover:underline cursor-pointer
              ">
                Learn More →
              </p> */}

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;
