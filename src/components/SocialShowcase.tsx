import linkedInIcon from "../assets/linkedin.svg";
import gitHubIcon from "../assets/gitHub.svg";

export default function SocialShowcase() {
  return (
    <div className="w-full flex flex-row justify-between items-center px-2">
      <div className="flex flex-row items-center p-3 gap-2">
        <a href="https://www.linkedin.com/in/arr-mann-130126379/">
          <img
            src={linkedInIcon}
            alt="LinkedIn Icon"
            className="bg-white rounded-3xl hover:scale-125"
          />
        </a>
        <a href="https://github.com/ArrMannDev" >
          <img 
            src={gitHubIcon} 
            alt="GitHub Icon"
            className="bg-white rounded-3xl hover:scale-125" 
          />
        </a>
      </div>

      <a href="" className="text-[18px] underline">CV Form</a>
    </div>
  );
}
