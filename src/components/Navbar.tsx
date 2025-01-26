import { Link } from "react-router-dom"; // Բեռնում ենք Link-ը react-router-dom-ից
import image from "../assets/images/afsu-logo.png";
import Download from "./form/Download";
import styles from "../style/Navbar.module.css";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const path = e.target.value;
    navigate(path);
  };
  return (
    <div
      className={`w-full  flex items-center justify-center md:flex-row gap-20 ${styles.header}`}
    >
      <img src={image} alt="logo not found!" />
      <nav style={{ padding: "1rem", color: "white" }}>
        <ul
          className={styles.list}
          style={{ listStyleType: "none", display: "flex", gap: "1rem" }}
        >
          <li>
            <select
              style={{ background: "transparent", border: "none" }}
              onChange={handleChange}
              className="select-dropdown"
            >
              <option value="/">Home</option>
              <option value="/index-2">Home 2</option>
              <option value="/index-4">Home 4 (Light)</option>
              <option value="/index-4-dark">Home 4 (Dark)</option>
            </select>
          </li>
          <li>
            <select
              style={{ background: "transparent", border: "none" }}
              onChange={handleChange}
              className="select-dropdown"
            >
              <option value="/service">Services</option>
              <option value="/services-details">Services Details</option>
            </select>
          </li>
          <li>
            <select
              style={{ background: "transparent", border: "none" }}
              onChange={handleChange}
              className="select-dropdown"
            >
              <option value="/portfolio">Portfolio</option>
              <option value="/portfolio-details">Portfolio Details</option>
            </select>
          </li>
          <li>
            <select
              style={{ background: "transparent", border: "none" }}
              onChange={handleChange}
              className="select-dropdown"
            >
              <option value="/blog">Blog 1</option>
              <option value="/our-blog">Our Blog </option>
              <option value="/blog-details-2">Blog 2</option>
            </select>
          </li>
          <li>
            <select
              style={{ background: "transparent", border: "none" }}
              onChange={handleChange}
              className="select-dropdown"
            >
              <option value="/about">About</option>
              <option value="/404">Error</option>
            </select>
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
        width="200px"
      />
    </div>
  );
};

export default Navbar;
