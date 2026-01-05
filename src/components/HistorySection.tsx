import EducationDetail from "./EducationDetail";
import WorkExperienceSection from "./WorkExperienceSection";

export default function HistorySection(){
    return(
        <div className="w-full h-auto flex flex-col md:flex-row justify-between px-5 gap-4 slide">
            <EducationDetail/>
            <WorkExperienceSection/>
        </div>
    );
}