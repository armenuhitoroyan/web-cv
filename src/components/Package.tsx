import React from "react";
import styles from "../style/Home2.module.css";

interface Package {
  name: string;
  price: number;
  features: string[];
}

const pricingPackages: Package[] = [
  {
    name: "Basic Package",
    price: 350,
    features: [
      "Website Design",
      "Graphic Designing",
      "Web Development",
      "Business Consulting",
    ],
  },
  {
    name: "Premium Package",
    price: 650,
    features: [
      "Website Design",
      "Graphic Designing",
      "Web Development",
      "Business Consulting",
    ],
  },
];

const PricingCard: React.FC<{ pkg: Package }> = ({ pkg }) => (
  <div className={`${styles.package_card} `}>
    <div className={`text-white p-6 rounded-2xl shadow-lg ${styles.price}`}>
      <h3 className="text-xl font-semibold mb-4">{pkg.name}</h3>
      <p className="text-3xl font-bold mb-6">
        ${pkg.price} <span className="text-lg font-normal">/ month</span>
      </p>
    </div>
    <div className={`${styles.skills} text-white p-6 rounded-2xl shadow-lg`}>
      <ul className="mb-6">
        {pkg.features.map((feature, idx) => (
          <li key={idx} className="mb-2">
            {feature}
          </li>
        ))}
      </ul>
      <button className="bg-white  font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition">
        Select Now
      </button>
    </div>
  </div>
);

const Packages: React.FC = () => {
  return (
    <div className={`flex container mx-auto py-10 px-4 ${styles.package}`}>
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-2">Pricing Plans</h2>
        <p className="text-gray-500 max-w-md mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor.
        </p>
      </div>

      <div
        style={{ width: "100%" }}
        className="flex flex-col md:flex-row justify-end gap-20"
      >
        {pricingPackages.map((pkg, index) => (
          <PricingCard key={index} pkg={pkg} />
        ))}
      </div>
    </div>
  );
};

export default Packages;
