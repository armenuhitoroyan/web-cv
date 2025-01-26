import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import {
  SlUser,
  SlGraduation,
  SlBriefcase,
  SlEnvelopeOpen,
  SlCursor,
} from "react-icons/sl";
import { FaRegFolder } from "react-icons/fa";
import Download from "../../components/form/Download";
import styles from "../../style/Home4.module.css";

// import bgImg from "../../assets/images/images.jpg";

interface SidebarProps {
  color: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ color }) => {
  return (
    <div
      className={`w-full flex flex-col items-center justify-center md:flex-col ${styles.sidebar}`}
    >
      <div className="logo">
        <img src={`src/assets/images/logo-black.png`} alt="Logo" />
      </div>
      <div style={{ height: "70px" }}></div>
      <nav className="w-full flex flex-col md:flex-col items-center justify-center gap-5 ">
        <a href="#">
          <IoHomeOutline className={`${styles.icon}`} style={{ color }} />
        </a>
        <a href="#">
          <SlUser className={`sl-user ${styles.icon}`} style={{ color }} />
        </a>
        <a href="#">
          <SlGraduation
            className={`sl-graduation ${styles.icon}`}
            style={{ color }}
          />
        </a>
        <a href="../Portfolio.tsx">
          <SlBriefcase
            className={`sl-briefcase ${styles.icon}`}
            style={{ color }}
          />
        </a>
        <a href="../Portfolio.tsx">
          <FaRegFolder
            className={`fa-reg-folder ${styles.icon}`}
            style={{ color }}
          />
        </a>
        <a href="../Portfolio.tsx">
          <SlEnvelopeOpen
            className={`sl-envelop-open ${styles.icon}`}
            style={{ color }}
          />
        </a>
      </nav>
      <div className={styles.icon_container}>
        <SlCursor className="sl-cursor" style={{ color }} />
      </div>
    </div>
  );
};

interface AboutUserProps {
  color: string;
}

export const AboutUser: React.FC<AboutUserProps> = ({ color }) => {
  return (
    <div className={styles.user_container}>
      <h2
        className="text-3xl font-bold"
        style={{
          WebkitTextStroke: `1px ${color}`,
        }}
      >
        HELLO I AM
      </h2>
      <h1 className="text-3xl font-bold">Tohidur Hasan</h1>
      <p>Graphic Designer, HTML Coder, PHP Programmer and Project Manager</p>
      <div className="w-full flex flex-col md:flex-row justify-between items-center">
        <button className="bg-white text-purple-900 font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition">
          Start consulting
        </button>
        <ul>
          <li>Available for Freelance</li>
        </ul>
      </div>
    </div>
  );
};

export const ProfileCard: React.FC = () => {
  return (
    <div
      className={`w-full  flex-col items-center justify-center ${styles.card}`}
    >
      <div className={styles.image_container}>
        <div>
          <img src="src/assets/images/630.png" alt="Profile" />
        </div>
      </div>
      <div>
        <h3>Tohidur Hasan</h3>
        <p>Graphic Designer, HTML Coder, and Project Manager</p>
        <div className={styles.button}>
          <Download
            text="Download CV"
            href="/files/Armenuhi Toroyan CV.pdf"
            download="Armenuhi Toroyan CV.pdf"
            color="#white"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

type Themes = {
  color: string;
  backgroundColor: string;
};

export const Homepage4: React.FC<Themes> = ({ color, backgroundColor }) => {
  return (
    <div
      style={{
        backgroundColor,
        color,
        opacity: "0.8",
        // backgroundImage: `url(${bgImg})`,
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        // overflowY: "hidden",
      }}
      className={`${styles.container} w-full flex flex-col md:flex-row justify-between `}
    >
      <Sidebar color={color} />
      <AboutUser color={color} />
      <ProfileCard />
    </div>
  );
};

export default Homepage4;
