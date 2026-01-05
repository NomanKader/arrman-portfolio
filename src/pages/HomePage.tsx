import Banner from "../components/Banner";
import profilePicture from "../assets/img/profilePicture.png";
import HistorySection from "../components/HistorySection";
import CollabSection from "../components/CollabSection";
import WorkDoneSection from "../components/WorkDoneSection";
import ServiceOffer from "../components/ServiceOffer";
import FooterSection from "../components/FooterSection";

export default function HomePage() {
  const introText =
    "Experienced in front-end and back-end development, I combine clean design with strong logic to build efficient, user-friendly web applications.";
  return (
    <>
      <Banner
          image={profilePicture}
          title="Arr Mann"
          subheading="I'm a Full-Stack Developer"
          paragraph={introText}
      />
      <HistorySection/>
      <CollabSection/>
      <WorkDoneSection/>
      <ServiceOffer/>
      <FooterSection/>
    </>
  );
}
