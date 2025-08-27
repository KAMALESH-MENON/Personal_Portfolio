"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => import("react-animated-numbers"),
  { ssr: false }
);

const LEETCODE_USERNAME = "kamalcbe86"; // <-- update with your username

const AchievementsSection = () => {
  const [leetcodeSolved, setLeetcodeSolved] = useState(null);

  useEffect(() => {
    // Example using leetcode-stats-api (unofficial)
    fetch(`https://leetcode-stats-api.herokuapp.com/${LEETCODE_USERNAME}`)
      .then((res) => res.json())
      .then((data) => {
        setLeetcodeSolved(data.totalSolved);
      })
      .catch(() => setLeetcodeSolved(null));
  }, []);

  const achievementsList = [
    {
      metric: "Projects",
      value: 10,
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
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {achievement.prefix}
              {achievement.value === null && achievement.metric === "Leetcode Solved" ? (
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
