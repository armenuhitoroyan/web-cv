import React from "react";
import styles from "../style/Home2.module.css";
import PricingCard from "./PricingCard";

const Packages: React.FC = () => {
  return (
    <div className={`flex container mx-auto py-10 px-4 ${styles.package}`}>
      <div className="text-center mt-20">
        <h2 className="text-4xl font-bold mb-2">Pricing Plans</h2>
        <p className="text-gray-500 max-w-md mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor.
        </p>
      </div>

      <div
        style={{ width: "70%" }}
        className="flex flex-col md:flex-row justify-end gap-20"
      >
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
    </div>
  );
};

export default Packages;
