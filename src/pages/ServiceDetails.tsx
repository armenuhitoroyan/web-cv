import React from "react";
import styles from "../style/ServicesDetails.module.css";
import Footer from "../components/footer/Footer";
import ParticlesContainer from "../components/ParticlesContainer";
import bgImage from "../assets/images/fog.png";
import ImageModel from "../components/ImageModel";
import { useTitle } from "../hooks/useTitle";

const Servicedetails: React.FC = () => {
  useTitle("Services Details"); 
  return (
    <div
      className={`${styles.container} w-full  flex-col items-center justify-center md:flex-row`}
    >
      <div className={styles.menu}>
        <ParticlesContainer
          title="Services details"
          ref="services-details"
          img={bgImage}
        />
        <div className="w-full flex flex-col items-center justify-center gap-10 md:flex-row">
          <div className={styles.text_container}>
            <h3 style={{ marginLeft: "5%" }}>Stunning Design</h3>
            <p>
              lotsie roll dragée bonbon croisnt. Chupa chups loream sesame snaps
              jelly tiramiipsum dolor sit amet sou ffl liquorice oat cake
              biscuit jesms tiramisu jelly dash Caramels chocolatsweet roll
              tart. lotsie roll dragée b onbon croisnt. Chupa chups loream
              sesame snaps jelly tiramiipsum dolor sit amet sou ffl liquorice
              oat a ake biscuit jesms tiramisu jelly dash Caramelsn t. Chupa
              chups loream sesame snaps jelly tiramiipsum a olor sit amet souffl
              liquorice oat cake biscuit jesms ls chocolatsweet roll tart.
              lotsie roll dragée b onbon croisnt. Chupa chups l tiramis.
            </p>
          </div>
          <div className={styles.rules}>
            <h3>Service Benefits</h3>

            <ul>
              <li>
                <span>Motivation and encouragement from time to time</span>
              </li>
              <li>
                <span>1000 motivational quotes in the database</span>
              </li>
              <li>
                <span>
                  If you don’t need either of these at the moment, you certainly
                  have friends
                </span>
              </li>
              <li>
                <span>You and help uplift your day.</span>
              </li>
              <li>
                <span>
                  Provide a motivational quote for you as you place your head on
                  the pillow
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`${styles.image} w-full flex flex-col items-center justify-center md:flex-row`}
      >
        <img
          src={`https://afsu.tohidur.com/img/services-1.jpg`}
          alt="Profile Page 1"
        />
      </div>
      <div className="w-full flex-col items-center justify-center md:flex-row">
        <h3 style={{ marginLeft: "5%" }}>Service Moto</h3>
        <p>
          lotsie roll dragée bonbon croisnt. Chupa chups loream sesame snaps
          jelly tiramiipsum dolor sit amet sou ffl liquorice oat cake biscuit
          jesms tiramisu jelly dash Caramels chocolatsweet roll tart. lotsie
          roll dragée b onbon croisnt. Chupa chups loream sesame snaps jelly
          tiramiipsum dolor sit amet sou ffl liquorice oat a ake biscuit jesms
          tiramisu jelly dash Caramelsn t. Chupa chups loream sesame snaps jelly
          tiramiipsum a olor sit amet souffl liquorice oat cake biscuit jesms ls
          chocolatsweet roll tart. lotsie roll dragée b onbon croisnt. Chupa
          chups l tiramis.
        </p>
      </div>
      <div
        className={`${styles.image_context} w-full flex flex-col items-center justify-center md:flex-row`}
      >
        <div
          style={{ marginTop: "70px", marginBottom: "70px" }}
          className={styles.rules}
        >
          <h3>Service Benefits</h3>

          <ul>
            <li>
              <span>Motivation and encouragement from time to time</span>
            </li>
            <li>
              <span>1000 motivational quotes in the database</span>
            </li>
            <li>
              <span>
                If you don’t need either of these at the moment, you certainly
                have friends
              </span>
            </li>
            <li>
              <span>You and help uplift your day.</span>
            </li>
            <li>
              <span>
                Provide a motivational quote for you as you place your head on
                the pillow
              </span>
            </li>
          </ul>
        </div>
        <div>
          <ImageModel
            src={`https://afsu.tohidur.com/img/services-2.jpg`}
            width={`500px`}
            height={`35vh`}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Servicedetails;
