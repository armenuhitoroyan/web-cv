import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
import PortfolioDetails2 from "../pages/portfolio/PortfolioDetails2";
import { useScrolling } from "../hooks/useScrolling";
import LoadingComponent from "../components/Loading";
import { useEffect, useState } from "react";

function AppRoutesContent(): JSX.Element {
  const [loading, setLoading] = useState(true);

  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  const [messages, setMessages] = useState<string[]>([]);

  const { isScrolled } = useScrolling();
  const location = useLocation();
  const hideNavbar =
    location.pathname === "/index-4" || location.pathname === "/index-4-dark";

  console.log(isScrolled);

  useEffect(() => {
    // Ստուգում ենք ինտերնետի կապը
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Մեջտեղում WebSocket կապի վիճակագրությունը
    const wsStatus = messages.length > 0; // Եթե հաղորդագրություն ստացվեց, ապա WebSocket կապը հաստատված է
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    setLoading(!(isOnline && wsStatus));

    // Ավելացնում ենք միջոցառումներ
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Մաքրում ենք timer-ը և հեռացնում event listener-ները
    return () => {
      clearTimeout(timer);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [isOnline, messages]);

  return (
    <>
      {!isOnline ? (
        <div>
          <LoadingComponent />
          {/* <Navbar /> */}
        </div>
      ) : (
        <div>
          <Navbar />
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
        </div>
      )}
    </>
  );
}

function AppRoutes(): JSX.Element {
  return (
    <Router>
      <AppRoutesContent />
    </Router>
  );
}

export default AppRoutes;
