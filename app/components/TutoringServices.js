import Link from "next/link";

const services = [
  {
    icon: "🎓",
    title: "One-on-One Tutoring",
    text: "Tailored lessons for individualized attention, ensuring every learner succeeds at their own pace.",
  },
  {
    icon: "👥",
    title: "Group Lessons",
    text: "Interactive sessions fostering collaboration and shared learning experiences among peers.",
  },
  {
    icon: "📚",
    title: "Exam Preparation",
    text: "Focused training on mastering exam techniques for outstanding academic performance.",
  },
];

const TutoringServices = () => {
  return (
    <section className="bg-linear-to-br from-background via-background to-cyan-100/60 py-24 dark:to-cyan-950/20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
            Premium Learning Support
          </span>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
            Comprehensive{" "}
            <span className="text-primary">Tutoring Services</span> for Every
            Learner
          </h2>

          <p className="mt-6 text-base leading-8 text-muted-foreground">
            Personalized academic support designed to help students achieve
            excellence with confidence.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-border bg-background/80 p-10 shadow-sm backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Glow */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:scale-150" />

              {/* Number */}
              <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 text-xl font-bold text-primary/60">
                0{index + 1}
              </div>

              {/* Icon */}
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-5xl">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mt-8 text-2xl font-bold text-foreground">
                {service.title}
              </h3>

              {/* Text */}
              <p className="mt-4 leading-8 text-muted-foreground">
                {service.text}
              </p>

              {/* Button */}
              <Link href={"/tutors"} className="mt-8 inline-flex items-center gap-2 font-semibold text-primary transition-all hover:gap-4">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TutoringServices;
