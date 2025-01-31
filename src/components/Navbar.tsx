import { Link, useLocation } from "react-router-dom"; // Բեռնում ենք Link-ը react-router-dom-ից
// import image from "../assets/images/afsu-logo.png";
import Download from "./form/Download";
import styles from "../style/Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { useScrolling } from "../hooks/useScrolling";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { isScrolled } = useScrolling();
  const location = useLocation();

  console.log(isScrolled);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const path = e.target.value;
    navigate(path);
  };
  return (
    <div
      style={{
        backgroundColor: isScrolled
          ? "rgba(255, 255, 255, 1)"
          : "rgba(255, 255, 255, 0.01)",

        marginTop: isScrolled ? "-2.2%" : "0px",
      }}
      className={`w-full  flex items-center justify-center lg:flex-row gap-10 ${styles.header}`}
    >
      <img
        src={
          location.pathname === "/index-3" || isScrolled
            ? "src/assets/images/black-logo.png"
            : "src/assets/images/afsu-logo.png"
        }
        alt="logo not found!"
      />
      <nav style={{ padding: "1rem", color: "white" }}>
        <ul
          className={styles.list}
          style={{ listStyleType: "none", display: "flex", gap: "1rem" }}
        >
          <li>
            <select
              style={{
                color:
                  location.pathname === "/index-3" || isScrolled
                    ? "black"
                    : "white",
              }}
              onChange={handleChange}
              className="select-dropdown"
            >
              <option value="" disabled>
                Home
              </option>
              <option value="/">Home 1</option>
              <option value="/index-2">Home 2</option>
              <option value="/index-3">Home 3</option>
              <option value="/index-4">Home 4 (Light)</option>
              <option value="/index-4-dark">Home 4 (Dark)</option>
            </select>
          </li>
          <li>
            <select
              style={{
                color:
                  location.pathname === "/index-3" || isScrolled
                    ? "black"
                    : "white",
              }}
              onChange={handleChange}
              className="select-dropdown"
            >
              <option value="" disabled>
                Services
              </option>
              <option value="/service">Services</option>
              <option value="/services-details">Services Details</option>
            </select>
          </li>
          <li>
            <select
              style={{
                color:
                  location.pathname === "/index-3" || isScrolled
                    ? "black"
                    : "white",
              }}
              onChange={handleChange}
              className="select-dropdown"
            >
              <option value="" disabled>
                Portfolio
              </option>
              <option value="/portfolio">Portfolio</option>
              <option value="/portfolio-details">Portfolio Details</option>
              <option value="/portfolio-details2">Portfolio Details 2</option>
            </select>
          </li>
          <li>
            <select
              style={{
                color:
                  location.pathname === "/index-3" || isScrolled
                    ? "black"
                    : "white",
              }}
              onChange={handleChange}
              className="select-dropdown"
            >
              <option value="" disabled>
                Blog
              </option>
              <option value="/our-blog">Our Blog </option>
              <option value="/blog">Blog 1</option>
              <option value="/blog-details-2">Blog 2</option>
            </select>
          </li>
          <li>
            <select
              style={{
                color:
                  location.pathname === "/index-3" || isScrolled
                    ? "black"
                    : "white",
              }}
              onChange={handleChange}
              className="select-dropdown"
            >
              <option value="" disabled>
                Pages
              </option>

              <option value="/about">About</option>
              <option value="/pricing-plans">Pricing Plans</option>
              <option value="/404">Error</option>
            </select>
          </li>
          <li>
            <Link
              style={{
                color:
                  location.pathname === "/index-3" || isScrolled
                    ? "black"
                    : "white",
                textDecoration: "none",
              }}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.button}>
        <Download
          text="Download CV"
          href="./assets/files/Armenuhi Toroyan CV.pdf"
          download="Armenuhi Toroyan CV.pdf"
          color={
            location.pathname === "/index-3" || isScrolled ? "black" : "white"
          }
          width="200px"
        />
      </div>
    </div>
  );
};

export default Navbar;
