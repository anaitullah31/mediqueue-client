import { auth } from "@/lib/auth";
import {
  Calendar,
  Video,
  User,
  CreditCard,
  ArrowRight,
  Clock,
} from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";

const ProfilePage = async () => {
  const { user } = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <section className="min-h-[calc(100vh-350px)] bg-linear-to-bl from-background via-background to-cyan-100/60 px-6 py-12 dark:to-cyan-950/20">
      <div className="mx-auto max-w-7xl">
        {/* Welcome */}
        <div>
          <h1 className="text-4xl font-extrabold text-foreground">
            Welcome back, {user.name}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            You have 2 sessions scheduled for today. Your progress is ahead of
            schedule.
          </p>
        </div>

        {/* Top Grid */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[2fr_1fr]">
          {/* Upcoming Session */}
          <div className="rounded-2xl border border-border bg-background/80 p-8 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-600">
              Next Upcoming Session
            </p>

            <div className="mt-5 grid gap-6 md:grid-cols-[1fr_220px]">
              <div>
                <h2 className="text-3xl font-extrabold leading-tight text-foreground">
                  Advanced Pathology: Renal Systems
                </h2>

                <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} /> Today, 14:30 PM
                  </span>
                  <span className="flex items-center gap-2">
                    <User size={16} /> Dr. Sarah Jenkins
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white">
                    <Video size={18} />
                    Join Session
                  </button>

                  <button className="rounded-lg border border-border px-6 py-3 font-semibold text-foreground hover:bg-muted">
                    Reschedule
                  </button>
                </div>
              </div>

              <Image
                width={500}
                height={500}
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=500"
                alt="Session"
                className="h-40 w-full rounded-xl object-cover"
              />
            </div>
          </div>

          {/* Learning Goals */}
          <div className="rounded-2xl border border-border bg-background/80 p-8 shadow-sm">
            <h3 className="font-bold text-foreground">Learning Goals</h3>

            <div className="mt-6 space-y-5">
              {[
                ["Anatomy Mastery", "82%", "w-[82%]"],
                ["Clinical Diagnostics", "45%", "w-[45%]"],
                ["MCAT Preparation", "60%", "w-[60%]"],
              ].map(([label, value, width]) => (
                <div key={label}>
                  <div className="mb-2 flex justify-between text-xs">
                    <span className="font-medium text-foreground">{label}</span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div className={`h-2 rounded-full bg-primary ${width}`} />
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              View Full Roadmap <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Recommended Tutors */}
        <div className="mt-8 flex items-center justify-between">
          <h2 className="text-2xl font-extrabold text-foreground">
            Recommended Tutors
          </h2>

          <button className="text-sm font-semibold text-primary">
            Explore All Specialists
          </button>
        </div>

        <div className="mt-5 grid gap-6 md:grid-cols-3">
          {[
            ["Dr. Elena Rodriguez", "Internal Medicine Specialist"],
            ["Prof. Marcus Chen", "Neurobiology Expert"],
            ["Dr. Amelia Watson", "Pediatric Surgery"],
          ].map(([name, role], index) => (
            <div
              key={name}
              className="flex items-center gap-4 rounded-2xl border border-border bg-background/80 p-5 shadow-sm"
            >
              <Image
                width={500}
                height={500}
                src={`https://i.pravatar.cc/80?img=${index + 20}`}
                alt={name}
                className="h-16 w-16 rounded-full object-cover"
              />

              <div>
                <h3 className="font-bold text-foreground">{name}</h3>
                <p className="text-sm text-muted-foreground">{role}</p>
                <span className="mt-2 inline-block rounded bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                  AVAILABLE NOW
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Subscription */}
        <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-2xl bg-primary p-8 text-white md:flex-row md:items-center">
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15">
              <CreditCard size={28} />
            </div>

            <div>
              <h2 className="text-2xl font-extrabold">MediQueue Plus Member</h2>
              <p className="mt-1 text-sm text-white/80">
                Your subscription renews in 12 days. You have 4 unused session
                credits.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="rounded-lg bg-white px-6 py-3 font-semibold text-primary">
              Manage Subscription
            </button>

            <button className="rounded-lg border border-white/40 px-6 py-3 font-semibold text-white">
              Billing History
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
