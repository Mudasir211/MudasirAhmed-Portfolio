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
      "Premium herbal and organic products with a clean, performant eCommerce experience.",
  },
  {
    id: 2,
    title: "KiddyLearno",
    link: "https://www.kiddylearno.online/",
    img: "/Kiddy.jpeg",
    short: "Playful and safe learning platform for kids (Grades 1–8).",
  },
  {
    id: 3,
    title: "Bigby's",
    link: "https://vite-build-bigby-s.vercel.app/",
    img: "/Bigby.jpeg",
    short: "Modern fashion eCommerce UI (dummy project).",
  },
  {
    id: 4,
    title: "MacaroniX",
    link: "https://macaroni-x.vercel.app/",
    img: "/Macaroni.jpeg",
    short: "Cyberpunk-inspired digital marketing agency website.",
  },
  {
    id: 5,
    title: "Mini India",
    link: "https://miniindia.co.nz/",
    img: "/minindia.jpeg",
    short: "A Website for a restaurant edited by me.",
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="relative py-12 overflow-hidden w-full max-w-full"
    >
      <div className="relative max-w-6xl mx-auto text-center overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          grabCursor
          centeredSlides
          slideToClickedSlide
          effect="coverflow"
          spaceBetween={24}
          coverflowEffect={{
            rotate: 10,
            depth: 120,
            slideShadows: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projectsData.map((p) => (
            <SwiperSlide key={p.id} className="pointer-events-auto">
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card rounded-2xl overflow-hidden transition hover:-translate-y-2 block"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-48 object-contain"
                />

                <div className="p-5 text-left">
                  <h3 className="text-lg font-semibold neon">{p.title}</h3>
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
