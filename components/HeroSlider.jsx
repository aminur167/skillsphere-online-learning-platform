"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    title: "Upgrade Your Skills Today",
    subtitle: "Explore guided courses in development, design, marketing, data, and more.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Learn from Industry Experts",
    subtitle: "Follow practical lessons, curriculum checklists, and mentor-designed learning paths.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80"
  }
];

export function HeroSlider() {
  return (
    <section className="relative min-h-[640px] overflow-hidden">
      <Swiper modules={[Autoplay, Pagination]} autoplay={{ delay: 4500 }} pagination={{ clickable: true }} loop className="h-[640px]">
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div className="relative h-[640px]">
              <Image src={slide.image} alt={slide.title} fill priority className="object-cover" sizes="100vw" />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/88 via-ink/52 to-transparent" />
              <div className="section-shell relative z-10 flex h-full items-center">
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="max-w-2xl pt-10 text-white"
                >
                  <p className="font-bold uppercase tracking-[0.2em] text-mint">SkillSphere</p>
                  <h1 className="mt-4 text-5xl font-black leading-tight md:text-7xl">{slide.title}</h1>
                  <p className="mt-5 text-lg leading-8 text-white/86 md:text-xl">{slide.subtitle}</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link href="/courses" className="btn btn-primary">Explore Courses</Link>
                    <Link href="/register" className="btn border-white bg-white/10 text-white hover:bg-white hover:text-ink">Join Free</Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
