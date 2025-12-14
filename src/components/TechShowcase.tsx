export default function TechShowcase({ className,showCaseText,techIcons }: { className: any, showCaseText:string, techIcons:string[]}) {
  return (
    <div className={className}>
      <p className="text-[16px] border-r-2 py-2 px-5">{showCaseText}</p>

      <div className="flex flex-row flex-wrap items-center gap-3">
        {techIcons.map((techIcon) => (
          <img src={techIcon} alt="" />
        ))}
      </div>
    </div>
  );
}
