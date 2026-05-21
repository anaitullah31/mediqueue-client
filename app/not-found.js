import Link from "next/link";
import { Home, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-379px)] items-center justify-center overflow-hidden bg-linear-to-bl from-background via-background to-cyan-100/60 px-6 dark:to-cyan-950/20">
      {/* Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative z-10 w-full max-w-2xl p-10 text-center md:p-16">
        {/* Icon */}
        <div className="mx-auto flex h-28calc w-28 items-center justify-center rounded-full bg-primary/10">
          <SearchX size={58} className="text-primary" />
        </div>

        {/* 404 */}
        <h1 className="mt-8 text-7xl font-extrabold tracking-tight text-primary md:text-8xl">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-lg text-base leading-8 text-muted-foreground md:text-lg">
          Sorry, the page you are looking for does not exist, has been removed,
          or the URL may be incorrect.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="
              inline-flex
              items-center
              gap-2
              rounded-2xl
              bg-primary
              px-8
              py-4
              font-semibold
              text-white
              shadow-lg
              shadow-primary/20
              transition-all
              duration-300
              hover:scale-[1.03]
            "
          >
            <Home size={20} />
            Return Home
          </Link>

          <Link
            href="/tutors"
            className="
              rounded-2xl
              border
              border-border
              bg-background/80
              px-8
              py-4
              font-semibold
              text-foreground
              backdrop-blur
              transition-all
              duration-300
              hover:bg-muted
            "
          >
            Browse Tutors
          </Link>
        </div>
      </div>
    </section>
  );
}
