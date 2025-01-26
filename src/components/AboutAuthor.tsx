import React from "react";
import styles from "../style/BlogDetails2.module.css";

interface AboutAuthorProps {
  name: string;
  img: string;
  role: string;
  aboutAuthor: string;
}

const AboutAuthor: React.FC<AboutAuthorProps> = ({
  name,
  img,
  role,
  aboutAuthor,
}) => {
  return (
    <div
      className={`w-full flex flex-col items-around justify-center gap-10 md:flex-row ${styles.about_author}`}
      about-author
    >
      <img src={img} alt={`${img} not found!`} />
      <div>
        <div
          style={{ margin: "0 auto", marginRight: "5%" }}
          className="flex flex-col justify-start items-center gap-10 md:flex-row "
        >
          <h2 style={{ margin: "0 auto", marginLeft: "50px" }}>{name}</h2>
          <span>{role}</span>
        </div>
        <div>
          <h6>{aboutAuthor}</h6>
        </div>
      </div>
    </div>
  );
};

export default AboutAuthor;
