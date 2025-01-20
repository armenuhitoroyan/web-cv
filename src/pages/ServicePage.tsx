import React from "react";
import styles from "../style/ServicePage.module.css";
import Footer from "../components/footer/Footer";

const ServicePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to the Service Page</h1>
      <p>This is the service of our React application!</p>
      <Footer />
    </div>
  );
};

export default ServicePage;
