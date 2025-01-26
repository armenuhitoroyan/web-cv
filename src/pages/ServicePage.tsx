import React from "react";
import styles from "../style/ServicePage.module.css";
import Footer from "../components/footer/Footer";
import ParticlesContainer from "../components/ParticlesContainer";
import bgImage from "../assets/images/fog.png";
import Services from "../components/Services";

const ServicePage: React.FC = () => {
  return (
    <div
      className={`${styles.container} w-full  flex-col items-center justify-center md:flex-row`}
    >
      <div className={styles.menu}>
        <ParticlesContainer title="Our Services" ref="services" img={bgImage} />
      </div>
      <Services />
      <Footer />
    </div>
  );
};

export default ServicePage;
