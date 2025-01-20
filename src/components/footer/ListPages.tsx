import React from "react";
import ListWebPagesProps from "../../interfaces/Interfaces";
import styles from "../../style/Footer.module.css";

const ListPages: React.FC<ListWebPagesProps> = ({
  imageName,
  webName,
  bgColor,
  href,
}) => {
  return (
    <li className="w-full flex items-center md:flex-row">
      <a
        className="magic-hover magic-hover__square w-full flex flex-col items-center md:flex-row"
        href={href}
      >
        <div
          className={`w-full flex flex-col items-center justify-center md:flex-row ${styles.container_div}`}
          style={{
            backgroundColor: bgColor,
          }}
        >
          <i className={`${imageName} ${styles.container_i}`}></i>
        </div>

        <h3 className={`${styles.container_h3}`}>{`${webName} `}</h3>
      </a>
    </li>
  );
};

export default ListPages;
