import React from "react";
import styles from "../style/ServicePage.module.css";

import ContactCard from "./cards/ContactCard";
import { FaBars, FaPen, FaDotCircle, FaFilePdf } from "react-icons/fa";
import Data from "../interfaces/Data";

const Services: React.FC = () => {
  const info: Data[] = [
    {
      icon: <FaPen className={styles.fa_icon} />,
      title: "Graphichs Design",
      description:
        "Lorem ipm dolor amet, consectetur magm maiores.Ipsa dolor sit ilmesy magnam maores.",
    },
    {
      icon: <FaPen className={styles.fa_icon} />,
      title: "Graphichs Design",
      description:
        "Lorem ipm dolor amet, consectetur magm maiores.Ipsa dolor sit ilmesy magnam maores.",
    },
    {
      icon: <FaBars className={styles.fa_icon} />,
      title: "Stunning Design",
      description:
        "Lorem ipm dolor amet, consectetur magm maiores.Ipsa dolor sit ilmesy magnam maores.",
    },
    {
      icon: <FaDotCircle className={styles.fa_icon} />,
      title: "Immigration Application",
      description:
        "Lorem ipm dolor amet, consectetur magm maiores.Ipsa dolor sit ilmesy magnam maores.",
    },
    {
      icon: <FaBars className={styles.fa_icon} />,
      title: "Innovative Ideas",
      description:
        "Lorem ipm dolor amet, consectetur magm maiores.Ipsa dolor sit ilmesy magnam maores.",
    },
    {
      icon: <FaFilePdf className={styles.fa_icon} />,
      title: "Project Management",
      description:
        "Lorem ipm dolor amet, consectetur magm maiores.Ipsa dolor sit ilmesy magnam maores.",
    },
  ];
  return (
    <div
      className={`${styles.container} w-full  flex-col items-center justify-center LG:flex-row`}
    >
      <div className={styles.card}>
        {info.map((data, index) => (
          <div key={index} className="flex justify-center">
            <ContactCard
              // key={index}
              icon={data.icon}
              title={data.title}
              description={data.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
