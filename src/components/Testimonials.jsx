import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Testimonials() {
    const testimonials = [
        {
            name: "Gaurav Agrawal",
            role: "Director, Programmers Point",
            review:
                "TechnoCrops delivered our ERP project ahead of schedule with flawless execution. Their team felt like an extension of ours.",
        },
        {
            name: "Alok Agrawal",
            role: "Founder, Quest Global Technologies",
            review:
                "We hired TechnoCrops for a Web3 prototype and they absolutely nailed it. Their technical depth and UI/UX expertise stood out.",
        },
        {
            name: "William Smith",
            role: "Founder, GrayGrids",
            review:
                "Their developers helped us meet aggressive deadlines without compromising quality. It felt like a true tech partnership.",
        },
    ];

    return (
        <section className="bg-[#08142B] py-24 text-white">

            <div className="max-w-6xl mx-auto px-6 text-center">

                <h2 className="text-3xl font-bold mb-4">
                    What Our Clients Say
                </h2>

                <p className="text-gray-300 mb-16">
                    Real feedback from organizations we’ve partnered with.
                </p>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                >

                    {testimonials.map((t, index) => (
                        <SwiperSlide key={index}>

                            <div className="
  bg-white/5
  border border-white/10
  backdrop-blur-lg
  p-8
  rounded-2xl
  hover:border-cyan-400/40
  hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
  transition
">

                                {/* Quote Icon */}
                                <div className="text-cyan-400 text-3xl mb-4">
                                    ❝
                                </div>

                                {/* Review */}
                                <p className="italic text-gray-300 mb-6 leading-relaxed">
                                    {t.review}
                                </p>

                                {/* Client */}
                                <h4 className="font-semibold text-white">
                                    {t.name}
                                </h4>

                                <p className="text-sm text-gray-400">
                                    {t.role}
                                </p>

                            </div>


                        </SwiperSlide>
                    ))}

                </Swiper>

            </div>
        </section>
    );
}

export default Testimonials;
