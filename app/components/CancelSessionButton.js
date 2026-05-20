"use client";

import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const CancelSessionButton = ({ sesionId, status }) => {
  const router = useRouter();

  const handleCancelSession = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/my-booked-session/${sesionId}`,
        {
          method: "PATCH",
        }
      );

      const data = await res.json();

      if (res.ok && data?.success) {
        toast.success(data?.message || "Session cancelled successfully");
        router.refresh();
        return;
      }

      toast.error(data?.message || "Failed to cancel session");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <button
      disabled={status === "cancel"}
      onClick={handleCancelSession}
      className={`rounded-lg border px-3 py-2 text-xs font-semibold transition md:px-4 md:text-sm ${
        status === "cancel"
          ? "cursor-not-allowed border-gray-300 bg-gray-200 text-gray-500"
          : "cursor-pointer border-red-500 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10"
      }`}
    >
      {status === "cancel" ? "Cancelled" : "Cancel"}
    </button>
  );
};

export default CancelSessionButton;