export default function QuickLinksPart() {
  return (
    <div className="w-full md:w-[30%] flex flex-col items-center gap-4 text-center">
      <h1 className="text-2xl font-bold">Quick Links</h1>

      <ul className="flex flex-col items-center gap-2">
        <li className="text-[14px] font-light hover:cursor-pointer"><a href="#about">About</a></li>
        <li className="text-[14px] font-light hover:cursor-pointer"><a href="#works">Works</a></li>
        <li className="text-[14px] font-light hover:cursor-pointer"><a href="#services">Services</a></li>
      </ul>
    </div>
  );
}
