import React from "react";
import { Link } from "react-router-dom"; // Բեռնում ենք Link-ը react-router-dom-ից
import image from "../assets/images/afsu-logo.png";
import Download from "./form/Download";
import styles from "../style/Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <div
      className={`w-full  flex items-center justify-center md:flex-row gap-20 ${styles.header}`}
    >
      <img src={image} alt="logo not found!" />
      <nav style={{ padding: "1rem", color: "white" }}>
        <ul style={{ listStyleType: "none", display: "flex", gap: "1rem" }}>
          <li>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/service"
              style={{ color: "white", textDecoration: "none" }}
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              style={{ color: "white", textDecoration: "none" }}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/blog" style={{ color: "white", textDecoration: "none" }}>
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{ color: "white", textDecoration: "none" }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{ color: "white", textDecoration: "none" }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Download
        text="Download CV"
        href="./assets/files/Armenuhi Toroyan CV.pdf"
        download="Armenuhi Toroyan CV.pdf"
        color="white"
      />
    </div>
  );
};

export default Navbar;
