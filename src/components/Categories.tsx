import React from "react";
import styles from "../style/BlogDetails2.module.css";

interface CategoryProps {
  linkRef: string;
  refNumber: string | number;
}

const Category: React.FC<CategoryProps> = ({ linkRef, refNumber }) => {
  return (
    <div
      className={`w-full flex  items-center justify-between ${styles.categories} ${styles.link} `}
    >
      <a href={linkRef}>{linkRef}</a> {/* Corrected `href` */}
      <span>{refNumber}</span>
    </div>
  );
};

export default Category;
