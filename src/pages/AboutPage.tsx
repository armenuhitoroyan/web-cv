import React from "react";
import styles from "../style/AboutPage.module.css";
import Footer from "../components/footer/Footer";
import Carousel from "../components/Carousel";
import ParticlesContainer from "../components/ParticlesContainer";
import bgImage from "../assets/images/bgimg.jpg";
import AuthorInfo from "../components/AuthorInfo";
import ResumeComponent from "../components/Resume";

const AboutPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <ParticlesContainer title="About Us" ref="about" img={bgImage} />
      <AuthorInfo />
      <ResumeComponent firstTitle="Education" secondTitle="Experience" />
      <Carousel />
      <Footer />
    </div>
  );
};

export default AboutPage;
