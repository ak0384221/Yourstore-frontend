"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const slides = [
  {
    img: "/banner/01.jpg",
    title: "Luxury Redefined",
    subtitle: "Discover elegant styles for every occasion.",
  },
  {
    img: "/banner/02.jpg",

    title: "Unleash Your Style",
    subtitle: "Make every outfit a statement piece.",
  },
  {
    img: "/banner/03.jpg",

    title: "Feel the Comfort",
    subtitle: "Experience the perfect blend of comfort and design.",
  },
  {
    img: "/banner/04.jpg",

    title: "Feel the Comfort",
    subtitle: "Experience the perfect blend of comfort and design.",
  },
  {
    img: "/banner/05.jpg",

    title: "Feel the Comfort",
    subtitle: "Experience the perfect blend of comfort and design.",
  },
  {
    img: "/banner/06.jpg",

    title: "Feel the Comfort",
    subtitle: "Experience the perfect blend of comfort and design.",
  },
  {
    img: "/banner/07.jpg",

    title: "Feel the Comfort",
    subtitle: "Experience the perfect blend of comfort and design.",
  },
  {
    img: "/banner/08.jpg",

    title: "Feel the Comfort",
    subtitle: "Experience the perfect blend of comfort and design.",
  },
];

export default function HeroSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToSlide = (index: number) => {
    if (!sliderRef.current) return;
    const width = sliderRef.current.clientWidth;
    sliderRef.current.scrollTo({
      left: width * index,
      behavior: "smooth",
    });
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % slides.length;
    scrollToSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentSlide - 1 + slides.length) % slides.length;
    scrollToSlide(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // auto-change every 10s
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="relative md:h-[85svh] h-[85svh] w-full overflow-hidden bg-black text-white  ">
      {/* Slider container */}
      <div
        ref={sliderRef}
        className="flex h-full w-full overflow-x-hidden scroll-smooth"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative w-full flex-shrink-0 flex items-center justify-start"
          >
            <Image
              src={slide.img}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover opacity-90"
            />
            {/* Text Overlay */}
            <div className="relative z-10 md:ml-[10svh] md:mb-[10svh] w-5/6 md:w-3/5  space-y-2 ml-5 ">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-300">
                {slide.subtitle}
              </p>
            </div>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60 z-[5]" />
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 right-10 z-20 flex gap-4">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 transition flex items-center justify-center text-xl"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 transition flex items-center justify-center text-xl"
        >
          ›
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-10 flex gap-2 z-20">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-8 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
