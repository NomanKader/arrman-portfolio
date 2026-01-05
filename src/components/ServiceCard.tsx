type ServiceCard = {
  title: string;
  description: string;
  techStack: string[];
};

interface ServiceCardProps {
  serviceInfo: ServiceCard;
}

export default function ServiceCard({ serviceInfo }: ServiceCardProps) {
  return (
    <div
      className="
        relative w-full md:w-[45%] lg:w-[30%]
        rounded-2xl
        p-7
        flex flex-col gap-4
        border border-green-100
        transition-all duration-300 ease-in-out
        hover:shadow-xl
        hover:-translate-y-2
      "
    >
      <div className="w-12 h-12 rounded-xl bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center">
        <span className="text-white text-xl font-bold">&lt;/&gt;</span>
      </div>

      <h2 className="text-2xl font-bold">
        {serviceInfo.title}
      </h2>

      <p className="text-[14px] text-light leading-relaxed">
        {serviceInfo.description}
      </p>

      <ul className="flex flex-col gap-2 mt-2">
        {serviceInfo.techStack.map((tech, index) => (
          <li key={index} className="flex items-center gap-3">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}
