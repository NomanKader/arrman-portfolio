export default function CertificateCard({logo,programYear,collegeName,paragraph}:{logo:string,programYear:string,collegeName:string,paragraph:string}){
    return(
        <div className="w-[45%] flex flex-col gap-1 justify-center items-center text-center animate-slide-right">
            <img src={logo} alt="YIC" className="lg:w-45"/>
            <p className="text-sm">{programYear}</p>
            <p className="text-base font-bold">{collegeName}</p>
            <p className="text-xs mt-1">{paragraph}</p>
        </div>
    );
}