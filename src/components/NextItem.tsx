import React from "react";
import styles from "../style/PortfolioPage.module.css";

const NextItem: React.FC = () => {
  return (
    <div
      className={`w-full flex  items-center justify-center ${styles.next_item_container}`}
    >
      <a href="#"></a>
      <span>prev-work</span>
      <span>next-work</span>
      <a href="#"></a>
    </div>
  );
};

export default NextItem;
