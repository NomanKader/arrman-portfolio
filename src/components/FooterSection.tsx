import AboutPart from "./AboutPart";
import ContactPart from "./ContactPart";
import QuickLinksPart from "./QuickLinksPart";

export default function FooterSection() {
    return (
        <>
            <footer className="flex flex-col md:flex-row flex-wrap justify-between p-10 gap-8 mx-5 md:mx-10 border-b border-gray-500 ">
                <AboutPart/>
                <QuickLinksPart/>
                <ContactPart/>
            </footer>
            <p className="text-center text-[12px] mt-2 p-2">© 2025 Arr Mann</p>
        </>
    )
}