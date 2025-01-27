import React from "react";
import user from "../../assets/images/home-img-3.png";
import dots from "../../assets/images/dots-1.png";
import styles from "../../style/Home3.module.css";
import { Circle } from "lucide-react";


// Կոմպոնենտներ

const HeaderH3: React.FC = () => {
  return (
    <div className={styles.header_container}>
      <div style={{ margin: "0px" }}>
        <div
          className={`${styles.box} flex flex-col justify-between md:flex-row`}
        >
          <div className={styles.box_content}>
            <h3>A</h3>
            <span className="text-3xl font-bold text-gray-500">HELLO I'AM</span>
            <h1 className="text-3xl font-bold" style={{ fontSize: "40px" }}>
              Allison Parker
            </h1>
            <h6 className="text-gray-500" style={{ fontSize: "20px" }}>
              Web Designer & Photographer
            </h6>
            <a style={{ marginTop: "20px" }} href="#">
              infoname@domain.com
            </a>
            <h6 style={{ width: "305px" }}>
              36 East 8th Street, New York, NY 10003, United States
            </h6>

            <div style={{ marginTop: "20px" }} className="flex gap-3">
              <Circle width="50px" height="50px" strokeWidth={1} color="gray" />
              <Circle width="50px" height="50px" strokeWidth={1} color="gray" />
              <Circle width="50px" height="50px" strokeWidth={1} color="gray" />
            </div>
          </div>
          <div>
            <img className={`${styles.img}`} src={user} alt="User" />
            <img
              // className="w-16 md:w-32 lg:w-48 dot"
              className={` ${styles.dots} w-16 md:w-32 lg:w-48 rounded-full animate-rotate-pause `}
              src={dots}
              alt="User"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderH3;
