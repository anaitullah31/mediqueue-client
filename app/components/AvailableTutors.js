import AvailableTutorsCarousel from "./AvailableTutorsCarousel";

const AvailableTutors = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/tutors?limit=6`,
    {
      cache: "no-cache",
    },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch tutors");
  }
  const data = await res.json();
  const tutors = data?.data || [];

  return (
    <section className="bg-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
            Available Tutors
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Find Your Perfect Tutor
          </h2>

          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Explore available tutoring sessions from experienced tutors and book
            the right course for your learning goals.
          </p>
        </div>

        {/* Cards */}
        <AvailableTutorsCarousel tutors={tutors} />
      </div>
    </section>
  );
};

export default AvailableTutors;
