import { Link } from "react-router-dom";
import { ToggleTheme } from "./lightswind/ToggleTheme";

export default function NavBar() {
  return (
    <div className="w-full h-20 sticky top-0 flex flex-row justify-between items-center p-4 z-70 backdrop-blur-2xl">
      <h1>Portfolio</h1>

      <div className="flex flex-row items-center gap-10">
        <Link to="/">Portfolio</Link>
        <Link to="/works">Works</Link>
      </div>

      <ToggleTheme
        duration={600}
        animationType="circle-spread"
      />
    </div>
  );
}
