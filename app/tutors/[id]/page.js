import Image from "next/image";
import {
  CalendarDays,
  Clock3,
  GraduationCap,
  MapPin,
  Star,
  Wallet,
  Users,
} from "lucide-react";
import BookNowButton from "@/app/components/BookNowButton";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function generateMetadata({ params }) {
  const { id } = await params;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${id}`,
    {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const data = await res.json();

  if (!res.ok) {
    return {
      title: "Tutor Details | MediQueue",
      description: "View tutor details on MediQueue.",
    };
  }

  const tutor = data?.data;

  return {
    title: `${tutor?.name || "Tutor Details"} | MediQueue`,
    description:
      tutor?.bio ||
      "View tutor details, expertise, availability, and book a learning session on MediQueue.",
  };
}

const TutorDetailsPage = async ({ params }) => {
  const { id } = await params;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${id}`,
    {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch tutor details");
  }

  const data = await res.json();
  const tutorData = data?.data;
  const {
    tutorName,
    photo,
    subject,
    availableTime,
    hourlyFee,
    totalSlot,
    sessionStartDate,
    institutionExperience,
    location,
    teachingMode,
  } = tutorData;

  return (
    <section className="min-h-screen bg-muted/30 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Content */}
          <div className="space-y-8 lg:col-span-2">
            {/* Tutor Card */}
            <div className="overflow-hidden rounded-3xl border border-border bg-background shadow-sm">
              {/* Image */}
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-t-3xl">
                <Image
                  src={photo}
                  alt="Tutor"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover object-center transition duration-700 group-hover:scale-105"
                />
              </div>
              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-col gap-4 border-b border-border pb-6 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h1 className="text-4xl font-bold text-foreground">
                      {tutorName}
                    </h1>
                    <p className="mt-2 text-muted-foreground capitalize">
                      {subject}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
                    <Star className="size-5 fill-current" />
                    <span className="font-semibold">4.9 Rating</span>
                  </div>
                </div>

                {/* Info Grid */}
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div className="flex items-start gap-4 rounded-2xl border border-border p-5">
                    <MapPin className="mt-1 size-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <h3 className="font-semibold text-foreground">
                        {location}
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-2xl border border-border p-5">
                    <Wallet className="mt-1 size-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Hourly Fee
                      </p>
                      <h3 className="font-semibold text-foreground">
                        ${hourlyFee} / Hour
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl border border-border p-5">
                    <Clock3 className="mt-1 size-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Available Time
                      </p>
                      <h3 className="font-semibold text-foreground">
                        {availableTime}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl border border-border p-5">
                    <CalendarDays className="mt-1 size-5 text-primary" />

                    <div>
                      <p className="text-sm text-muted-foreground">
                        Session Starts
                      </p>
                      <h3 className="font-semibold text-foreground">
                        {sessionStartDate}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* About */}
                <div className="mt-10">
                  <h2 className="text-2xl font-bold text-foreground">
                    About Tutor
                  </h2>
                  <p className="mt-4 leading-8 text-muted-foreground">
                    {institutionExperience}
                  </p>
                </div>

                {/* Experience */}
                <div className="mt-10">
                  <h2 className="text-2xl font-bold text-foreground">
                    Institution & Experience
                  </h2>
                  <div className="mt-5 flex items-start gap-4 rounded-2xl border border-border p-5">
                    <GraduationCap className="mt-1 size-6 text-primary" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        BUET Graduate
                      </h3>
                      <p className="mt-1 text-muted-foreground">
                        5 years tutoring experience in Mathematics, Higher Math,
                        and Engineering admission coaching.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div>
            <div className="sticky top-24 rounded-3xl border border-border bg-background p-6 shadow-sm">
              <div className="border-b border-border pb-6">
                <h2 className="text-3xl font-bold text-foreground">
                  ${hourlyFee}
                  <span className="text-base font-normal text-muted-foreground">
                    /Hour
                  </span>
                </h2>

                <p className="mt-2 text-sm text-muted-foreground">
                  Book your preferred tutoring session now.
                </p>
              </div>

              <div className="space-y-5 py-6">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Teaching Mode</span>

                  <span className="font-semibold text-foreground">
                    {teachingMode}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Remaing Seats</span>

                  <div className="flex items-center gap-2">
                    <Users className="size-4 text-primary" />

                    <span className="font-semibold text-foreground">
                      {totalSlot}
                    </span>
                  </div>
                </div>
              </div>

              {/* Book Button */}
              <BookNowButton tutorData={tutorData} />

              <p className="mt-4 text-center text-xs text-muted-foreground">
                Secure your seat before slots are full.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorDetailsPage;
