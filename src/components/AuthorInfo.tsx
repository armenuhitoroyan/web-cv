import React from "react";
import styles from "../style/AboutPage.module.css";
import UserInfo from "./UserInfo";
import Skills from "./Skills";

interface LogosProps {
  className: string;
  backgroundColor: string;
  size: string;
}
interface PagesProps {
  size: string;
}

const Logos: React.FC<LogosProps> = ({ backgroundColor, size, className }) => {
  return (
    <div
      className={styles.logo}
      style={{ background: backgroundColor, width: size, height: size }}
    >
      <a
        className="w-full items-center justify-center"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      ></a>
      <i className={className} aria-hidden="true"></i>
    </div>
  );
};

const Pages: React.FC<PagesProps> = ({ size }) => {
  return (
    <div
      className={`w-full  flex md:flex-row justify-center items-center ${styles.page_element}`}
    >
      <div>
        <Logos
          size={size}
          backgroundColor="#2052c5"
          className="fa-brands fa-facebook-f"
        />
      </div>
      <div>
        <Logos
          size={size}
          className="fa-brands fa-instagram"
          backgroundColor="linear-gradient(to right, #2b009a, #da001b, #ff1600, #ff7b00, #fff700)"
        />
      </div>
      <div>
        <Logos
          size={size}
          backgroundColor="#2f98e1"
          className="fa-brands fa-twitter"
        />
      </div>
    </div>
  );
};

const AuthorInfo: React.FC = () => {
  return (
    <div
      className={`${styles.container_content} w-full  flex-col items-center justify-center lg:flex-row`}
    >
      <div className="w-full flex flex-col items-center justify-center lg:flex-row">
        <div className={` w-full flex-col items-center  md:flex-row`}>
          <div>
            <h2>About Me</h2>
          </div>
          <div>
            <p>I like creating a cool design project.</p>
          </div>
          <div className={` w-full flex  items-center  lg:flex-row`}>
            <div
              className={`${styles.button} w-full flex flex-col items-center`}
            >
              <button className="bg-white font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition">
                Select Now
              </button>
            </div>
            <div>
              <Pages size="40px" />
            </div>
          </div>
        </div>

        <div
          className={`w-full flex-col items-center justify-center lg:flex-row`}
        >
          <div>
            <p style={{ color: "#808080" }}>
              Vestibulum vitae lorim tellus nec dui dictum lorim viverra ac,
              place uilm rat Lorse ipsom uilme umes acdictm Vesti itae lorim
              tellus nec dui dictum lorim viverra a eros ac, pl rat Lorse ipsom
              lorimes aul erdum. erdum. Vestibulum vi rat Lorse ipsom lorimes
              aul erdum. erdum.
            </p>
          </div>
          <div style={{ marginLeft: "5%" }}>
            <img
              src="https://afsu.tohidur.com/img/sine.png"
              alt="Image not found"
            />
          </div>
        </div>
      </div>

      <div
        style={{ marginTop: "20px" }}
        className="w-full flex flex-col items-center justify-center lg:flex-row"
      >
        <div className={` w-full flex-col items-center  md:flex-row`}>
          <div className={` w-full flex flex-col items-center  md:flex-row`}>
            <ul>
              {[
                { data: "Age:", responseData: " 29" },
                { data: "Residence:", responseData: " USA" },
                {
                  data: "Address:",
                  responseData: " 88 Some Street, Some Town",
                },
                { data: "E-mail:", responseData: " email@example.com" },
                { data: "Phone:", responseData: " +0123 123 456 789" },
                { data: "Freelance:", responseData: " Available" },
              ].map((item, index) => (
                <UserInfo
                  key={index}
                  data={item.data}
                  responseData={item.responseData}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#edebeb",
                    padding: "10px",
                    borderRadius: "20px",
                  }}
                />
              ))}
            </ul>
          </div>
        </div>

        <div
          className={`w-full flex flex-col items-center justify-center lg:flex-row`}
        >
          <div style={{ width: "100%" }}>
            <Skills isGridLayout={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorInfo;
