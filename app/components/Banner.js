"use client";

import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    badge: "Trusted Learning Platform",
    title: "Learn from the",
    highlight: "Best Professional Tutors",
    desc: "Book live tutoring sessions, improve your learning experience, and achieve your academic goals.",
  },
  {
    badge: "Expert Tutors",
    title: "Connect with",
    highlight: "Verified Learning Experts",
    desc: "Find tutors for academic subjects, career skills, and personalized one-to-one guidance.",
  },
  {
    badge: "Flexible Sessions",
    title: "Book sessions",
    highlight: "Anytime, Anywhere",
    desc: "Choose your tutor, schedule your class, and learn at your own pace with live support.",
  },
];

export default function Banner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="overflow-hidden bg-linear-to-br from-background via-background to-cyan-100/60">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-24">
        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide, index) => (
                <div key={index} className="min-w-0 flex-[0_0_100%]">
                  <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
                    {/* Badge */}
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
                      {slide.badge}
                    </span>

                    {/* Heading */}
                    <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-6xl">
                      {slide.title}
                      <br />
                      <span className="text-primary">{slide.highlight}</span>
                    </h1>

                    {/* Description */}
                    <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                      {slide.desc}
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                      <Link
                        href="/tutors"
                        className="rounded-xl bg-primary px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-[1.02]"
                      >
                        Explore Tutors
                      </Link>

                      <Link
                        href="/add-tutor"
                        className="rounded-xl border border-border bg-background px-8 py-4 font-semibold text-foreground transition hover:bg-muted"
                      >
                        Start Teaching
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <button
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 md:flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background/90 shadow-lg backdrop-blur transition hover:bg-muted"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 md:flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background/90 shadow-lg backdrop-blur transition hover:bg-muted"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-8 border-t border-border pt-10 text-center md:grid-cols-4">
          <div>
            <h3 className="text-3xl font-bold text-primary">500+</h3>
            <p className="mt-2 text-sm text-muted-foreground">Expert Tutors</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-primary">10k+</h3>
            <p className="mt-2 text-sm text-muted-foreground">Students</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-primary">98%</h3>
            <p className="mt-2 text-sm text-muted-foreground">Success Rate</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-primary">24/7</h3>
            <p className="mt-2 text-sm text-muted-foreground">Live Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
