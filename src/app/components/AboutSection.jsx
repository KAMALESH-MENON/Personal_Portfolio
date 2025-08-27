"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";
import { FaPython, FaJava, FaNodeJs, FaHtml5, FaCss3Alt, FaReact, FaAngular, FaGitAlt, FaLinux, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiMysql, SiGnubash } from "react-icons/si";

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
      <div>
        <ul className="list-disc pl-4">
          <li className="flex justify-between">
            <div>
              <p>B.Tech Information Technology</p>
              <p>Sri Krishna College of Technology, Coimbatore, TN</p>
              <p>Aug 2020 – Present</p>
            </div>
            <p className="text-right">
              8.4 CGPA (6<sup>th</sup> semester)
            </p>
          </li>
          <li className="flex justify-between mt-4">
            <div>
              <p>Higher Secondary School</p>
              <p>Kendriya Vidyalaya, Coimbatore, TN</p>
              <p>Apr 2019 – Mar 2020</p>
            </div>
            <p className="text-right">84.2%</p>
          </li>
          <li className="flex justify-between mt-4">
            <div>
              <p>Secondary School</p>
              <p>Kendriya Vidyalaya, Coimbatore, TN</p>
              <p>Apr 2017 – Mar 2018</p>
            </div>
            <p className="text-right">78.6%</p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div>
        <ul className="list-disc pl-4">
          <li>AWS - AWS Academy Cloud Foundations</li>
          <li>Cisco - Introduction to Cybersecurity</li>
          <li>IBM - Python Basics for Data Science</li>
          <li>NPTEL - The Joy of Computing using Python</li>
          <li>NPTEL - Programming in Java</li>
          <li>The Linux Foundation - Introduction to Kubernetes</li>
        </ul>
        <div className="mt-4">
          <Link
            href="/verify-certificate"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Verify Certificate
          </Link>
        </div>
      </div>
    ),
  },
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
          <p className="text-base lg:text-lg">
            I am an enthusiastic, self-motivated, reliable, responsible and
            confident leader and communicator, very willing to learn and develop
            new skills. I can work well both in a team environment and on my own
            initiative.
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
