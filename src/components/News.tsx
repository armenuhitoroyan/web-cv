import React from "react";
import styles from "../style/BlogPage.module.css";

interface NewsProps {
  img: string;
  date: string;
  title: string;
}

const News: React.FC<NewsProps> = ({ img, date, title }) => {
  return (
    <div className={styles.news_container}>
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
