import BeamGridBackground from "./lightswind/BeamGridBackground";
import { TypingText } from "./lightswind/TypingText";
import TechShowcase from "./TechShowcase";
import reactIcon from "../assets/react.svg";
import htmlIcon from "../assets/html.svg";
import cssIcon from "../assets/css.svg";
import tailwindIcon from "../assets/tailwind.svg";
import jsIcon from "../assets/javascript.svg";
import nodeJsIcon from "../assets/node.svg";
import expressJsIcon from "../assets/expressJs.svg";
import SocialShowcase from "./SocialShowcase";

export default function Banner({
  image,
  title,
  subheading,
  paragraph,
}: {
  image: string;
  title: string;
  subheading: string;
  paragraph: string;
}) 
{
  const techIcons: string[] = [htmlIcon,cssIcon,tailwindIcon,jsIcon,reactIcon,nodeJsIcon,expressJsIcon];
  return (
    <div className="w-full h-150 flex items-center justify-center cursor-none">
      <BeamGridBackground
        gridSize={40}
        gridColor="#d1d5db"
        darkGridColor="#1f2937"
        beamColor="rgba(0,180,255,0.8)"
        darkBeamColor="rgba(0,255,255,0.8)"
        beamCount={8}
        extraBeamCount={3}
        beamThickness={3}
        beamGlow
        glowIntensity={50}
        idleSpeed={1.15}
      />

      <div className="max-w-3xl w-full flex flex-col items-center z-20 text-center gap-4">
        <img
          src={image}
          alt="profile-picture"
          className="w-50 h-50 border-2 rounded-full overflow-hidden"
        />

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl ">
          {title}
        </h1>

        <TypingText
          delay={0.5}
          duration={2}
          fontSize="text-[20px]"
          align="center"
        >
          {subheading}
        </TypingText>

        <p className="text-sm tracking-wider text-center">{paragraph}</p>

        <TechShowcase
          className="w-full flex flex-row justify-center items-center gap-5"
          showCaseText="Tech Stack"
          techIcons={techIcons}
        />

        <SocialShowcase/>
      </div>
    </div>
  );
}
