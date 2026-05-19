import TutorCard from "../components/TutorCard";

const TutorsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors`);
  const data = await res.json();
  const tutors = data.data;
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
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

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {tutors.map((tutor) => (
          <TutorCard key={tutor._id} tutor={tutor} />
        ))}
      </div>
    </div>
  );
};

export default TutorsPage;
