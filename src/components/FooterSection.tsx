import AboutPart from "./AboutPart";
import ContactPart from "./ContactPart";
import QuickLinksPart from "./QuickLinksPart";

export default function FooterSection() {
    return (
        <>
            <footer className="w-full flex flex-row flex-wrap justify-between p-13 mx-10 border-b border-gray-500 ">
                <AboutPart/>
                <QuickLinksPart/>
                <ContactPart/>
            </footer>
            <p className="text-center text-[12px] mt-2 p-2">© 2025 Arr Mann</p>
        </>
    )
}