"use client";
import Image from "next/image";
import Link from "next/link";

const myTutors = [];

const MyTutorsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          My Tutors
        </p>

        <h1 className="text-3xl font-bold text-foreground md:text-4xl">
          Manage Your Tutors
        </h1>

        <p className="mt-3 max-w-2xl text-muted-foreground">
          View all your booked tutors, track session status, and manage your
          learning journey from one place.
        </p>
      </div>
      {myTutors.length === 0 ? (
        <div
          className="
            flex flex-col items-center justify-center
            rounded-3xl border border-dashed border-border
            bg-background px-6 py-20 text-center
          "
        >
          <div className="relative mb-8 size-40 overflow-hidden rounded-full">
            <Image
              src="https://i.ibb.co/RPKRzCp/user.jpg"
              alt="No tutors"
              fill
              sizes="160px"
              className="object-cover opacity-70"
            />
          </div>
          <h2 className="text-2xl font-bold text-foreground">
            No Tutors Booked Yet
          </h2>

          <p className="mt-3 max-w-md text-muted-foreground">
            You haven&apos;t booked any tutor sessions yet. Explore expert
            tutors and start your personalized learning journey today.
          </p>
          <Link
            href="/tutors"
            className="
              mt-8 cursor-pointer rounded-xl
              bg-primary px-8 py-3
              text-sm font-semibold text-primary-foreground
              transition hover:opacity-90
            "
          >
            Explore Tutors
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-border bg-background shadow-sm">
          <table className="min-w-full">
            <thead className="border-b border-border bg-muted/40">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  Student
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  Phone
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  Tutor Name
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  Email
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  Status
                </th>

                <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>{/* mapped my-tutors */}</tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyTutorsPage;
