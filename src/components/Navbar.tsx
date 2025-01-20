import React from "react";
import { Link } from "react-router-dom"; // Բեռնում ենք Link-ը react-router-dom-ից

const Navbar: React.FC = () => {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#333", color: "white" }}>
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
          <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
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
  );
};

export default Navbar;
