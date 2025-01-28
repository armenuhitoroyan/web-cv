import React from "react";
import ParticlesContainer from "../../components/ParticlesContainer";
import bgImage from "../../assets/images/fog.png";
import styles from "../../style/PricingPlans.module.css";
import Footer from "../../components/footer/Footer";
import PricingCard from "../../components/PricingCard";
import TitleContainer from "../../components/Title";
import { useTitle } from "../../hooks/useTitle";

export const PricingPlans: React.FC = () => {
  useTitle("Pricing Plans");
  return (
    <div className={styles.container}>
      <ParticlesContainer title="About Us" ref="about" img={bgImage} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        <PricingCard
          marginTop="-40px"
          marginLeft="5%"
          widthBottom={100}
          widthTop={90}
        />
        <PricingCard
          marginTop="-40px"
          marginLeft="5%"
          widthBottom={100}
          widthTop={90}
        />
        <PricingCard
          marginTop="-40px"
          marginLeft="5%"
          widthBottom={100}
          widthTop={90}
        />
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
      <div className="flex flex-col justify-center items-center md:flex-row">
        <div style={{ width: "100%" }}>
          <PricingCard
            marginLeft="70%"
            marginTop="-30%"
            widthBottom={60}
            widthTop={70}
            height={350}
            btnHeight={70}
          />
        </div>
        <div style={{ width: "100%" }}>
          <PricingCard
            marginLeft="70%"
            marginTop="-30%"
            widthBottom={60}
            widthTop={70}
            height={350}
            btnHeight={70}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PricingPlans;
