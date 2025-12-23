"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const projectsData = [
  {
    id: 1,
    title: "Natura",
    link: "https://naturapk.store/",
    img: "/Natura.jpeg",
    short:
      "Discover Natura.pk’s range of premium herbal and organic products. From hair oils to skincare and wellness remedies, we bring you natural solutions for a healthier, more beautiful life.",
  },
  {
    id: 2,
    title: "KiddyLearno",
    link: "https://www.kiddylearno.online/",
    img: "/Kiddy.jpeg",
    short:
      "KiddyLearno is a playful, safe online learning platform for kids in *KS1 to KS3(Grade 1 to 8)*. It focuses on core academic support, homework help, and test preparation in a fun, engaging way. ",
  },
  {
    id: 4,
    title: "Bigby's",
    link: "https://vite-build-bigby-s.vercel.app/",
    img: "/Bigby.jpeg",
    short:
      "Bigbys is a modern eCommerce fashion destination offering stylish and affordable clothing for men, women, and kids. (dummy)",
  },
  {
    id: 3,
    title: "MacaroniX",
    link: "https://macaroni-x.vercel.app/",
    img: "/Macaroni.jpeg",
    short:
      "McaroniX is a cyberpunk-inspired digital marketing agency specializing in web development, bold design, and high-impact marketing.(Still in development)",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="relative py-6 overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 opacity-20 bg-cover bg-center pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto text-center overflow-visible">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          spaceBetween={24}
          effect="coverflow"
          grabCursor
          centeredSlides
          slideToClickedSlide
          coverflowEffect={{
            rotate: 10,
            depth: 120,
            slideShadows: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projectsData.map((p) => (
            <SwiperSlide key={p.id} className="pointer-events-auto">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={p.link}
                className="card rounded-2xl overflow-hidden hover:-translate-y-2 transition"
              >
                <div className=" overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-5 border border-white text-left">
                  <h3 className="text-lg font-semibold neon mt-2">{p.title}</h3>
                  <p className="text-sm text-gray-300 mt-2">{p.short}</p>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
