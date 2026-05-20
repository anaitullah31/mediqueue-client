import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import CancelSessionButton from "../components/CancelSessionButton";

const MyBookedSessions = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const { id } = session?.user;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/my-booked-session/${id}`,
  );
  const data = await res.json();
  const myBookedSessions = data?.data;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          My Sessions
        </p>

        <h1 className="text-3xl font-bold text-foreground md:text-4xl">
          My Booked Sessions
        </h1>

        <p className="mt-3 max-w-2xl text-muted-foreground">
          View your booked tutor sessions, check status, and cancel pending
          bookings when needed.
        </p>
      </div>

      {/* Empty State */}
      {myBookedSessions.length === 0 ? (
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
              alt="No Sessions"
              fill
              sizes="160px"
              className="object-cover opacity-70"
            />
          </div>

          <h2 className="text-2xl font-bold text-foreground">
            No Booked Sessions Yet
          </h2>

          <p className="mt-3 max-w-md text-muted-foreground">
            You haven&apos;t booked any tutoring sessions yet. Explore expert
            tutors and reserve your first learning session today.
          </p>

          <Link
            href="/tutors"
            className="
              mt-8 rounded-xl bg-primary
              px-8 py-3 text-sm font-semibold
              text-primary-foreground
              transition hover:opacity-90
            "
          >
            Explore Tutors
          </Link>
        </div>
      ) : (
        /* Table */
        <div className="overflow-x-auto rounded-2xl border border-border bg-background shadow-sm">
          <table className="min-w-full">
            <thead className="border-b border-border bg-muted/40">
              <tr>
                {/* Name */}
                <th className="px-4 py-4 text-left text-sm font-semibold text-foreground md:px-6">
                  Course Name
                </th>

                {/* Phone - Hidden Mobile */}
                <th className="hidden px-6 py-4 text-left text-sm font-semibold text-foreground lg:table-cell">
                  Teaching Mode
                </th>

                {/* Tutor Name */}
                <th className="px-4 py-4 text-left text-sm font-semibold text-foreground md:px-6">
                  Tutor Name
                </th>

                {/* Email - Hidden Mobile */}
                <th className="hidden px-6 py-4 text-left text-sm font-semibold text-foreground xl:table-cell">
                  Session Time
                </th>

                {/* Status - Hidden Mobile */}
                <th className="hidden px-6 py-4 text-left text-sm font-semibold text-foreground md:table-cell">
                  Status
                </th>

                {/* Action */}
                <th className="px-4 py-4 text-right text-sm font-semibold text-foreground md:px-6">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {myBookedSessions.map((session) => (
                <tr
                  key={session._id}
                  className="border-b border-border transition hover:bg-muted/30"
                >
                  {/* Name */}
                  <td className="px-4 py-5 md:px-6">
                    <h3 className="font-semibold text-foreground">
                      {session.subject}
                    </h3>
                  </td>

                  {/* Phone */}
                  <td className="hidden px-6 py-5 text-sm text-muted-foreground lg:table-cell">
                    {session.teachingMode}
                  </td>

                  {/* Tutor */}
                  <td className="px-4 py-5 md:px-6">
                    <p className="font-medium text-foreground">
                      {session.tutorName}
                    </p>

                    {/* Mobile Email */}
                    <p className="mt-1 block text-xs text-muted-foreground md:hidden">
                      {session.status}
                    </p>
                  </td>

                  {/* Email */}
                  <td className="hidden px-6 py-5 text-sm text-muted-foreground xl:table-cell">
                    {session.availableTime}
                  </td>

                  {/* Status */}
                  <td className="hidden capitalize px-6 py-5 md:table-cell">
                    <span
                      className={`
                rounded-full px-3 py-1 text-xs font-semibold
                ${
                  session.status === "Confirmed"
                    ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400"
                    : session.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400"
                      : "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400"
                }
              `}
                    >
                      {session.status}
                    </span>
                  </td>

                  {/* Action */}
                  <td className="px-4 py-5 text-right md:px-6">
                    <CancelSessionButton status={session?.status} sesionId={session?._id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyBookedSessions;
