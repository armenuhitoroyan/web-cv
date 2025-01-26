import React from "react";
import styles from "../../style/PortfolioPage.module.css";
import bgImage from "../../assets/images/fog.png";
import Footer from "../../components/footer/Footer";
import ParticlesContainer from "../../components/ParticlesContainer";
import NextComponent from "../../components/NextComponent";
import ImageModel from "../../components/ImageModel";
import Download from "../../components/form/Download";
import { TagIcon, InfoIcon, CalendarIcon, LayersIcon } from "lucide-react";

interface InfoCardProps {
  client: string;
  category: string;
  dateStart: string;
  dateEnd: string;
  resources: string;
  downloadLink: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  client,
  category,
  dateStart,
  dateEnd,
  resources,
}) => {
  return (
    <div className={`${styles.card}  w-full  flex-col rounded-2xl md:flex-col`}>
      <div className="space-y-6">
        {/* Client */}
        <div className="flex items-start space-x-4">
          <InfoIcon
            style={{ color: "#6928e6" }}
            className="w-10 h-10 flex-shrink-0"
          />
          <div className="flex flex-col">
            <p className="font-bold">CLIENT:</p>
            <p className="text-gray-400">{client}</p>
          </div>
        </div>
        <hr className="bg-gray" />

        {/* Category */}
        <div className="flex items-start space-x-4">
          <TagIcon
            style={{ color: "#6928e6" }}
            className="flex-shrink-0 w-10 h-10"
          />
          <div className="flex flex-col">
            <p className="font-bold">CATEGORY:</p>
            <p className="text-gray-400">{category}</p>
          </div>
        </div>
        <hr className="bg-gray" />

        {/* Date */}
        <div className="flex items-start space-x-4">
          <CalendarIcon
            style={{ color: "#6928e6" }}
            className="flex-shrink-0 w-10 h-10"
          />
          <div className="flex flex-col">
            <p className="font-bold">DATE:</p>
            <p className="text-gray-400">
              START: {dateStart} END: {dateEnd}
            </p>
          </div>
        </div>
        <hr className="bg-gray" />

        {/* Resources */}
        <div className="flex items-start space-x-4">
          <LayersIcon
            style={{ color: "#6928e6" }}
            className="flex-shrink-0 w-10 h-10"
          />
          <div className="flex flex-col">
            <p className="font-bold">RESOURCES:</p>
            <p className="text-gray-400">{resources}</p>
          </div>
        </div>
        <hr className="bg-gray" />
      </div>

      <div className="mt-6 text-center">
        <Download
          text="Download CV"
          href="./assets/files/Armenuhi Toroyan CV.pdf"
          download="Armenuhi Toroyan CV.pdf"
          color="#6928e6"
          width="200px"
        />
      </div>
    </div>
  );
};

const PortfolioDetails: React.FC = () => {
  return (
    <div
      className={`${styles.container} w-full flex-col items-center  justify-center md:flex-row`}
    >
      <div className={styles.menu}>
        <ParticlesContainer
          title="Portfolio Details"
          ref="portfolio"
          img={bgImage}
        />
      </div>

      {/* First Row */}
      <div className={`${styles.flexRow} flex flex-col gap-10 lg:flex-row`}>
        <div className={styles.leftContent}>
          <span className="font-bold text-gray-400">
            Photography, Design, Ideas
          </span>
          <h2 style={{ marginTop: "25px" }} className={styles.heading}>
            Brand Consistency
          </h2>
          {/*  */}
          <div className=" text-start ">
            <InfoCard
              client="COMPANY"
              category="PORTFOLIO, PHOTOS, AGENCY"
              dateStart="December 10, 2021"
              dateEnd="June 12, 2025"
              resources="PSD Document, Vector File, Document"
              downloadLink="./assets/files/Armenuhi Toroyan CV.pdf"
            />
          </div>
        </div>
        <div className={styles.rightContent}>
          {/* Description */}
          <div className={`${styles.flexRow} flex flex-col md:flex-row`}>
            <div className={styles.leftContent}>
              <h2 className={styles.heading}>Description</h2>
              <h6 className={styles.descriptionText}>
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
              </h6>
              <h6 className={styles.descriptionText}>
                <br />
                ed do eusm odcididunt ut lausm od cididunt eu sm od cididunt ut
                labore ut labore ilms ilLorem ipsum ri sit amet co adipiscing
                elit sed do eusm odcididunt ut ling elitsed do eusm od cididunt
                ut labore ilmu nt ut labore ut labore ilms. od cididLorem ipsum
                dolor sit amet co adipiscing elit sed do eusmoori sit a met co
                adipiscing elit sed.
              </h6>
            </div>
          </div>

          {/* What We Provide */}
          <div className={`${styles.flexRow} flex flex-col lg:flex-row`}>
            <div className={styles.leftContent}>
              <h2 className={styles.heading}>What We Provide</h2>
              <ul className="text-gray-600 space-y-2">
                <li>Dedication to client satisfaction</li>
                <li>Teamwork and collaboration</li>
                <li>Being a leader in our profession</li>
                <li>Pride in our work and excellence</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex p-5">
        <div style={{ width: "100%" }} className="flex-col md:flex-col">
          <div
            style={{ padding: "20px" }}
            className="flex justify-center md-flex-row"
          >
            <div style={{ width: "100%" }} className="mx-2">
              <ImageModel
                src="https://afsu.tohidur.com/img/showcase-1.jpg"
                width="100%"
                height=""
              />
            </div>
            <div className="mx-2">
              <ImageModel
                src="https://afsu.tohidur.com/img/showcase-4.jpg"
                width="100%"
                height=""
              />
            </div>
          </div>
          <div style={{ marginTop: "15px" }} className="mx-2">
            <ImageModel
              src="https://afsu.tohidur.com/img/showcase-5.jpg"
              width=""
              height="320px"
            />
          </div>
        </div>
        <div className={styles.rightContent}>
          <ImageModel
            src="https://afsu.tohidur.com/img/showcase-6.jpg"
            width=""
            height=""
          />
        </div>
      </div>

      {/* Preview Next */}
      <div className="mt-12 mb-12">
        <NextComponent />
      </div>

      <div className={styles.content}>
        <div className={styles.image_container}></div>
      </div>

      <Footer />
    </div>
  );
};

export default PortfolioDetails;
