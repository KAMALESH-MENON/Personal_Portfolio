"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";
import { FaPython, FaJava, FaNodeJs, FaHtml5, FaCss3Alt, FaReact, FaAngular, FaGitAlt, FaLinux, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiMysql, SiGnubash } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";

const SKILLS = [
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
  { name: "JavaScript", icon: <FaReact className="text-yellow-300" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Angular", icon: <FaAngular className="text-red-600" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "C", icon: <FaDatabase className="text-gray-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
  { name: "Bash", icon: <SiGnubash className="text-green-700" /> },
];

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex flex-wrap gap-4">
        {SKILLS.map((skill) => (
          <span
            key={skill.name}
            className="flex items-center gap-2 bg-[#23272F] px-4 py-2 rounded-full shadow hover:scale-105 transition-transform duration-200"
          >
            {skill.icon}
            <span className="font-semibold">{skill.name}</span>
          </span>
        ))}
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-6">
        {/* B.Tech */}
        <div className="relative bg-gradient-to-r from-cyan-900/60 to-blue-900/40 rounded-xl p-5 shadow-lg border-l-4 border-cyan-400 hover:scale-[1.02] transition-transform duration-200">
          <div className="flex items-center gap-4">
            <span className="text-3xl">🎓</span>
            <div>
              <h3 className="text-xl font-bold text-cyan-300">B.Tech Information Technology</h3>
              <p className="text-[#ADB7BE]">Sri Krishna College of Technology, Coimbatore, TN</p>
              <p className="text-sm text-blue-200 flex items-center gap-2">
                Aug 2020 – Jun 2024
                <span className="mx-2 text-cyan-400 font-semibold">|</span>
                <span className="font-semibold text-cyan-200 bg-cyan-900/60 px-3 py-1 rounded-full shadow">
                  8.33 CGPA
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* Higher Secondary */}
        <div className="relative bg-gradient-to-r from-purple-900/60 to-indigo-900/40 rounded-xl p-5 shadow-lg border-l-4 border-purple-400 hover:scale-[1.02] transition-transform duration-200">
          <div className="flex items-center gap-4">
            <span className="text-3xl">🏫</span>
            <div>
              <h3 className="text-xl font-bold text-purple-300">Higher Secondary School</h3>
              <p className="text-[#ADB7BE]">Kendriya Vidyalaya, Coimbatore, TN</p>
              <p className="text-sm text-purple-200 flex items-center gap-2">
                Apr 2019 – Mar 2020
                <span className="mx-2 text-purple-400 font-semibold">|</span>
                <span className="font-semibold text-purple-200 bg-purple-900/60 px-3 py-1 rounded-full shadow">
                  84.2%
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* Secondary School */}
        <div className="relative bg-gradient-to-r from-pink-900/60 to-red-900/40 rounded-xl p-5 shadow-lg border-l-4 border-pink-400 hover:scale-[1.02] transition-transform duration-200">
          <div className="flex items-center gap-4">
            <span className="text-3xl">📚</span>
            <div>
              <h3 className="text-xl font-bold text-pink-300">Secondary School</h3>
              <p className="text-[#ADB7BE]">Kendriya Vidyalaya, Coimbatore, TN</p>
              <p className="text-sm text-pink-200 flex items-center gap-2">
                Apr 2017 – Mar 2018
                <span className="mx-2 text-pink-400 font-semibold">|</span>
                <span className="font-semibold text-pink-200 bg-pink-900/60 px-3 py-1 rounded-full shadow">
                  78.6%
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          {/* Card 1 */}
          <div className="relative group flex items-center gap-4 bg-gradient-to-r from-blue-900/60 to-cyan-900/40 rounded-xl p-4 shadow-lg border-l-4 border-blue-400 hover:scale-[1.02] transition-transform duration-200">
            <span className="text-2xl">☁️</span>
            <div>
              <h4 className="font-bold text-blue-300">AWS Academy Cloud Foundations</h4>
              <p className="text-xs text-blue-200">AWS</p>
            </div>
            <a
              href="https://www.credly.com/badges/1de57294-1007-4587-b759-086593d9d04f"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center bg-cyan-900/80 bg-opacity-80 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ zIndex: 10 }}
            >
              <span className="text-white font-semibold px-4 py-2 bg-cyan-600 rounded-full shadow-lg">View Certification</span>
            </a>
          </div>
          {/* Card 2 */}
          <div className="relative group flex items-center gap-4 bg-gradient-to-r from-green-900/60 to-emerald-900/40 rounded-xl p-4 shadow-lg border-l-4 border-green-400 hover:scale-[1.02] transition-transform duration-200">
            <span className="text-2xl">🔒</span>
            <div>
              <h4 className="font-bold text-green-300">Introduction to Cybersecurity</h4>
              <p className="text-xs text-green-200">Cisco</p>
            </div>
            <a
              href="https://www.credly.com/badges/012aa647-99da-422b-8697-1c041122c8d6"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center bg-green-900/80 bg-opacity-80 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ zIndex: 10 }}
            >
              <span className="text-white font-semibold px-4 py-2 bg-green-600 rounded-full shadow-lg">View Certification</span>
            </a>
          </div>
          {/* Card 3 */}
          <div className="relative group flex items-center gap-4 bg-gradient-to-r from-purple-900/60 to-indigo-900/40 rounded-xl p-4 shadow-lg border-l-4 border-purple-400 hover:scale-[1.02] transition-transform duration-200">
            <span className="text-2xl">🐍</span>
            <div>
              <h4 className="font-bold text-purple-300">Python Basics for Data Science</h4>
              <p className="text-xs text-purple-200">IBM</p>
            </div>
            <a
              href="https://courses.edx.org/certificates/b6689c82e43342f5816427af2deccc0f"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center bg-purple-900/80 bg-opacity-80 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ zIndex: 10 }}
            >
              <span className="text-white font-semibold px-4 py-2 bg-purple-600 rounded-full shadow-lg">View Certification</span>
            </a>
          </div>
          {/* Card 4 */}
          <div className="relative group flex items-center gap-4 bg-gradient-to-r from-pink-900/60 to-red-900/40 rounded-xl p-4 shadow-lg border-l-4 border-pink-400 hover:scale-[1.02] transition-transform duration-200">
            <span className="text-2xl">💻</span>
            <div>
              <h4 className="font-bold text-pink-300">The Joy of Computing using Python</h4>
              <p className="text-xs text-pink-200">NPTEL</p>
            </div>
            <a
              href="https://drive.google.com/file/d/1EynUo3SBX5tTxdHpYnm-36XLLd_qkIK5/view"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center bg-pink-900/80 bg-opacity-80 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ zIndex: 10 }}
            >
              <span className="text-white font-semibold px-4 py-2 bg-pink-600 rounded-full shadow-lg">View Certification</span>
            </a>
          </div>
          {/* Card 5 */}
          <div className="relative group flex items-center gap-4 bg-gradient-to-r from-yellow-900/60 to-orange-900/40 rounded-xl p-4 shadow-lg border-l-4 border-yellow-400 hover:scale-[1.02] transition-transform duration-200">
            <span className="text-2xl">☕</span>
            <div>
              <h4 className="font-bold text-yellow-300">Programming in Java</h4>
              <p className="text-xs text-yellow-200">NPTEL</p>
            </div>
            <a
              href="https://drive.google.com/file/d/1AsQnuWLj7lLnJzJsUIhpDPFjstOB_caj/view"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center bg-yellow-900/80 bg-opacity-80 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ zIndex: 10 }}
            >
              <span className="text-white font-semibold px-4 py-2 bg-yellow-600 rounded-full shadow-lg">View Certification</span>
            </a>
          </div>
          {/* Card 6 */}
          <div className="relative group flex items-center gap-4 bg-gradient-to-r from-gray-900/60 to-slate-900/40 rounded-xl p-4 shadow-lg border-l-4 border-gray-400 hover:scale-[1.02] transition-transform duration-200">
            <span className="text-2xl">🐧</span>
            <div>
              <h4 className="font-bold text-gray-300">Introduction to Kubernetes</h4>
              <p className="text-xs text-gray-200">The Linux Foundation</p>
            </div>
            <a
              href="https://courses.edx.org/certificates/f384e7141c9d4ed1a3d14dc4715f4a5b"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center bg-gray-900/80 bg-opacity-80 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ zIndex: 10 }}
            >
              <span className="text-white font-semibold px-4 py-2 bg-gray-700 rounded-full shadow-lg">View Certification</span>
            </a>
          </div>
        </div>
      </div>
    ),
  },
];

const aboutLines = [
  "Driven. Curious. Collaborative.",
  "I thrive on continuous learning and creative problem-solving.",
  "Whether leading a team or working independently, I bring energy, reliability, and a passion for building meaningful solutions.",
  "I am an enthusiastic, self-motivated, reliable, responsible and confident leader and communicator.",
  "Very willing to learn and develop new skills.",
  "I can work well both in a team environment and on my own initiative.",
  "Let’s connect and create something remarkable together!",
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          alt="Image"
          src="/images/about-image.png"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg font-mono bg-white/10 rounded-xl px-4 py-3 shadow mb-2">
            <span className="text-cyan-400 font-bold">&gt; </span>
            <Typewriter
              words={aboutLines}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={35}
              deleteSpeed={20}
              delaySpeed={1800}
            />
          </p>
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map((tabData) => (
              <TabButton
                key={tabData.id}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}>
                {tabData.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
