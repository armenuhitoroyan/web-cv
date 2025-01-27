import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";

import ServicePage from "../pages/ServicePage";
import PortfolioPage from "../pages/PortfolioPage";
import BlogPage from "../pages/BlogPage";
import Navbar from "../components/Navbar";
import ErrorPage from "../pages/pages/Error";
import Servicedetails from "../pages/ServiceDetails";
import Homepage4 from "../pages/Homepage/Home4";
import Homepage2 from "../pages/Homepage/Home2";
import Contact from "../pages/Contact";
import BlogDetails2 from "../pages/Blog/BlogDetails2";
import OurBlog from "../pages/Blog/OurBlog";
import PortfolioDetails from "../pages/portfolio/PortfolioDetails";
import HomePage3 from "../pages/Homepage/Home3";
import PricingPlans from "../pages/pages/PricingPlans";
import PortfolioDetails2 from "../pages/portfolio/Profiledetails2";

function AppRoutes(): JSX.Element {
  const hideNavbar =
    location.pathname === "/index-4" || location.pathname === "/index-4-dark";
  return (
    <Router>
      <Navbar />
      {/* {hideNavbar && <Navbar />} */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/index-2" element={<Homepage2 />} />
        <Route path="/index-3" element={<HomePage3 />} />
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
        <Route path="/portfolio-details" element={<PortfolioDetails />} />
        <Route path="/portfolio-details2" element={<PortfolioDetails2 />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/our-blog" element={<OurBlog />} />
        <Route path="/blog-details-2" element={<BlogDetails2 />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="/pricing-plans" element={<PricingPlans />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
