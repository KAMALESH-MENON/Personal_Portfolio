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
      <ul className="list-disc pl-2">
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
      <div className="flex flex-row">
        <div>
          <ul className="list-disc ">
            <div className="flex justify-between">
              <div className="w-2.75/3">
                <li>B.Tech Information Technology</li>
                <ul>
                  Sri Krishna College of Technology Coimbatore, TN
                  <br />
                  Aug 2020 – Present
                </ul>
              </div>
              <div className="w-1/3 text-right">
                8.4 CGPA
                <br />
                (6<sup>th</sup> semester)
              </div>
            </div>

            <br />

            <div className="flex justify-between">
              <div className="w-0.25/3">
                <li>HIGHER SECONDARY CERTIFICATE</li>
                <ul>
                  Kendriya Vidyalaya
                  <br />
                  Coimbatore, TN
                  <br />
                  Apr 2019 – Mar 2020
                </ul>
              </div>
              <div className="text-right">84.2%</div>
            </div>

            <br />

            <div className="flex justify-between">
              <div className="w-2/3">
                <li>SECONDARY SCHOOL CERTIFICATE</li>
                <ul>
                  Kendriya Vidyalaya
                  <br />
                  Coimbatore, TN
                  <br />
                  Apr 2017 – Mar 2018
                </ul>
              </div>
              <div className="text-right">78.6%</div>
            </div>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div>
        <ul className="list-disc pl-2">
          <li>AWS - AWS Academy Cloud Foundations </li>
          <li>Cisco - Introduction to Cybersecurity</li>
          <li>IBM - Python Basics for Data Science</li>
          <li>NPTEL - The Joy of Computing using Python</li>
          <li>NPTEL - Programming in Java</li>
          <li>The Linux Foundation - Introduction to Kubernetes </li>
        </ul>
        <div className="mt-4">
          <Link
            className="bg-blue-500 text-white px-4 py-2 rounded"
            href="/verify-certificate">
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
        <Image alt="Image" src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am an enthusiastic, self-motivated, reliable, responsible confident leader, communicator and very willing to learn and develop new skill. I am able to work well both in a team environment as well as using own initiative.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}>
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}>
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}>
              {" "}
              Certifications{" "}
            </TabButton>
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
