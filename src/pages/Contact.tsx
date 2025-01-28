import React from "react";
import styles from "../style/Contact.module.css";
import Footer from "../components/footer/Footer";
import Carousel from "../components/Carousel";
import ParticlesContainer from "../components/ParticlesContainer";
import bgImage from "../assets/images/home-2.jpg";
import Map from "../components/MapComponent";
import ContactsCard from "../components/cards/ContactsCard";
import AddUserForm from "../components/form/AddUserForm";
import { useTitle } from "../hooks/useTitle";

const Contact: React.FC = () => {
  useTitle("Contact Us");

  const handleAddUser = (formData: {
    name: string;
    email: string;
    phone: string;
    department: string;
    message: string;
  }) => {
    // Handle the submitted form data
    console.log("User Added:", formData);
  };
  return (
    <div className={styles.container}>
      <ParticlesContainer title="Contact Us" ref="about" img={bgImage} />
      <ContactsCard />
      <Map />
      <div
        style={{ width: "100%" }}
        className="w-full  flex-col items-center justify-center md:flex-row"
      >
        <div
          className={`w-full  flex-col items-center justify-center md:flex-row ${styles.hading}`}
        >
          <div className="w-full flex flex-col items-center justify-center">
            <p>Have Question Contact Us?</p>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <h2 className="align-center">
              Love to Hear From You, Get in Touch!
            </h2>
          </div>
        </div>
        <div className={`w-full flex flex-col  ${styles.info}`}>
          <AddUserForm onAdd={handleAddUser} />
        </div>
      </div>
      <Carousel />
      <Footer />
    </div>
  );
};

export default Contact;
