import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPart() {
  return (
    <div className="w-[30%] flex flex-col items-center gap-6 text-center">
      <h1 className="sm:text-sm md:text-2xl lg:text-[24px] font-bold">
        Get In Touch
      </h1>

      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center">
            <Mail className="text-blue-600 w-4 h-4" />
          </div>
          <p className="text-[14px]">arrmann632025@gmail.com</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center">
            <Phone className="text-blue-600 w-4 h-4" />
          </div>
          <p className="text-[14px]">+95-9777217538</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center">
            <MapPin className="text-blue-600 w-4 h-4" />
          </div>
          <p className="text-[14px]">Yangon, Myanmar</p>
        </div>
      </div>
    </div>
  );
}
