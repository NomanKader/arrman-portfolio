import backgroundImage from "../assets/img/background.jpg";
import InfoPart from "./InfoPart";

export default function CollabSection() {
  const infoDetails = [
    { title: "0 Year+", subtitle: "Work Experience" },
    { title: "0", subtitle: "Real-World Projects" },
    { title: "0", subtitle: "Personal Projects" },
    { title: "0", subtitle: "Components" },
  ];
  return (
    <div className="relative w-full h-100 p-3 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      <div className="absolute inset-0 bg-white/80 dark:bg-black/60" />

      <div className="relative flex flex-col z-10 text-black dark:text-white p-10 gap-7">
        <h1 className="sm:text-sm md:text-3xl lg:text-5xl font-black">
          Work with me
        </h1>

        <p className="w-[700px] sm:text-sm md:text-lg lg:text-xl font-light tracking-wide">
          With 0 years + of experience and 0+ successful projects delivered, I bring proven expertise in front-end and back-end development. Let's create something amazing together.
        </p>

        <div className="w-full flex flex-row p-3 gap-5 justify-between">
          <InfoPart infoDetails={infoDetails} />
        </div>
      </div>
    </div>
  );
}
