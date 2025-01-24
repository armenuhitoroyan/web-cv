import React from "react";
import user from "../../assets/images/630.png";
import Button from "../form/Button";
import styles from "../../style/HomePage.module.css";

// Տիպերի սահմանում

interface CountFollwersProps {
  title: string;
  text: string;
}

interface CircleProps {
  width?: string;
  height?: string;
  borderPx?: string;
  color?: string;
  top?: string;
  left?: string;
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

const Circle: React.FC<CircleProps> = ({
  width = "70px",
  height = "70px",
  borderPx = "5px",
  color = "#000",
  top = "0px",
  left = "0px",
}) => {
  return (
    <div
      className={styles.circle}
      style={{
        width: width,
        height: height,
        border: `${borderPx} solid ${color}`,
        top: top,
        left: left,
      }}
    ></div>
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
              <Button
                text="Select Now"
                className="rounded-button"
                onClick={() => console.log("Our Blog Page")}
              />
              <ul>
                <li>Available for Freelance</li>
              </ul>
            </div>
            {/* <div className={styles.title_animation}>
           
              <div>Animation Component</div>
            </div> */}
            <div>
              <Circle color="yellow" left="50%" top="0px" />
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
