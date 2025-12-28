import { Link } from "react-router-dom";
import WorkShowcase from "./WorkShowcae";


export default function WorkDoneSection(){
    return(
        <div className="w-full h-auto flex flex-col items-center justify-center p-6 mt-4 gap-4" id="works">
            <h1 className="sm:text-sm md:text-2xl lg:text-[28px] font-bold">Latest Works</h1>
            <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px] font-light">Explore my recent projects that showcase my skills in development</p>

            <div className="w-full h-auto flex flex-col items-center justify-center gap-5">
                <WorkShowcase/>
                <WorkShowcase/>
                <WorkShowcase/>
            </div>
            <Link to="/work" className="w-[20%] text-[14px] font-light text-center mt-10 px-3 py-2 rounded-2xl border border-[#17a1d7] dark:border-[#0ee21c] bg-[#17a1d7] dark:bg-[#0ee21c] text-[#ffffff] dark:text-[#000000]">View All Projects </Link>
        </div>
    );
}