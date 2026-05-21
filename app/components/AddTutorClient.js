"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter, redirect } from "next/navigation";
import { toast } from "react-toastify";

const inputClass = `
  w-full rounded-xl border border-border
  bg-background px-4 py-3 text-sm text-foreground
  shadow-sm outline-none transition
  placeholder:text-muted-foreground
  focus:border-primary focus:ring-2 focus:ring-primary/20
`;

const labelClass = "mb-2 block text-sm font-semibold text-foreground";

const AddTutorClient = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  if (isPending) {
    return (
      <div className="flex min-h-[calc(100vh-379px)] items-center justify-center bg-background">
        <div className="text-center">
          <div className="size-10 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto"></div>
          <p className="mt-4 text-sm text-muted-foreground">
            Loading session...
          </p>
        </div>
      </div>
    );
  }

  if (!session) {
    redirect("/login");
  }

  const user = session.user;

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      const tutor = Object.fromEntries(formData.entries());

      tutor.totalSlot = Number(tutor.totalSlot);
      tutor.userId = user?.id;
      tutor.email = user?.email;

      const { data: tokenData } = await authClient.token();

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/add-tutors`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenData?.token}`,
          },
          body: JSON.stringify(tutor),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data?.message || "Failed to add tutor", {
          position: "top-center",
        });
        return;
      }

      if (data?.success || data?.data?.insertedId) {
        toast.success(data?.message || "Tutor added successfully", {
          position: "top-center",
        });

        router.push("/tutors");
        router.refresh();
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong", {
        position: "top-center",
      });
    }
  };
  return (
    <section className="min-h-screen bg-muted/30 px-4 py-8 md:px-8 lg:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Add Tutor</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Create a tutor profile with availability, fee, and teaching details.
          </p>
        </div>

        <form
          onSubmit={handleFormSubmit}
          className="rounded-3xl border border-border bg-background p-5 shadow-sm md:p-8 lg:p-10"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="md:col-span-2">
              <label className={labelClass}>
                Tutor Name <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="text"
                name="tutorName"
                placeholder="Enter tutor name"
                className={inputClass}
              />
            </div>

            <div className="md:col-span-2">
              <label className={labelClass}>
                Photo URL <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="text"
                name="photo"
                placeholder="Paste imgbb/postimage URL"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                Subject / Category <span className="text-red-500">*</span>
              </label>
              <select required name="subject" className={inputClass}>
                <option value="">Select Subject</option>
                <option value="mathematics">Mathematics</option>
                <option value="physics">Physics</option>
                <option value="chemistry">Chemistry</option>
                <option value="biology">Biology</option>
                <option value="english">English</option>
                <option value="computer-science">Computer Science</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>
                Teaching Mode <span className="text-red-500">*</span>
              </label>
              <select required name="teachingMode" className={inputClass}>
                <option value="">Select Mode</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
                <option value="both">Both</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>
                Available Days & Time Slot{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="text"
                name="availableTime"
                placeholder="Sun - Thu 5:00 PM - 8:00 PM"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                Hourly Fee <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="number"
                name="hourlyFee"
                placeholder="e.g. 500"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                Total Slot <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="number"
                name="totalSlot"
                placeholder="e.g. 20"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                Session Start Date <span className="text-red-500">*</span>
              </label>
              <input
                required
                min={new Date().toISOString().split("T")[0]}
                type="date"
                name="sessionDate"
                className={inputClass}
              />
            </div>

            <div className="md:col-span-2">
              <label className={labelClass}>
                Institution & Experience <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                name="institution"
                rows={5}
                placeholder="Example: Dhaka University, 3 years teaching experience..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <div className="md:col-span-2">
              <label className={labelClass}>
                Location <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="text"
                name="location"
                placeholder="Area / City"
                className={inputClass}
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col-reverse gap-3 border-t border-border pt-6 sm:flex-row sm:justify-end">
            <button
              type="reset"
              className="
              cursor-pointer
                rounded-xl border border-red-500 px-8 py-3
                text-sm font-semibold text-red-500 transition
                hover:bg-red-50 dark:hover:bg-red-500/10
              "
            >
              Clear
            </button>

            <button
              type="submit"
              className="
              cursor-pointer
                rounded-xl bg-primary px-8 py-3
                text-sm font-semibold text-primary-foreground
                shadow-sm transition hover:opacity-90
              "
            >
              Add Tutor
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddTutorClient;
