import React from "react";
import styles from "../style/ServicePage.module.css";
import Footer from "../components/footer/Footer";
import ParticlesContainer from "../components/ParticlesContainer";
import bgImage from "../assets/images/fog.png";
import Services from "../components/Services";
import { useTitle } from "../hooks/useTitle";

const ServicePage: React.FC = () => {
  useTitle("Services");
  return (
    <div
      className={`${styles.container} w-full  flex-col items-center justify-center lg:flex-row`}
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
