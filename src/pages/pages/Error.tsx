import React, { useEffect } from "react";
import styles from "../../style/Error.module.css";
import { PiSmileyXEyesFill } from "react-icons/pi";

import WebSites from "../../components/footer/WebSites";
import { useTitle } from "../../hooks/useTitle";

const ErrorPage: React.FC = () => {
  useTitle("404");
  useEffect(() => {
    (window as any).particlesJS("page404-container", {
      particles: {
        number: { value: 200 },
        size: { value: 3 },
        move: { speed: 5 },
        line_linked: { enable: true },
      },
    });
  }, []);

  return (
    <div
      id="page404-container"
      className={`${styles.container} w-full flex flex-col items-center justify-center md:flex-row`}
    >
      <div>
        <div>
          <h1 className={` w-full  flex justify-center`}>
            <span>4</span>
            <PiSmileyXEyesFill
              style={{
                color: "#7a45c6",
                marginTop: "50px",
              }}
            />
            <span>4</span>
          </h1>

          <h2>Ooops, Page Not Found</h2>
          <p>We can&apos;t seem to find the page you&apos;re looking for.</p>
          <div className={styles.search}>
            <input type="text" placeholder="Enter Keyword..." />
            <button></button>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          zIndex: 4,
          height: "0px",
          marginTop: "450px",
        }}
      >
        <div className="w-full flex-col flex justify-center md:flex-row">
          <WebSites width={200} />
        </div>
        <h5>Copyright © 2024 AfsuBy Tohidur Hasan, All Rights Reserved</h5>
      </div>
      <div className={styles.bg}>123456789</div>
    </div>
  );
};

export default ErrorPage;
