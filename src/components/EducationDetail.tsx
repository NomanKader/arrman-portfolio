import CertificateCard from "./CertificateCard";
import YICLogo from "../assets/img/YIC.png";

export default function EducationDetail() {
  return (
    <div className="w-[50%] h-auto flex flex-col flex-wrap items-center gap-10 mb-15 -mt-7 px-5 border-r-2 ">
      <h1 className="text-3xl">Education</h1>

      <div className="w-full flex flex-row flex-wrap justify-center p-3 gap-8">
        <CertificateCard
          logo={YICLogo}
          programYear="2021-2022"
          collegeName="Youth International College"
          paragraph="Pearson (BTEC) International Level 3 Foundation Diploma in Information Technology"
        />

        <CertificateCard
          logo={YICLogo}
          programYear="2023-2025 (Present)"
          collegeName="Youth International College"
          paragraph="Pearson (BTEC) International Level 4 and Level 5 Higher National Diploma(HND) in Computing"
        />
      </div>
    </div>
  );
}
