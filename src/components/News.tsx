import React from "react";
import styles from "../style/BlogDetails2.module.css";

interface NewsProps {
  img: string;
  date: string;
  title: string;
}

const News: React.FC<NewsProps> = ({ img, date, title }) => {
  return (
    <div
      className={`flex flex-col justify-between md:flex-row ${styles.news_container}`}
    >
      <div>
        <img src={img} alt="Blog News" />
      </div>
      <div>
        <h4>{date}</h4>
        <a href="#">{title}</a>
      </div>
    </div>
  );
};

export default News;
