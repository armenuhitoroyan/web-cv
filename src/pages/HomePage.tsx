import React from "react";
import styles from "../style/HomePage.module.css";
import Footer from "../components/footer/Footer";
import { HiMiniEnvelope } from "react-icons/hi2";
import { HiPhone } from "react-icons/hi2";
import { HiMiniMapPin } from "react-icons/hi2";
import UserInfoCard from "../components/cards/UserInfoCard";

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to the Home Page</h1>
      <p>This is the homepage of our React application!</p>
      <UserInfoCard
        IconComponent={HiPhone}
        title="Phone No"
        text="+(123) 456 7890"
      />
      <UserInfoCard
        IconComponent={HiMiniEnvelope}
        title="Email Address"
        text="username@domain.com"
      />
      <UserInfoCard
        IconComponent={HiMiniMapPin}
        title="Location"
        text="Block Street No 2101 USA"
      />
      <Footer />
    </div>
  );
};

export default HomePage;
