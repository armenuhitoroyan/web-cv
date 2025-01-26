import React from "react";
import styles from "../style/BlogDetails2.module.css";

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
    <div className={`flex flex-col justify-start ${styles.blog_data}`}>
      <img src={img} alt="Profile Page 1" />
      <div>
        <span>Digital Marketing, Marketing</span>
        <h2 style={{ fontSize: h2Size }}>{title}</h2>
        <div className="flex">
          <div>
            <img className={styles.profile_img} src={profileImg} alt="Author" />
          </div>
          <div className={styles.author_info}>
            <span style={{ color: "#6928e6", margin: "0px" }}>{date}</span>
            <p style={{ margin: "0px", color: "#000" }}>{author}</p>
          </div>
        </div>
      </div>

      <div className={styles.blog_content}>
        <p style={{ fontSize: pSize }}>{text}</p>
        {/* <div className={styles.button_container}>
          <button className="bg-white  font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition">
            Select Now
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default BlogData;
