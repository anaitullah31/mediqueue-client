"use client";

import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { AlertDialog, Button } from "@heroui/react";

const CancelSessionButton = ({ sesionId, status }) => {
  const router = useRouter();
  const isCancelled = status === "cancel";

  const handleCancelSession = async () => {
    if (isCancelled) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/my-booked-session/${sesionId}`,
        {
          method: "PATCH",
        },
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

  if (isCancelled) {
    return (
      <Button
        disabled
        className="cursor-not-allowed rounded-lg border border-gray-300 bg-gray-200 px-3 py-2 text-xs font-semibold text-gray-500 opacity-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 md:px-4 md:text-sm"
      >
        Cancelled
      </Button>
    );
  }

  return (
    <AlertDialog>
      <Button className="cursor-pointer rounded-lg border border-red-500 bg-transparent px-3 py-2 text-xs font-semibold text-red-500 transition hover:bg-red-50 dark:hover:bg-red-500/10 md:px-4 md:text-sm">
        Cancel
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="rounded-md sm:max-w-100">
            <AlertDialog.CloseTrigger className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-muted text-foreground transition-all hover:bg-red-100 hover:text-red-500 dark:bg-white/10 dark:text-white dark:hover:bg-red-500/20 dark:hover:text-red-400" />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Cancel session permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p className="text-gray-700 dark:text-gray-300">
                This will permanently cancel <strong>Session Details</strong>{" "}
                and all of its data. This action cannot be undone.
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
                onClick={handleCancelSession}
                slot="close"
                className="cursor-pointer rounded-md border border-red-500  bg-transparent px-3 py-2 text-xs font-semibold text-red-500  transition hover:bg-red-50 dark:hover:bg-red-500/10 md:px-4 md:text-sm"
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

export default CancelSessionButton;
