import React from "react";
import styles from "../../style/Navbar.module.css";

interface DownloadProps {
  text: string;
  href: string; // հղումը
  download?: string; // ֆայլի անվանումը

  color?: string;
}

const Download: React.FC<DownloadProps> = ({
  text,
  href,
  download,

  color = "#000",
}) => (
  <div className={styles.container}>
    <a
      href={href}
      download={download}
      style={{
        color: color,
        borderColor: color,
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 0a.5.5 0 0 1 .5.5v9.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V.5A.5.5 0 0 1 8 0zm-6 12.5a.5.5 0 0 1 .5.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
      </svg>
      {text}
    </a>
  </div>
);

export default Download;
