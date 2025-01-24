import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";

import ServicePage from "../pages/ServicePage";
import PortfolioPage from "../pages/PortfolioPage";
import BlogPage from "../pages/BlogPage";
import Navbar from "../components/Navbar";
import ErrorPage from "../pages/pages/Error";
import Servicedetails from "../pages/ServiceDetails";
import Homepage4 from "../pages/Homepage/Home4";

function AppRoutes(): JSX.Element {
  const hideNavbar =
    location.pathname === "/index-4" || location.pathname === "/index-4-dark";
  return (
    <Router>
      {hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/index-4"
          element={<Homepage4 backgroundColor="white" color="#030718" />}
        />
        <Route
          path="/index-4-dark"
          element={<Homepage4 backgroundColor="#030718" color="white" />}
        />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/services-details" element={<Servicedetails />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
