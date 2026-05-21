"use client";

import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const BookNowButton = ({ tutorData }) => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const availableSeats = Number(tutorData?.totalSlot ?? 0);
  const isDisabled = availableSeats < 1;

  const handleBookedClass = async () => {
    try {
      if (!user?.id) {
        toast.error("Please login to book this course.");
        return;
      }

      const bookingData = {
        courseId: tutorData?._id,
        tutorName: tutorData.tutorName,
        tutorImage: tutorData?.photo,
        subject: tutorData?.subject,
        teachingMode: tutorData?.teachingMode,
        availableTime: tutorData?.availableTime,
        sessionDate: tutorData?.sessionDate,
        hourlyFee: tutorData?.hourlyFee,

        studentId: user?.id,
        studentName: user?.name,
        studentEmail: user?.email,
      };

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/session-bookings`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        },
      );

      const data = await res.json();

      if (res.status === 201 && data?.success) {
        toast.success(data?.message || "Session booked successfully!");
        router.refresh();
        return;
      }

      if (res.status === 409) {
        toast.warning(data?.message || "You already booked this course.");
        return;
      }

      if (res.status === 400) {
        toast.error(data?.message || "No slots available.");
        return;
      }

      if (res.status === 404) {
        toast.error(data?.message || "Course not found.");
        return;
      }

      toast.error(data?.message || "Failed to book session.");
    } catch (error) {
      console.error(error);
      toast.error("Server error. Please try again later.");
    }
  };

  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={isDisabled ? undefined : handleBookedClass}
      className={`w-full rounded-2xl px-6 py-4 text-base font-semibold text-white shadow-lg transition duration-300 ${
        isDisabled
          ? "cursor-not-allowed bg-gray-400 opacity-70"
          : "cursor-pointer bg-primary hover:scale-[1.02] hover:opacity-90 active:scale-[0.98]"
      }`}
    >
      {isDisabled ? "No Seat Available" : "Book Seat"}
    </button>
  );
};

export default BookNowButton;
