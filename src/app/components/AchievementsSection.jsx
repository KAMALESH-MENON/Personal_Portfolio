"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const GITHUB_USERNAME = "KAMALESH-MENON";

const AchievementsSection = () => {
  const [leetcodeSolved, setLeetcodeSolved] = useState(null);
  const [githubProjects, setGithubProjects] = useState(null);

  useEffect(() => {
    // New internal LeetCode fetch
    fetch("/api/leetcode")
      .then((res) => res.json())
      .then((data) => {
        setLeetcodeSolved(data.totalSolved);
      })
      .catch(() => setLeetcodeSolved(0));

    // GitHub fetch
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((res) => res.json())
      .then((data) => {
        setGithubProjects(data.public_repos);
      })
      .catch(() => setGithubProjects(0));
  }, []);

  const achievementsList = [
    {
      metric: "Projects",
      value: githubProjects !== null ? githubProjects : null,
      postfix: "+",
    },
    {
      metric: "Leetcode Solved",
      value: leetcodeSolved !== null ? leetcodeSolved : null,
      postfix: "+",
    },
    {
      metric: "Certifications",
      value: 11,
      postfix: "+",
    },
  ];

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {achievement.prefix}
              {achievement.value === null &&
              achievement.metric === "Leetcode Solved" ? (
                <span className="text-base text-gray-400 ml-2">Loading...</span>
              ) : (
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => ({
                    mass: 1,
                    friction: 100,
                    tensions: 140 * (index + 1),
                  })}
                />
              )}
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
