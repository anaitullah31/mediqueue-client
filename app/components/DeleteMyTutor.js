"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const DeleteMyTutor = ({ id }) => {
  const router = useRouter();

  const handleTutorDelete = async () => {
    try {
      if (!id) {
        toast.error("Tutor id is missing");
        return;
      }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/my-tutors/${id}`,
        {
          method: "DELETE",
        },
      );

      const contentType = res.headers.get("content-type");

      if (!contentType?.includes("application/json")) {
        toast.error("API route not found or server returned HTML");
        return;
      }

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Failed to delete tutor");
        return;
      }

      toast.success("Tutor deleted successfully");
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <button
      onClick={handleTutorDelete}
      className="cursor-pointer rounded-lg border border-red-500 px-3 py-2 text-xs font-semibold text-red-500 transition hover:bg-red-50 dark:hover:bg-red-500/10 md:px-4 md:text-sm"
    >
      Delete
    </button>
  );
};

export default DeleteMyTutor;
