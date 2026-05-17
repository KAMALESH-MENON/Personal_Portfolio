"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [sortBy, setSortBy] = useState("updated");
  const [projectsData, setProjectsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        setLoadError("");

        const response = await fetch("/api/github-projects", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Unable to fetch GitHub projects");
        }

        const data = await response.json();
        setProjectsData(data.projects || []);
      } catch (error) {
        setLoadError("Could not load projects right now.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const availableTags = useMemo(() => {
    const dynamicTags = new Set(["All"]);

    projectsData.forEach((project) => {
      (project.tag || []).forEach((projectTag) => dynamicTags.add(projectTag));
    });

    return Array.from(dynamicTags);
  }, [projectsData]);

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const sortedProjects = useMemo(() => {
    const projectsList = [...filteredProjects];

    if (sortBy === "stars") {
      return projectsList.sort((a, b) => (b.stars || 0) - (a.stars || 0));
    }

    return projectsList.sort(
      (a, b) => new Date(b.updatedAt || 0) - new Date(a.updatedAt || 0)
    );
  }, [filteredProjects, sortBy]);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="relative py-12">
      {/* Animated background sparkles */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-[#23272F] via-[#1e293b]/80 to-[#23272F] opacity-70 blur-2xl animate-gradient-move" />
      </div>
      <h2 className="relative z-10 text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-cyan-400 to-purple-400 mt-4 mb-8 md:mb-12 drop-shadow-lg flex items-center justify-center gap-2">
        <SparklesIcon className="w-8 h-8 text-pink-400 animate-bounce" />
        My Projects
        <SparklesIcon className="w-8 h-8 text-cyan-400 animate-bounce" />
      </h2>
      <div className="relative z-10 text-white flex flex-row justify-center items-center gap-2 py-6">
        {availableTags.map((availableTag) => (
          <ProjectTag
            key={availableTag}
            onClick={handleTagChange}
            name={availableTag}
            isSelected={tag === availableTag}
          />
        ))}
      </div>
      <div className="relative z-10 flex justify-center gap-2 pb-6">
        <button
          onClick={() => setSortBy("updated")}
          className={`px-4 py-2 rounded-full border text-sm transition ${
            sortBy === "updated"
              ? "border-cyan-400 text-cyan-300"
              : "border-[#ADB7BE] text-[#ADB7BE]"
          }`}>
          Latest Updated
        </button>
        <button
          onClick={() => setSortBy("stars")}
          className={`px-4 py-2 rounded-full border text-sm transition ${
            sortBy === "stars"
              ? "border-pink-400 text-pink-300"
              : "border-[#ADB7BE] text-[#ADB7BE]"
          }`}>
          Most Starred
        </button>
      </div>
      {isLoading && (
        <p className="relative z-10 text-center text-cyan-300">Loading GitHub projects...</p>
      )}
      {loadError && (
        <p className="relative z-10 text-center text-pink-400">{loadError}</p>
      )}
      {!isLoading && !loadError && filteredProjects.length === 0 && (
        <p className="relative z-10 text-center text-cyan-300">No projects found for this tag.</p>
      )}
      <ul ref={ref} className="relative z-10 grid md:grid-cols-3 gap-8 md:gap-12">
        {sortedProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4, delay: index * 0.3 }}>
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
      <style jsx global>{`
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
