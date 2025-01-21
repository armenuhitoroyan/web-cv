import React from "react";
import styles from "../style/PortfolioPage.module.css";

const Details: React.FC = () => {
  return (
    <div className={styles.dataContainerStyle}>
      {/* Client */}
      <div className={styles.sectionStyle}>
        <div
          className={`w-full flex  flex-col items-center  md:flex-row ${styles.titleStyle}`}
        >
          <span className={styles.iconStyle}>ℹ️</span>
          <span className={styles.labelStyle}>CLIENT:</span>
        </div>
        <div className={styles.dataStyle}>COMPANY</div>
      </div>

      <hr className={styles.hrStyle} />

      {/* Category */}
      <div className={styles.sectionStyle}>
        <div
          className={`w-full flex  flex-col items-center  md:flex-row ${styles.titleStyle}`}
        >
          <span className={styles.iconStyle}>🏷️</span>
          <span className={styles.labelStyle}>CATEGORY:</span>
        </div>
        <div className={styles.dataStyle}>PORTFOLIO, PHOTOS, AGENCY</div>
      </div>

      <hr className={styles.hrStyle} />

      {/* Date */}
      <div className={styles.sectionStyle}>
        <div
          className={`w-full flex  flex-col items-center  md:flex-row ${styles.titleStyle}`}
        >
          <span className={styles.iconStyle}>📅</span>
          <span className={styles.labelStyle}>DATE:</span>
        </div>
        <div className={styles.dataStyle}>
          START: DECEMBER 10, 2021 <br />
          END: JUNE 12, 2025
        </div>
      </div>

      <hr className={styles.hrStyle} />

      {/* Resources */}
      <div className={styles.sectionStyle}>
        <div
          className={`w-full flex  flex-col items-center  md:flex-row ${styles.titleStyle}`}
        >
          <span className={styles.iconStyle}>📂</span>
          <span className={styles.labelStyle}>RESOURCES:</span>
        </div>
        <div className={styles.dataStyle}>
          PSD DOCUMENT VECTOR FILE DOCUMENT
        </div>
      </div>

      {/* Button */}
      <div style={{ textAlign: "center" }}>
        <button className={styles.buttonStyle}>Download CV</button>
      </div>
    </div>
  );
};

export default Details;