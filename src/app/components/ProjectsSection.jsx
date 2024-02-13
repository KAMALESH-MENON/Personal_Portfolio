"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    techStack: "React, Next.js, Tailwind CSS",
    description:
      "Developed and maintained a personal portfolio website showcasing my professional journey, skills, and notable projects. The platform serves as a dynamic resume, providing a comprehensive overview of my expertise and work samples for prospective employers and collaborators. ",
    image: "/images/projects/Portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Smart Adaptor",
    techStack: "Python, C++, Flask, Serverless Postgres Neon",
    description:
      "A transformative solution designed to intelligently control energy usage. Beyond traditional functions, it tracks usage patterns, offers personalized efficiency suggestions, and provides real-time electricity bill predictions. This device not only optimizes energy efficiency but also fosters transparency and awareness about individual appliance consumption, presenting a pioneering solution for a sustainable energy future.",
    image: "/images/projects/smartAdaptor.png",
    tag: ["All", "Web", "IoT"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Travel and Tourism Management",
    techStack: "Core JAVA, MySQL ",
    description:
      "This project, incorporating JDBC, empowers users to streamline tour planning, organize travel arrangements, and manage accommodations with ease through an intuitive graphical interface.",
    image: "/images/projects/travelAndTourismManagement.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Weather App",
    techStack: "Angular, TypeScript",
    description:
      "Created a responsive Angular Weather App, delivering real-time weather updates for a specific city. Proficient in Angular, API integration, and ensuring a user-friendly experience for accessing accurate localized weather forecasts.",
    image: "/images/projects/weatherApp.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/KAMALESH-MENON/weatherApp",
    previewUrl: "https://weather-app-wheat-seven.vercel.app/",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="IoT"
          isSelected={tag === "IoT"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}>
            <ProjectCard
              key={project.id}
              title={project.title}
              techStack={project.techStack}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
