import { Link } from "react-router-dom";
import tag from "../assets/tag.svg";

export default function WorkShowcase() {
  return (
    <div className="w-full h-auto flex flex-row flex-wrap items-center p-5 gap-5">
      <div className="w-[65%] h-[500px] border border-[#eee7e7] dark:border-[#0f0f0f] bg-gray-500 rounded-2xl">
        {/* <img
          src="https://via.placeholder.com/200"
          alt="Poster"
        /> */}
      </div>

      <div className="w-[30%] h-full flex flex-col flex-wrap items-start gap-6 p-2">
        <p className="text-[14px] font-light text-center px-3 py-2 rounded-2xl border border-[#17a1d7] dark:border-[#0ee21c] bg-[#17a1d7] dark:bg-[#0ee21c] text-[#ffffff] dark:text-[#000000]">Personal</p>
        
        <h1 className="text-[20px] md:text-[24px] lg:text-[30px] font-bold leading-10">Redesign Hi-Internet Application </h1>

        <span className="text-[14px] font-light tracking-wide">
            loren ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime modi consequatur quasi accusamus animi nisi vitae 
            dolores minima consequuntur esse saepe exercitationem id quia cum
                quibusdam odit ea, unde similique?
        </span>

        <div className="flex flex-col items-start gap-4">
            <div className="flex flex-row items-center gap-2">
                <img src={tag} alt="" />
                <h3>Tech Stack</h3>
            </div>
            
            <div className="flex flex-row flex-wrap items-center gap-2">
                <p className="text-[12px] font-light text-center px-3 py-2 rounded-2xl border bg-[#d1d8da] dark:bg-[#313431]">React</p>
                <p className="text-[12px] font-light text-center px-3 py-2 rounded-2xl border bg-[#d1d8da] dark:bg-[#313431]">Node.js</p>
                <p className="text-[12px] font-light text-center px-3 py-2 rounded-2xl border bg-[#d1d8da] dark:bg-[#313431]">Tailwind CSS</p>
                <p className="text-[12px] font-light text-center px-3 py-2 rounded-2xl border bg-[#d1d8da] dark:bg-[#313431]">Express.js</p>
            </div>

            <Link to="/work/1" className="w-full text-[14px] font-light text-center mt-2 px-3 py-2 rounded-2xl border border-[#17a1d7] dark:border-[#0ee21c] bg-[#17a1d7] dark:bg-[#0ee21c] text-[#ffffff] dark:text-[#000000]">View Project Details</Link>
        </div>
      </div>
    </div>
  )
}
