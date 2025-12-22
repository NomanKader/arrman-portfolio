import backgroundImage from "../assets/img/background.jpg";

export default function CollabSection() {
  return (
    <div className="relative w-full h-100 p-3 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      <div className="absolute inset-0 bg-white/80 dark:bg-black/60" />

      <div className="relative flex flex-col z-10 text-black dark:text-white p-10">
        <h1 className="sm:text-sm md:text-3xl lg:text-6xl font-black">
          Work with me
        </h1>
      </div>
    </div>
  );
}
