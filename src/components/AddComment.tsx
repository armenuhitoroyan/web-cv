import React from "react";
import styles from "../style/BlogPage.module.css";

interface CommentProps {
  name: string;
  img: string;
  date: string;
  aboutAuthor: string;
}

const AddComment: React.FC<CommentProps> = ({
  name,
  img,
  date,
  aboutAuthor,
}) => {
  return (
    <div className={`flex ${styles.comment}`}>
      <img src={img} alt={`${img} not found!`} />
      <div className="comment-details">
        <div className="comment-header">
          <h2>{name}</h2>
          <span>{date}</span>
        </div>
        <div>
          <h6>{aboutAuthor}</h6>
        </div>
      </div>
    </div>
  );
};

export default AddComment;
