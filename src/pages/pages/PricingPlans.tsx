import React from "react";
import ParticlesContainer from "../../components/ParticlesContainer";
import bgImage from "../../assets/images/fog.png";
import styles from "../../style/PricingPlans.module.css";
import Footer from "../../components/footer/Footer";
import PricingCard from "../../components/PricingCard";
import TitleContainer from "../../components/Title";

export const PricingPlans: React.FC = () => {
  return (
    <div className={styles.container}>
      <ParticlesContainer title="About Us" ref="about" img={bgImage} />
      <div style={{ width: "100%" }} className="flex flex-col md:flex-row">
        <div style={{ width: "100%" }}>
          <PricingCard />
        </div>
        <div style={{ width: "100%" }}>
          <PricingCard />
        </div>
        <div style={{ width: "100%" }}>
          <PricingCard />
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${bgImage})`, marginTop: "20px" }}
        className={`w-full  flex-col md:flex-col gap-5 justify-around items-center ${styles.creative}`}
      >
        <h2>Let's Create Something Creative Together</h2>
        <p>We can't wait to hear from making something beautiful and new!</p>
        <button className="bg-white  font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition">
          Start Consulting
        </button>
      </div>
      <div style={{ marginBlock: "50px" }}>
        <TitleContainer
          title="Student Pricing Plans"
          description="Assignments Packages"
        />
      </div>
      <div style={{ width: "100%" }} className="flex flex-col md:flex-row">
        <div style={{ width: "100%" }}>
          <PricingCard />
        </div>
        <div style={{ width: "100%" }}>
          <PricingCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PricingPlans;
