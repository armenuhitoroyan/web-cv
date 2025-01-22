import React from "react";
import styles from "../style/BlogPage.module.css"

type PostedCardProps = {
  text: string;
  content: string;
  textAlign?: "left" | "center" | "right";
};

const PostedCard: React.FC<PostedCardProps> = ({
  text,
  content,
  textAlign = "left",
}) => {
  return (
    <div className={styles.card} style={{ textAlign }}>
      <h2>{text}</h2>
      <a href="#">{content}</a>
    </div>
  );
};

export default PostedCard;
