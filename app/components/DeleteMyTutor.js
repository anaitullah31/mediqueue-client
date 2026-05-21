"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { AlertDialog, Button } from "@heroui/react";

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
    <AlertDialog>
      <Button className=" cursor-pointer rounded-md border border-red-500 bg-transparent px-3 py-2 text-xs font-semibold text-red-500 transition hover:bg-red-50 dark:hover:bg-red-500/10 md:px-4 md:text-sm">
        Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100 rounded-md">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete tutor permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p className="text-gray-700">
                This will permanently delete <strong>Tutor Details</strong> and
                all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button
                slot="close"
                variant="tertiary"
                className="cursor-pointer rounded-md border border-border bg-background px-3 py-2 text-xs font-semibold text-foreground transition-all hover:bg-muted dark:hover:bg-white/10 md:px-4 md:text-sm"
              >
                Cancel
              </Button>
              <Button
                className=" cursor-pointer rounded-md border border-red-500 bg-transparent px-3 py-2 text-xs font-semibold text-red-500 transition hover:bg-red-50 dark:hover:bg-red-500/10 md:px-4 md:text-sm"
                onClick={handleTutorDelete}
                slot="close"
              >
                Confirm
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteMyTutor;
