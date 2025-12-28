type InfoDetail = {
  title: string;
  subtitle: string;
};

type InfoPartProps = {
  infoDetails: InfoDetail[];
};

export default function InfoPart({ infoDetails }: InfoPartProps) {
  return (
    <div className="w-full flex flex-wrap justify-between gap-5">
      {infoDetails.map((item, index) => (
        <div
          key={index}
          className="flex-1 min-w-[150px] flex flex-col items-center justify-center p-3 gap-2"
        >
          <h1 className="text-xl md:text-2xl font-bold">
            {item.title}
          </h1>
          <p className="text-sm font-light text-center">
            {item.subtitle}
          </p>
        </div>
      ))}
    </div>
  );
}
