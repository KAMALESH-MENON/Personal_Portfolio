"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4">
        <li>Python</li>
        <li>Java</li>
        <li>MySQL</li>
        <li>Node.js</li>
        <li>HTML/CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Angular</li>
        <li>TypeScript</li>
        <li>C</li>
        <li>Git</li>
        <li>Bash</li>
      </ul>
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
          <Link href="/verify-certificate">
            <a className="bg-blue-500 text-white px-4 py-2 rounded">
              Verify Certificate
            </a>
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
