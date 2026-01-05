import { Link } from "react-router-dom";
import { ToggleTheme } from "./lightswind/ToggleTheme";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full h-20 flex items-center justify-between px-8 backdrop-blur-xl bg-black/20">
      
      <h1 className="text-lg font-semibold">Portfolio</h1>

      <nav className="flex items-center gap-10">
        <Link to="/" className="hover:opacity-70">Portfolio</Link>
        <Link to="/works" className="hover:opacity-70">Works</Link>
      </nav>

      <ToggleTheme duration={600} animationType="circle-spread" />
    </header>
  );
}
