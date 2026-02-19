import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function Stats() {
  const stats = [
    {
      number: 250,
      suffix: "+",
      label: "Digital Products Delivered",
      icon: "🚀",
    },
    {
      number: 120,
      suffix: "+",
      label: "Global Clients Served",
      icon: "🌍",
    },
    {
      number: 50,
      suffix: "+",
      label: "Skilled Tech Professionals",
      icon: "👨‍💻",
    },
    {
      number: 10,
      suffix: "+",
      label: "Years of Industry Experience",
      icon: "🏆",
    },
  ];

  // Detect section visibility
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.3,   // trigger when 30% visible
  });

  return (
    <section
      ref={ref}
      className="
        bg-gradient-to-r
        from-[#08142B]
        via-[#0B1C3D]
        to-[#1E3A8A]
        py-24
        text-white
      "
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10 text-center">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="
                bg-white/5
                backdrop-blur-lg
                border border-white/10
                rounded-2xl
                p-8
              "
            >

              {/* Icon */}
              <div className="text-3xl mb-4">
                {stat.icon}
              </div>

              {/* Counter */}
              <h3 className="text-4xl font-bold mb-2 text-cyan-400">

                {inView && (
                  <CountUp
                    end={stat.number}
                    duration={2}
                    suffix={stat.suffix}
                  />
                )}

              </h3>

              {/* Label */}
              <p className="text-gray-300 text-sm">
                {stat.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;
