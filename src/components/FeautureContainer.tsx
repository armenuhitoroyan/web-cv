// FeatureContainer.tsx
import React from "react";
import styles from "../style/PortfolioPage.module.css";

const FeatureContainer: React.FC = () => {
  return (
    <div className={styles.features_container}>
      <ul>
        <li>✔ Website Design</li>
        <li>✔ Graphic Designing</li>
        <li>✔ Web Development</li>
        <li>✔ Business Consulting</li>
      </ul>
      <button>Select Now</button>
    </div>
  );
};

export default FeatureContainer;
