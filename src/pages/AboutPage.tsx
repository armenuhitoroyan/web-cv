import React from "react";
import styles from "../style/AboutPage.module.css";
import Footer from "../components/footer/Footer";
import Carousel from "../components/Carousel";

const AboutPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to the About Page</h1>
      <p>This is the about page of our React application!</p>
      <Carousel />
      <Footer />
    </div>
  );
};

export default AboutPage;
