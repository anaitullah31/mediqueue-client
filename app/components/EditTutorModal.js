"use client";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const inputClass = `
  w-full rounded-xl border border-border
  bg-background px-4 py-3 text-sm text-foreground
  shadow-sm outline-none transition
  placeholder:text-muted-foreground
  focus:border-primary focus:ring-2 focus:ring-primary/20
`;
const labelClass = "mb-2 block text-sm font-semibold text-foreground";

const EditTutorModal = ({ tutor }) => {
  const router = useRouter();
  const {
    _id,
    tutorName,
    photo,
    subject,
    availableTime,
    hourlyFee,
    totalSlot,
    sessionDate,
    institutionExperience,
    location,
    teachingMode,
  } = tutor;

  const handleFormupdate = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      const updatedTutor = Object.fromEntries(formData.entries());
      updatedTutor.totalSlot = parseFloat()

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${_id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedTutor),
        },
      );

      const data = await res.json();

      if (data?.modifiedCount > 0) {
        toast.success("Tutor updated successfully!");
        router.refresh();
        return;
      }

      if (data?.matchedCount > 0 && data?.modifiedCount === 0) {
        toast.info("No changes were made.");
        return;
      }

      toast.error("Failed to update tutor.");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <Modal className="max-w-5xl">
      <Button className="rounded-md">Edit</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="w-full max-w-4xl rounded-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Plus className="size-5" />
              </Modal.Icon>
              <Modal.Heading className="text-3xl font-bold text-foreground">
                Update Tutor
              </Modal.Heading>
              <p className="mt-1.5 text-sm leading-5">
                Update your tutor information, availability, teaching mode,
                session schedule, and other details below.
              </p>
            </Modal.Header>
            <Modal.Body className="pt-6">
              <Surface variant="default">
                <form
                  onSubmit={handleFormupdate}
                  className="rounded-3xl border border-border bg-background p-5 shadow-sm md:p-8 lg:p-10"
                >
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="md:col-span-2">
                      <label className={labelClass}>
                        Tutor Name <span className="text-red-500">*</span>
                      </label>

                      <input
                        type="text"
                        name="tutorName"
                        defaultValue={tutorName}
                        className={inputClass}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className={labelClass}>
                        Photo URL <span className="text-red-500">*</span>
                      </label>

                      <input
                        type="text"
                        name="photo"
                        defaultValue={photo}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>
                        Subject / Category{" "}
                        <span className="text-red-500">*</span>
                      </label>

                      <select
                        name="subject"
                        defaultValue={subject}
                        className={inputClass}
                      >
                        <option value="">Select Subject</option>
                        <option value="mathematics">Mathematics</option>
                        <option value="physics">Physics</option>
                        <option value="chemistry">Chemistry</option>
                        <option value="biology">Biology</option>
                        <option value="english">English</option>
                        <option value="computer-science">
                          Computer Science
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className={labelClass}>
                        Teaching Mode <span className="text-red-500">*</span>
                      </label>

                      <select
                        name="teachingMode"
                        defaultValue={teachingMode}
                        className={inputClass}
                      >
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
                        type="text"
                        name="availableTime"
                        defaultValue={availableTime}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>
                        Hourly Fee <span className="text-red-500">*</span>
                      </label>

                      <input
                        type="number"
                        name="hourlyFee"
                        defaultValue={hourlyFee}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>
                        Total Slot <span className="text-red-500">*</span>
                      </label>

                      <input
                        type="number"
                        name="totalSlot"
                        defaultValue={totalSlot}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>
                        Session Start Date{" "}
                        <span className="text-red-500">*</span>
                      </label>

                      <input
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                        name="sessionDate"
                        defaultValue={sessionDate}
                        className={inputClass}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className={labelClass}>
                        Institution & Experience{" "}
                        <span className="text-red-500">*</span>
                      </label>

                      <textarea
                        name="institution"
                        rows={5}
                        defaultValue={institutionExperience}
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className={labelClass}>
                        Location <span className="text-red-500">*</span>
                      </label>

                      <input
                        type="text"
                        name="location"
                        defaultValue={location}
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div className="mt-8 flex flex-col-reverse gap-3 border-t border-border pt-6 sm:flex-row sm:justify-end">
                    <Button
                      className="cursor-pointer rounded-md border border-red-500 py-3 text-sm font-semibold text-red-500 transition hover:bg-red-50 dark:hover:bg-red-500/10"
                      slot="close"
                      variant="secondary"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="cursor-pointer rounded-md bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
                      slot="close"
                    >
                      Update Tutor
                    </Button>
                  </div>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditTutorModal;
