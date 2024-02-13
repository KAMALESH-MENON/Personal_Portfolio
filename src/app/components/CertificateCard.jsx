// CertificateCard.jsx
import React from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const CertificateCard = ({ imgUrl, verifyUrl }) => {
  return (
    <div className="relative group">
      <div
        className="h-52 md:h-72 rounded-t-xl relative"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
        }}>
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={verifyUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
