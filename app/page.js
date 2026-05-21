import AvailableTutors from "./components/AvailableTutors";
import Banner from "./components/Banner";

export const metadata = {
  title: "Home | MediQueue - Online Learning & Tutoring Platform",
  description:
    "Welcome to MediQueue, an online learning and tutoring platform where students can learn new skills and teachers can share knowledge through interactive courses and personalized tutoring.",
};

export default function Home() {
  
  return (
    <div>
      <Banner />
      <AvailableTutors />
    </div>
  );
}
