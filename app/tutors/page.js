import TutorCard from "../components/TutorCard";

const TutorsPage = async () => {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

  if (!serverUrl) {
    throw new Error("NEXT_PUBLIC_SERVER_URL is missing");
  }

  const res = await fetch(`${serverUrl}/tutors`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch tutors");
  }

  const data = await res.json();
  const tutors = data.data || [];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-14 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Expert Tutors
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Find Your Perfect Tutor
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
          Learn from experienced tutors across Mathematics, Physics, Biology,
          Computer Science, English, and more. Book personalized sessions based
          on your schedule and learning goals.
        </p>
      </div>

      <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {tutors.map((tutor, index) => (
          <TutorCard key={tutor._id} tutor={tutor} index={index} />
        ))}
      </div>
    </div>
  );
};

export default TutorsPage;