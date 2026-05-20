import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import DeleteMyTutor from "../components/DeleteMyTutor";
import EditTutorModal from "../components/EditTutorModal";

const MyTutorsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const { id } = session?.user;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/my-tutors/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  const data = await res.json();
  const myTutors = data?.data || [];

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
            No Tutors Added Yet
          </h2>
          <p className="mt-3 max-w-md text-muted-foreground">
            You haven&apos;t booked any tutor sessions yet. Explore expert
            tutors and start your personalized learning journey today.
          </p>
          <Link
            href="/add-tutor"
            className="
              mt-8 cursor-pointer rounded-xl
              bg-primary px-8 py-3
              text-sm font-semibold text-primary-foreground
              transition hover:opacity-90
            "
          >
            Add Tutor
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-border bg-background shadow-sm">
          <table className="min-w-full">
            <thead className="border-b border-border bg-muted/40">
              <tr>
                <th className="px-4 py-4 text-left text-sm font-semibold text-foreground md:px-6">
                  Tutor Name
                </th>
                <th className="px-4 py-4 text-left text-sm font-semibold text-foreground md:px-6">
                  Subject
                </th>
                <th className="hidden px-6 py-4 text-left text-sm font-semibold text-foreground md:table-cell">
                  Available
                </th>
                <th className="hidden px-6 py-4 text-left text-sm font-semibold text-foreground md:table-cell">
                  Hourly Fee
                </th>
                <th className="hidden px-6 py-4 text-left text-sm font-semibold text-foreground md:table-cell">
                  Total Slot
                </th>

                <th className="hidden px-6 py-4 text-left text-sm font-semibold text-foreground lg:table-cell">
                  Session Start Date
                </th>

                <th className="px-4 py-4 text-right text-sm font-semibold text-foreground md:px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {myTutors.map((tutor) => (
                <tr
                  key={tutor._id}
                  className="border-b border-border transition hover:bg-muted/30"
                >
                  <td className="px-4 py-5 md:px-6">
                    <h3 className="font-semibold text-foreground">
                      {tutor.tutorName}
                    </h3>
                    <p className="hidden text-sm text-muted-foreground md:block">
                      {tutor.location || "Dhanmondi, Dhaka"}
                    </p>
                  </td>
                  <td className="px-4 py-5 md:px-6 capitalize">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {tutor.subject || "Mathematics"}
                    </span>
                  </td>
                  <td className="hidden px-6 py-5 text-sm text-muted-foreground md:table-cell">
                    {tutor.availableTime || "Sun - Thu • 5PM - 8PM"}
                  </td>
                  <td className="hidden px-6 py-5 md:table-cell">
                    <p className="font-semibold text-foreground">
                      ${tutor.hourlyFee || 20}
                      <span className="text-sm font-normal text-muted-foreground">
                        /hour
                      </span>
                    </p>
                  </td>
                  <td className="hidden px-6 py-5 md:table-cell">
                    <span className="font-medium text-foreground">
                      {tutor.totalSlot || 20} Slots
                    </span>
                  </td>
                  <td className="hidden px-6 py-5 text-sm text-muted-foreground lg:table-cell">
                    {tutor.sessionDate || "2026-05-25"}
                  </td>
                  <td className="px-4 py-5 md:px-6">
                    <div className="flex justify-end gap-2">
                      <EditTutorModal tutor={tutor} />
                      <DeleteMyTutor id={tutor?._id} />
                    </div>
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

export default MyTutorsPage;
