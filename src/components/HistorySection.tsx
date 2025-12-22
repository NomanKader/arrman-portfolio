import EducationDetail from "./EducationDetail";
import WorkSection from "./WorkSection";

export default function HistorySection(){
    return(
        <div className="w-full h-auto flex flex-row justify-between px-5 gap-4 slide">
            <EducationDetail/>
            <WorkSection/>
        </div>
    );
}