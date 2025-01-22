import React from "react";
import styles from "../style/BlogPage.module.css";

interface CategoryProps {
  linkRef: string; 
  refNumber: string | number;
}

const Category: React.FC<CategoryProps> = ({ linkRef, refNumber }) => {
  return (
    <div
      className={`w-full flex  items-center justify-center ${styles.categories}`}
    >
      <a href={linkRef}>{linkRef}</a> {/* Corrected `href` */}
      <span>{refNumber}</span>
    </div>
  );
};

export default Category;
