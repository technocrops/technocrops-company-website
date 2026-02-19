import { motion } from "framer-motion";
import Lottie from "lottie-react";
import heroAnimation from "../assets/lottie/hero-animation.json";

function Hero() {
  return (
    <section className="
  relative
  bg-gradient-to-br
  from-[#08142B]
  via-[#0B1C3D]
  to-[#1E3A8A]
  py-28
  overflow-hidden
" id="home">

  <div className="absolute inset-0 -z-10">

  <div className="
    absolute top-20 left-10
    w-72 h-72
    bg-blue-500/20
    blur-3xl
    rounded-full
  "></div>

  <div className="
    absolute bottom-10 right-10
    w-96 h-96
    bg-cyan-400/20
    blur-3xl
    rounded-full
  "></div>

</div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">

        <motion.div
  initial="hidden"
  animate="visible"
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }}
>
  <motion.h1
  variants={{
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }}
  transition={{ duration: 0.6 }}
  className="
    text-5xl
    font-bold
    text-white
    mb-6
    leading-[1.2]
  "
>
  Technology That
  <br />

  <span className="
    bg-gradient-to-r
    from-cyan-400
    to-blue-500
    bg-clip-text
    text-transparent
  ">
    Helps Your Business Grow
  </span>
</motion.h1>

<motion.p
  variants={{
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }}
  transition={{ duration: 0.6 }}
  className="
    text-gray-300
    mb-8
    leading-relaxed
    text-lg
    max-w-xl
  "
>
  We build websites, apps, and automation tools
  that help you reach more customers,
  save time, and scale your business with ease.
</motion.p>

  <motion.button
    variants={{
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 0.6 }}
    className="
  bg-gradient-to-r
  from-blue-600
  to-cyan-500
  text-white
  px-6 py-3
  rounded-lg
  shadow-lg
  hover:shadow-cyan-500/40
  transition
"
  >
    Explore Services
  </motion.button>
</motion.div>

        {/* Right Visual */}
        <div className="relative">

  {/* Glow Behind */}
  <div className="
    absolute inset-0
    bg-cyan-500/20
    blur-3xl
    rounded-full
    -z-10
  "></div>

  <motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
  <Lottie
  animationData={heroAnimation}
  loop={true}
  className="h-[480px] drop-shadow-[0_0_40px_rgba(34,211,238,0.35)]"
/>
</motion.div>

</div>

      </div>
    </section>
  );
}

export default Hero;
