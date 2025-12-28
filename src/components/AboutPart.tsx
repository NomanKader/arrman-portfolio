import SocialShowcase from "./SocialShowcase";

export default function AboutPart(){
    return(
        <div className="w-[30%] flex flex-col justify-start items-start gap-4">
            <h1 className="text-2xl font-bold">Arr Mann</h1>

            <p className="text-[14px] text-light">
                Creating digital experiences that blend beautiful design with seamless functionality. Let's build something amazing together.
            </p>

            <SocialShowcase/>
        </div>
    );
}