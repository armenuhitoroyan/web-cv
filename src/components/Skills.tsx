import React, { useEffect, useState } from "react";
import styles from "../style/AboutPage.module.css";

interface SkillCardProps {
  start: number;
  end: number;
  duration: number; // in milliseconds
  label: string;
  percentage: number;
  skill: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  skill,
  start,
  end,
  duration,
}) => {
  const [progress, setProgress] = useState(start);

  useEffect(() => {
    const stepTime = duration / (end - start);
    let currentProgress = start;

    const interval = setInterval(() => {
      if (currentProgress < end) {
        currentProgress++;
        setProgress(currentProgress);
      } else {
        clearInterval(interval);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [start, end, duration]);

  return (
    <div className={`${styles.skill_card}`}>
      <h2 className="text-3xl font-bold">{progress}%</h2>
      <p>{skill}</p>
      <div style={{ width: "100%", height: "100%" }}>
        <div
          className={styles.skills_progress}
          style={{ width: `${progress}%`, background: "#6928e6" }}
        ></div>
      </div>
    </div>
  );
};

type LayoutProps = {
  isGridLayout: boolean; // True -> Grid layout, False -> Inline layout
};

const Skills: React.FC<LayoutProps> = ({ isGridLayout }) => {
  const skills = [
    { start: 4, percentage: 50, skill: "Graphic Design" },
    { start: 18, percentage: 75, skill: "Development" },
    { start: 7, percentage: 38, skill: "Marketing Ideas" },
    { start: 10, percentage: 63, skill: "Web Management" },
  ];

  return (
    <div
      className={`${isGridLayout ? styles.grid_layout : styles.inline_layout}`}
    >
      {skills.map((item, index) => (
        <SkillCard
          key={index}
          percentage={item.percentage}
          skill={item.skill}
          start={item.start}
          end={item.percentage}
          duration={1}
          label={item.skill}
        />
      ))}
    </div>
  );
};

export default Skills;
