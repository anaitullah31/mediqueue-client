"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TutorCard from "./TutorCard";

const AvailableTutorsCarousel = ({ tutors }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
  });

  return (
    <section className="bg-background px-4 pt-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {tutors?.map((tutor) => (
              <div
                key={tutor._id}
                className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%]"
              >
                <TutorCard tutor={tutor} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-3">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="rounded-full border border-border p-3 hover:border-primary hover:text-primary"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => emblaApi?.scrollNext()}
            className="rounded-full border border-border p-3 hover:border-primary hover:text-primary"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AvailableTutorsCarousel;
