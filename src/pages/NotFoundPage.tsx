import notFoundPage from "../assets/img/funny-404-error-page-design.gif"

export default function NotFoundPage(){
    return(
        <div className="w-full flex flex-col items-center justify-center mt-22 gap-2">
            <img src={notFoundPage} alt="404 Not Found" className="w-120 h-90 bg-transparent rounded-2xl"/>

            <h5 className="text-2xl font-bold -mt-18 leading-9 dark:text-black">Look like you're lost</h5>
            <p className="text-[11px] leading-5 dark:text-black -mt-2">the page you are looking for not available!!</p>
            <a href="/" className="text-xs border border-black py-2 px-5 rounded-2xl mt-3 bg-cyan-300 hover:bg-cyan-500">Go to Home</a>
        </div>
    );
}