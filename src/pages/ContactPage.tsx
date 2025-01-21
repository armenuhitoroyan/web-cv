import React from "react";
import styles from "../style/ContactPage.module.css";
import Footer from "../components/footer/Footer";
import Carousel from "../components/Carousel";
import Map from "../components/MapComponent";
import AddUserForm from "../components/form/AddUserForm";
import ContactsCard from "../components/cards/ContactsCard";
import ParticlesContainer from "../components/ParticlesContainer";
import bgImage from "../assets/images/bgimg.jpg";

const ContactPage: React.FC = () => {
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
    <div
      className={`${styles.container} w-full  flex-col items-center justify-center md:flex-row`}
    >
      <div className={styles.menu}>
        <ParticlesContainer title="Contact us" ref="contact" img={bgImage} />
      </div>

      <ContactsCard />
      <div
        style={{ width: "100%" }}
        className="w-full  flex-col items-center justify-center md:flex-row"
      >
        <div
          className={`w-full  flex-col items-center justify-center md:flex-row ${styles.hading}`}
        >
          <p>Have Question Contact Us?</p>
          <div className="w-full  flex-col items-center justify-center">
            <h2 className="align-center">
              Love to Hear From You, Get in Touch!
            </h2>
          </div>
        </div>
        <div className={styles.info}>
          <AddUserForm onAdd={handleAddUser} /> 
        </div>
      </div>
      <Map />
      <Carousel />
      <Footer />
    </div>
  );
};

export default ContactPage;
