import ServiceCard from "./ServiceCard";

export default function ServiceOffer(){
    const serviceInfo = [
        {
            title: "Frontend Development",
            description: "Building responsive and performant web applications using modern technologies and best practices.",
            techStack: ["React", "TypeScript", "Tailwind CSS", "MUI"]
        },
        {
            title: "Backend Development",
            description: "Building scalable and secure backend services using modern technologies and best practices.",
            techStack: ["Node.js", "TypeScript", "Express", "NestJS"]
        },
    ]

    return(
        <div className="w-full h-auto flex flex-col items-center justify-center p-4 gap-6" id="services">
            <h1 className="sm:text-sm md:text-2xl lg:text-[28px] font-bold">My Services</h1>

            <span className="w-[60%] text-[14px] text-center font-light tracking-wide">
                I offer comprehensive front-end and back-end development services to bring your digital ideas to life. From concept to deployment, I've got you covered.
            </span>

            <div className="w-full h-auto flex flex-row items-center justify-center p-4 gap-6">
                {serviceInfo.map((service, index) => (
                    <ServiceCard key={index} serviceInfo={service}/>
                ))}
            </div>
        </div>
    );
}