import reactIcon from "../assets/react.svg";
import htmlIcon from "../assets/html.svg";
import cssIcon from "../assets/css.svg"
import tailwindIcon from "../assets/tailwind.svg"
import jsIcon from "../assets/javascript.svg"
import nodeJsIcon from "../assets/node.svg"
import expressJsIcon from "../assets/expressJs.svg"

export default function TechShowcase({ className }: { className: any }) {
  const techIcons: string[] = [htmlIcon,cssIcon,tailwindIcon,jsIcon,reactIcon,nodeJsIcon,expressJsIcon];

  return (
    <div className={className}>
      <p className="text-[18px] border-r-2 py-2 px-5">Tech Stack </p>

      <div className="flex flex-row items-center gap-3">
        {techIcons.map((techIcon) => (
          <img src={techIcon} alt="" />
        ))}
      </div>
    </div>
  );
}
