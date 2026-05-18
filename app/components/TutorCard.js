"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, CalendarDays, ArrowUpRight, Star } from "lucide-react";

const TutorCard = ({ tutor }) => {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-48 shrink-0 overflow-hidden">
        <Image
          src={tutor?.photo || "https://i.ibb.co/RPKRzCp/user.jpg"}
          alt={tutor?.tutorName || "Tutor"}
          fill
          priority={tutor?.id === 1}
          sizes="(max-width: 640px) 100vw,
           (max-width: 1024px) 50vw,
           (max-width: 1280px) 33vw,
           25vw"
          className="
      object-cover object-top
      transition duration-500
      group-hover:scale-105
    "
        />

        <div className="absolute right-5 top-5 rounded-md bg-background px-5 py-2 text-center shadow-md">
          <p className="text-sm font-bold text-foreground">
            {tutor?.subject || "Mathematics"}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2 text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="size-5 shrink-0" />
            <span>{tutor?.location || "Dhanmondi, Dhaka"}</span>
          </div>

          <span>{tutor?.teachingMode || "Online"}</span>
        </div>

        <div className="mt-5">
          <h2 className="line-clamp-1 text-2xl font-bold text-foreground">
            {tutor?.tutorName || "Md. Rakib Hasan"}
          </h2>

          <p className="mt-1 line-clamp-2 min-h-10 text-sm text-muted-foreground">
            {tutor?.institutionExperience ||
              "BUET Graduate • 5 Years Experience"}
          </p>
        </div>

        <div className="mt-5 flex items-center gap-2 text-muted-foreground">
          <CalendarDays className="size-5 shrink-0" />
          <span className="line-clamp-1">
            {tutor?.availableTime || "Sun - Thu 5:00 PM - 8:00 PM"}
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-5">
          <div className="flex items-center gap-1 font-semibold text-foreground">
            <Star className="size-4 fill-current text-primary" />
            <span>{tutor?.rating || "4.5"}</span>
          </div>

          <Link
            href={`/tutors/${tutor?.id || 1}`}
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary transition hover:gap-3"
          >
            Tutor Details
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
