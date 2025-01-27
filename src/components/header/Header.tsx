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
      className={`${styles.follows_box} w-full  flex-col items-center  md:flex-row`}
    >
      <h2 className="font-bold ">{title}</h2>
      <p>{text}</p>
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <div className={styles.header_container}>
      <div style={{ margin: "0px" }}>
        <div
          className={`${styles.box} flex flex-col justify-between md:flex-row`}
        >
          <div className={styles.box_content}>
            <h2 className="text-3xl font-bold">HELLO I AM</h2>
            <h1 className="text-3xl font-bold" style={{ fontSize: "40px" }}>
              Tohidur Hasan
            </h1>
            <p style={{ fontSize: "20px" }}>
              Graphic Designer, HTML Coder, PHP Programmer and Project Manager
            </p>
            <div
              style={{ height: "70px", width: "70%" }}
              className="flex flex-col freelance-available justify-center md:flex-row"
            >
              <button className="bg-white  font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition">
                Select Now
              </button>
              <ul>
                <li>Available for Freelance</li>
              </ul>
            </div>
            {/* <div className={styles.title_animation}>
           
              <div>Animation Component</div>
            </div> */}
            <div
              style={{
                marginLeft: "100%",
                marginTop: "-41%",
                position: "relative",
                zIndex: 7,
              }}
            >
              <Circle
                width="70px"
                height="70px"
                strokeWidth={3}
                color="yellow"
              />
            </div>
            <div style={{ fontSize: "24px" }}>
              <CountFollwers title="10K" text="Happy Satisfied Customer" />
            </div>
          </div>
          <div>
            <img
              className={`${styles.img}
              w-16
              md:w-32
              lg:w-48`}
              src={user}
              alt="User"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
