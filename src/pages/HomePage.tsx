import Banner from "../components/Banner";
import profilePicture from "../assets/img/profilePicture.png";
import HistorySection from "../components/HistorySection";

export default function HomePage() {
  const introText =
    "Experienced in front-end and back-end development, I combine clean design with strong logic to build efficient, user-friendly web applications.";
  return (
    <>
      <div className="w-full h-screen">
        <Banner
          image={profilePicture}
          title="Arr Mann"
          subheading="I'm a Full-Stack Developer"
          paragraph={introText}
        />
      </div>

      <HistorySection/>
    </>
  );
}
