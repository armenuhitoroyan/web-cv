import React from "react";
import Button from "./form/Button";
import styles from "../style/BlogPage.module.css"

interface BlogDataProps {
  img: string;
  profileImg: string;
  date: string;
  author: string;
  title: string;
  text: string;
  h2Size?: string;
  pSize?: string;
}

const BlogData: React.FC<BlogDataProps> = ({
  img,
  profileImg,
  date,
  author,
  title,
  text,
  h2Size = "20px",
  pSize = "16px",
}) => {
  return (
    <div className={styles.blog_data}>
      <img src={img} alt="Profile Page 1" />

      <div>
        <p>{date}</p>
        <img className={styles.profile_image} src={profileImg} alt="Author" />
        <p>{author}</p>
      </div>

      <div className={styles.blog_content}>
        <h2 style={{ fontSize: h2Size }}>{title}</h2>
        <p style={{ fontSize: pSize }}>{text}</p>
        <div className={styles.button_container}>
          <Button
            text="Select Now"
            className="rounded-button"
            onClick={() => console.log("Our Blog Page")}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogData;
