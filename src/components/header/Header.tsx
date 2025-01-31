import React from "react";
import user from "../../assets/images/630.png";
import styles from "../../style/HomePage.module.css";
import { Circle } from "lucide-react";

// Տիպերի սահմանում

interface CountFollwersProps {
  title: string;
  text: string;
}

// Կոմպոնենտներ
const CountFollwers: React.FC<CountFollwersProps> = ({ title, text }) => {
  return (
    <div
      className={`${styles.follows_box}  flex-col items-center justify-center  lg:flex-row`}
    >
      <h2 className="font-bold ">{title}</h2>
      <p>{text}</p>
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <div className={`w-screen h-screen ${styles.header_container}`}>
      <div style={{ margin: "0px" }}>
        <div
          className={`${styles.box} flex flex-col justify-between lg:flex-row`}
        >
          <div className={styles.box_content}>
            <h2 className=" font-bold">HELLO I AM</h2>
            <h1 className=" font-bold">Tohidur Hasan</h1>
            <p>
              Graphic Designer, HTML Coder, PHP Programmer and Project Manager
            </p>
            <div
              style={{ width: "70%" }}
              className="flex  flex-col freelance-available justify-center items-center lg:flex-row"
            >
              <button
                style={{ height: "70px" }}
                className="bg-white  font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition"
              >
                Start Consulting
              </button>
              <ul>
                <li>Available for Freelance</li>
              </ul>
            </div>

            <div className={styles.circle_box}>
              <Circle
                width="100px"
                height="100px"
                strokeWidth={3}
                color="yellow"
              />
            </div>
            <div className={styles.count_followers}>
              <CountFollwers title="10K" text="Happy Satisfied Customers" />
            </div>
          </div>
          <div>
            <img className={`${styles.img}`} src={user} alt="User" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
