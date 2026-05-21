import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-4xl">
          {/* Badge */}
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Trusted Learning Platform
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Learn from the
            <span className="block text-primary">Best Professional Tutors</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Book live tutoring sessions, improve your learning experience, and
            achieve your academic and professional goals with expert tutors.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/tutors" className="cursor-pointer rounded-md bg-primary px-7 py-4 text-base font-semibold text-white shadow-lg transition duration-300 hover:scale-[1.02] hover:opacity-90">
              Explore Tutors
            </Link>

            <Link href="/add-tutor" className="cursor-pointer rounded-md border border-border bg-background px-7 py-4 text-base font-semibold text-foreground transition hover:border-primary hover:text-primary">
              Start Teaching
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
            <div>
              <h3 className="text-2xl font-bold text-primary">500+</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Expert Tutors
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary">10k+</h3>
              <p className="mt-1 text-sm text-muted-foreground">Students</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary">98%</h3>
              <p className="mt-1 text-sm text-muted-foreground">Success Rate</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary">24/7</h3>
              <p className="mt-1 text-sm text-muted-foreground">Live Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
