import React from "react";
import styles from "../style/PortfolioPage.module.css";
import Footer from "../components/footer/Footer";

const PortfolioPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to the Portfolio Page</h1>
      <p>This is the portfolio of our React application!</p>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
