import React from "react";
import styles from "../style/PortfolioPage.module.css";
import bgImage from "../assets/images/bgimg.jpg";
import Footer from "../components/footer/Footer";
import ParticlesContainer from "../components/ParticlesContainer";
import Details from "../components/Details";
import profile1img from "../assets/images/profile-pag-1.jpg";
import ImageModel from "../components/ImageModel";
import NextItem from "../components/NextItem";
import FeatureContainer from "../components/FeautureContainer";

const PortfolioPage: React.FC = () => {
  return (
    <div
      className={`${styles.container} w-full flex-col items-center justify-center md:flex-row`}
    >
      <div className={styles.menu}>
        <ParticlesContainer
          title="Portfolio Details"
          ref="portfolio"
          img={bgImage}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.image_container}>
          <img
            style={{ borderRadius: "20px" }}
            src={profile1img}
            alt="Profile Page 1"
          />
          <div
            className="w-full flex  items-center justify-center"
            style={{ marginTop: "50px" }}
          >
            <div className={styles.text_content}>
              <span>Photography, Design, Ideas</span>
              <h2>Brand Consistency</h2>
              <p>
                Lorem ipsum dolor sit amet co adipiscing elit sed do eusmoori
                sit amet co adipiscing elit sed do eusm t ut labore ilms Lorem
                ipsumolor sit amet co adipiscing elit sed do eusm odcididunt ut
                lausm od cididL orem ipsum dolor sit amet co adipiscing elit sed
                do eusmoori sit amet co adipiscing elit sed do eusmt ut labore
                ilms Lorem ipsumolor sit amet co adipisc od cididun ut labore ut
                labore ilms Lorem ipsum ori sit amet co adipiscing elit sed do
                eusm odcididunt ut lisum dolor sit amet co adipiscing elit sed
                do eus orem ipsum dolor sit amet co adipiscing elit sed do
                eusmoori sit amet co adipiscing elit sed do eusmt moori sit
                ang.Lorem ipsumolor sit amet co adipisc.
              </p>
              <div></div>
              <p>
                ed do eusm odcididunt ut lausm od cididunt eu sm od cididunt ut
                labore ut labore ilms ilLorem ipsum ri sit amet co adipiscing
                elit sed do eusm odcididunt ut ling elitsed do eusm od cididunt
                ut labore ilmu nt ut labore ut labore ilms. od cididLorem ipsum
                dolor sit amet co adipiscing elit sed do eusmoori sit a met co
                adipiscing elit sed.
              </p>
            </div>
            <div className={styles.details_container}>
              <Details />
            </div>
          </div>
          <div
            className="flex justify-center"
            style={{
              marginTop: "50px",
            }}
          >
            {["profile-pag-2", "profile-pag-4", "profile-pag-6"].map(
              (image, index) => (
                <div
                  key={index}
                  style={{ marginInline: index > 0 ? "20px" : "0" }}
                >
                  <ImageModel
                    src={`https://afsu.tohidur.com/img/${image}.jpg`}
                    width={`430px`}
                    height={`60vh`}
                  />
                </div>
              )
            )}
          </div>
          <div
            className="flex justify-center"
            style={{
              marginTop: "20px",
            }}
          >
            {["profile-pag-3", "profile-pag-5", "profile-pag-7"].map(
              (image, index) => (
                <div
                  key={index}
                  style={{ marginInline: index > 0 ? "20px" : "0" }}
                >
                  <ImageModel
                    src={`https://afsu.tohidur.com/img/${image}.jpg`}
                    width={`430px`}
                    height={`60vh`}
                  />
                </div>
              )
            )}
          </div>
          <div style={{ marginTop: "100px" }}>
            <div className="flex">
              <div className={styles.provider}>
                <FeatureContainer />
              </div>
              <div style={{ width: "70%", marginLeft: "30%" }}>
                <ImageModel
                  src={`https://afsu.tohidur.com/img/profile-pag-8.jpg`}
                  width={`500px`}
                  height={`80vh`}
                />
              </div>
            </div>
          </div>
          <div style={{ marginTop: "50px", marginBottom: "50px" }}>
            <NextItem />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
