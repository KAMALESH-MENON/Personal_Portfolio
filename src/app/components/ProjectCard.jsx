import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, techStack, description, gitUrl, previewUrl }) => {
  return (
    <div className="group rounded-2xl shadow-xl bg-gradient-to-br from-[#23272F]/80 to-[#1e293b]/80 hover:scale-[1.03] transition-transform duration-300 border border-[#23272F] overflow-hidden relative">
      <div
        className="h-52 md:h-72 rounded-t-2xl relative group"
        style={{
          background: `url(${imgUrl}) center center / cover no-repeat`,
          filter: "brightness(0.85)",
        }}>
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-pink-400 group/link transition">
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-pink-400 transition" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-cyan-400 group/link transition">
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-cyan-400 transition" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-2xl mt-0 bg-[#181818]/80 py-6 px-6">
        <h5 className="text-2xl font-bold mb-2 bg-gradient-to-r from-pink-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
          {title}
        </h5>
        <p className="text-cyan-300 mb-2 font-mono text-sm">Tech Stack: {techStack}</p>
        <p className="text-[#ADB7BE] text-sm">{description}</p>
      </div>
      {/* Decorative Glow */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-8 bg-gradient-to-r from-pink-400 via-cyan-400 to-purple-400 blur-2xl opacity-30 pointer-events-none" />
    </div>
  );
};

export default ProjectCard;
