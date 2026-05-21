import Link from "next/link";
import FeaturedImage from "./FeaturedImage";

const Featured = () => {
  return (
    <section className="py-24 pb-40 `dark:bg-linear-to-b dark:from-[#020817] dark:via-[#031525] dark:to-[#071D2F]">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 md:grid-cols-2">
        {/* LEFT */}
        <div>
          <h2 className="text-4xl font-extrabold leading-tight text-[#0B1220] dark:text-white md:text-5xl">
            Connect Directly with{" "}
            <span className="text-[#10C7B1]">Elite University Tutors</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#5B6475] dark:text-slate-400">
            Choose from 1,600+ expert tutors from Harvard, Stanford, MIT,
            Oxford, Cambridge, and more for personalized one-on-one tutoring
            sessions.
          </p>

          <Link href={"/tutors"} className="mt-8 inline-flex items-center gap-2 font-semibold text-[#10C7B1] transition-all hover:gap-4">
            Get Started →
          </Link>
        </div>

        {/* RIGHT */}
        <div className="relative flex items-center justify-center">
          {/* Glow */}
          <div className="absolute h-80 w-[320px] rounded-full bg-[#10C7B1]/10 blur-3xl" />

          {/* Circle */}
          <div className="absolute h-107.5 w-107.5 rounded-full border-2 border-dotted border-slate-400/40 dark:border-white/10" />

          {/* Dots */}
          <span className="absolute left-10 top-24 h-4 w-4 rounded-full bg-yellow-400" />

          <span className="absolute right-12 top-10 h-4 w-4 rounded-full bg-red-500" />

          <span className="absolute bottom-14 right-20 h-3 w-3 rounded-full bg-blue-500" />

          {/* Image */}
          <FeaturedImage />
        </div>
      </div>
    </section>
  );
};

export default Featured;
