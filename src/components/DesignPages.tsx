import React from "react";
import styles from "../style/BlogDetails2.module.css";

const BlogPageCircle: React.FC<{ bgColor: string; icon: string }> = ({
  bgColor,
  icon,
}) => {
  return (
    <div
      className={`${styles.page_icon} flex justify-center items-center`}
      style={{ background: bgColor }}
    >
      <i className={icon} style={{ color: "white", fontSize: "20px" }}></i>
    </div>
  );
};

const DesignPages: React.FC = () => {
  return (
    <div
      className={`w-full flex flex-col items-center justify-between md:flex-row ${styles.design_container}`}
    >
      <div className="w-full flex flex-col items-center justify-start md:flex-row">
        <span>Posted In :</span>
        <a href="#" rel="noopener noreferrer" className="posted-link">
          Graphic Designer,
        </a>
        <a href="#" rel="noopener noreferrer" className="posted-link">
          Website Design
        </a>
      </div>
      <div className="w-full flex flex-col gap-10 items-center justify-end md:flex-row">
        <BlogPageCircle bgColor="#2052c5" icon="fa-brands fa-facebook-f" />
        <BlogPageCircle
          bgColor="linear-gradient(to right, #2b009a, #da001b, #ff1600, #ff7b00, #fff700)"
          icon="fa-brands fa-instagram"
        />
        <BlogPageCircle bgColor="#2f98e1" icon="fa-brands fa-twitter" />
      </div>
    </div>
  );
};

export default DesignPages;
