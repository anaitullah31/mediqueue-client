import TutorCard from "../components/TutorCard";

const TutorsPage = () => {
  const tutors = [
    {
      id: 1,
      tutorName: "Dr. Sarah Ahmed",
      photo: "https://i.ibb.co/21tJVMcc/person3.jpg",
      subject: "Biology",
      availableTime: "Sun - Thu 5:00 PM - 8:00 PM",
      hourlyFee: 800,
      totalSlot: 20,
      sessionStartDate: "2026-05-25",
      institutionExperience:
        "MBBS, Dhaka Medical College | 5 years teaching experience",
      location: "Dhanmondi, Dhaka",
      teachingMode: "Online",
    },
    {
      id: 2,
      tutorName: "Md. Rakib Hasan",
      photo: "https://i.ibb.co/Y4Nfk4yz/person7.jpg",
      subject: "Mathematics",
      availableTime: "Sat - Wed 6:00 PM - 9:00 PM",
      hourlyFee: 600,
      totalSlot: 15,
      sessionStartDate: "2026-06-01",
      institutionExperience: "BUET Graduate | 3 years tutoring experience",
      location: "Uttara, Dhaka",
      teachingMode: "Both",
    },
    {
      id: 3,
      tutorName: "Nusrat Jahan",
      photo: "https://i.ibb.co/DDjy0thN/person6.jpg",
      subject: "English",
      availableTime: "Fri - Tue 4:00 PM - 7:00 PM",
      hourlyFee: 500,
      totalSlot: 18,
      sessionStartDate: "2026-05-28",
      institutionExperience: "MA in English Literature | IELTS Instructor",
      location: "Chattogram",
      teachingMode: "Offline",
    },
    {
      id: 4,
      tutorName: "Tanvir Islam",
      photo: "https://i.ibb.co/LXczTNmC/person4.jpg",
      subject: "Physics",
      availableTime: "Sun - Thu 7:00 PM - 10:00 PM",
      hourlyFee: 750,
      totalSlot: 12,
      sessionStartDate: "2026-06-05",
      institutionExperience: "MSc in Physics | HSC Board Instructor",
      location: "Rajshahi",
      teachingMode: "Online",
    },
    {
      id: 5,
      tutorName: "Afiya Rahman",
      photo: "https://i.ibb.co/vGZfTdd/person5.jpg",
      subject: "Computer Science",
      availableTime: "Mon - Fri 8:00 PM - 11:00 PM",
      hourlyFee: 1000,
      totalSlot: 10,
      sessionStartDate: "2026-06-10",
      institutionExperience:
        "Software Engineer at Tech Company | MERN Stack Mentor",
      location: "Sylhet",
      teachingMode: "Both",
    },
  ];
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
  {/* Header */}
  <div className="mb-14 text-center">
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
      Expert Tutors
    </p>

    <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
      Find Your Perfect Tutor
    </h1>

    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
      Learn from experienced tutors across Mathematics, Physics,
      Biology, Computer Science, English, and more. Book
      personalized sessions based on your schedule and learning goals.
    </p>
  </div>

  {/* Cards */}
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {tutors.map((tutor) => (
      <TutorCard key={tutor.id} tutor={tutor} />
    ))}
  </div>
</div>
  );
};

export default TutorsPage;
