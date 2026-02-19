import Reveal from "./Reveal";

import client1 from "../assets/clients/programmers-point.png";
import client2 from "../assets/clients/quest-glt.png";
import client3 from "../assets/clients/affimintus.png";

function Clients() {
  const clients = [
    { img: client1, name: "Programmers Point" },
    { img: client2, name: "Quest GLT" },
    { img: client3, name: "Affimintus Technologies" },
  ];

  return (
    <section className="
      bg-[#08142B]
      py-20
      text-white
    ">

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <Reveal>
          <h2 className="text-3xl font-bold mb-4">
            Trusted by Growing Businesses
          </h2>

          <p className="text-gray-300 mb-16">
            We partner with companies across industries
            to build reliable and scalable technology solutions.
          </p>
        </Reveal>

        {/* Logos */}
        <div className="
          grid md:grid-cols-3
          gap-10
          items-center
        ">

          {clients.map((client, index) => (
            <div
              key={index}
              className="
                bg-white/5
                backdrop-blur-lg
                border border-white/10
                rounded-2xl
                p-10
                flex items-center justify-center
                hover:border-cyan-400/40
                hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
                transition
              "
            >

              <img
                src={client.img}
                alt={client.name}
                className="
                  h-12
                  object-contain
                  grayscale
                  opacity-70
                  hover:grayscale-0
                  hover:opacity-100
                  transition duration-300
                "
              />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Clients;
