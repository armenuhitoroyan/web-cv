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
    <div className={` ${styles.container}`}>
      <ParticlesContainer title="Contact us" img={bgImage} />

      <ContactsCard />
      <div
        style={{ width: "70%" }}
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
        <AddUserForm onAdd={handleAddUser} />
      </div>
      <Map />
      <Carousel />
      <Footer />
    </div>
  );
};

export default ContactPage;
