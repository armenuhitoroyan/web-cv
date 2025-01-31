import React, { useEffect, useState } from "react";
import { Layers, PenTool, Smartphone, Cloud } from "lucide-react";
import styles from "../../style/Home2.module.css";
import Footer from "../../components/footer/Footer";

import { AboutUser } from "./Home4";
import TitleContainer from "../../components/Title";
import ImageModel from "../../components/ImageModel";
import Carousel from "../../components/Carousel";
import Slider from "react-slick";
import Packages from "../../components/Package";
import bgImg from "../../assets/images/fog.png";
import { useTitle } from "../../hooks/useTitle";

interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
  bgColor: string;
}

const services: Service[] = [
  {
    title: "Graphics Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: Layers,
    bgColor: "#6de643",
  },
  {
    title: "Design Tools",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: PenTool,
    bgColor: "#f39b01",
  },
  {
    title: "Stunning Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: Smartphone,
    bgColor: "#e643ae",
  },
  {
    title: "Project Management",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: Cloud,
    bgColor: "#436de6",
  },
];

const Services: React.FC = () => {
  return (
    <section className={`w-full flex flex-col lg:flex-row justify-around `}>
      <div className={`${styles.services}`}>
        <div className="w-full flex flex-col gap-5 lg:flex-row justify-around ">
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div
                className={styles.box1}
                style={{ backgroundColor: service.bgColor }}
              ></div>
              <div
                className={`flex justify-center items-center ${styles.box2}`}
                style={{ backgroundColor: service.bgColor }}
              >
                <div>
                  <service.icon />
                </div>
              </div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface SlideData {
  id: number;
  imgSrc: string;
  date: string;
  author: string;
  description: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    imgSrc: "https://afsu.tohidur.com/img/blog-3.jpg",
    date: "December 5, 2023",
    author: "John Smith",
    description: "Interview Photographer Mark Seliger Agency",
  },
  {
    id: 2,
    imgSrc: "https://afsu.tohidur.com/img/zoom-3.jpg",
    date: "December 5, 2023",
    author: "John Smith",
    description: "The Beauty of Nature Captured in Frames",
  },
  {
    id: 3,
    imgSrc: "https://afsu.tohidur.com/img/blog-2.jpg",
    date: "December 5, 2023",
    author: "John Smith",
    description: "Exploring Urban Landscapes with Photography",
  },
  {
    id: 4,
    imgSrc: "https://afsu.tohidur.com/img/zoom-1.jpg",
    date: "December 5, 2023",
    author: "John Smith",
    description: "Capturing Memories through Portrait Photography",
  },
  {
    id: 5,
    imgSrc: "https://afsu.tohidur.com/img/zoom-2.jpg",
    date: "December 5, 2023",
    author: "John Smith",
    description: "Adventures in Wildlife Photography",
  },
];

const PortfolioCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // փոփոխվում է յուրաքանչյուր 3 վայրկյանում
    return () => clearInterval(interval);
  }, []);

  const getClassName = (index: number) => {
    if (index === activeIndex) return styles.active;
    if (index === (activeIndex + 1) % slides.length) return styles.next;
    if (index === (activeIndex - 1 + slides.length) % slides.length)
      return styles.prev;
    return styles.hidden;
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current: number, next: number) => {
      setActiveIndex(next);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={` ${styles.slide} ${getClassName(index)}`}
          >
            <img
              src={slide.imgSrc}
              alt={`Slide ${index + 1}`}
              style={{ width: "85%", borderRadius: "20px" }}
            />
            <div className={styles.author_info}>
              <span>{slide.date}</span>
              <span>{slide.author}</span>
              <h5>{slide.description}</h5>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const timelineData = [
  {
    yearRange: "2018 to Present",
    role: "Graphic Designer",
    company: "Company",
    description:
      "Lorem ipsum indolor st amet, cmetc ur locing elit, sedi dinm indolo sum ind ol m indolor st amet, cmetcilmes.",
  },
  {
    yearRange: "2016 to 2018",
    role: "Graphic Designer",
    company: "Company",
    description:
      "Lorem ipsum indolor st amet, cmetc ur locing elit, sedi dinm indolo sum ind ol m indolor st amet, cmetcilmes.",
  },
  {
    yearRange: "2014 to 2016",
    role: "Graphic Designer",
    company: "Company",
    description:
      "Lorem ipsum indolor st amet, cmetc ur locing elit, sedi dinm indolo sum ind ol m indolor st amet, cmetcilmes.",
  },
];

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? timelineData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === timelineData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.timelineContainer}>
      <div className="flex justify-between">
        <div>
          <h2 className={styles.header}>Professional Experience</h2>
          <h1 className={styles.title}>Work Experience</h1>
        </div>
        <div className="flex justify-end" style={{ marginLeft: "195%" }}>
          <button className={styles.navButton} onClick={handlePrev}>
            &lt;
          </button>
          <button className={styles.navButton} onClick={handleNext}>
            &gt;
          </button>
        </div>
      </div>
      <div className={styles.timeline}>
        <div className={styles.timelineLine}>
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`${styles.timelinePoint} ${
                index === activeIndex ? styles.active : ""
              }`}
            ></div>
          ))}
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.contentCard}>
            <h3 className={styles.yearRange}>
              {timelineData[activeIndex].yearRange}
            </h3>
            <p className={styles.role}>{timelineData[activeIndex].role}</p>
            <h4 className={styles.company}>
              {timelineData[activeIndex].company}
            </h4>
            <p className={styles.description}>
              {timelineData[activeIndex].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Homepage2: React.FC = () => {
  useTitle("Home 2"); // Նոր վերնագիր՝ "Home"
  return (
    <div
      className={`w-full  flex-col lg:flex-col justify-between ${styles.container}`}
    >
      <div className={`w-full flex flex-col lg:flex-row justify-around `}>
        <AboutUser color="black" />
        <div
          className={`w-full flex flex-col lg:flex-row justify-around ${styles.context}`}
        >
          <img src="https://afsu.tohidur.com/img/girl.png" alt="Profile" />
          <div className={styles.info}>
            <div>
              <h2>12 +</h2>
              <p>Years Working Experience</p>
            </div>
            <div></div>
            <div>
              <h2>10 k</h2>
              <p>Happy Satisfied Customers</p>
            </div>
          </div>
        </div>
      </div>
      <Services />
      <TitleContainer
        title="Collection of my project"
        description="Work Showcase"
      />
      <div className="w-full flex-col lg:flex-col gap-5 items-center justify-around">
        <div className="w-full flex flex-col lg:flex-row gap-5 justify-around">
          <div style={{ width: "100%" }}>
            <ImageModel
              src="https://afsu.tohidur.com/img/profile-home-img-1.jpg"
              width=""
              height=""
            />
            <div className={styles.skill_info}>
              <a href="#">Doerner Investigations</a>
              <p>Website Design, Branding</p>
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <ImageModel
              src="https://afsu.tohidur.com/img/profile-6.jpg"
              width=""
              height=""
            />
            <div className={styles.skill_info}>
              <a href="#">Creative Studio</a>
              <p>Website Design, Branding</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-5 justify-around">
          <div>
            <ImageModel
              src="https://afsu.tohidur.com/img/profile-home-img-5.jpg"
              width=""
              height=""
            />
            <div className={styles.skill_info}>
              <a href="#">Web Mockup</a>
              <p>Studio, Branding</p>
            </div>
          </div>
          <div>
            <ImageModel
              src="https://afsu.tohidur.com/img/profile-home-img-6.jpg"
              width=""
              height=""
            />
            <div className={styles.skill_info}>
              <a href="#">Illustrator Design</a>
              <p>Website Design, Branding</p>
            </div>
          </div>
          <div>
            <ImageModel
              src="https://afsu.tohidur.com/img/profile-home-img-7.jpg"
              width=""
              height=""
            />

            <div className={styles.skill_info}>
              <a href="#">Vector Art</a>
              <p>Website Design, Branding</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-5 justify-around">
          <div>
            <ImageModel
              src="https://afsu.tohidur.com/img/profile-home-img-3.jpg"
              width=""
              height=""
            />
            <div className={styles.skill_info}>
              <a href="#">Branding Identity</a>
              <p>Website Design, Branding</p>
            </div>
          </div>
          <div>
            <ImageModel
              src="https://afsu.tohidur.com/img/profile-home-img-4.jpg"
              width=""
              height=""
            />
            <div className={styles.skill_info}>
              <a href="#">App UX UI Design</a>
              <p>Website Design, Branding</p>
            </div>
          </div>
        </div>
        <button className="bg-white  font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition">
          Load more
        </button>
      </div>
      {/*  */}
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className={`w-full  flex-col lg:flex-col gap-5 justify-around items-center ${styles.creative}`}
      >
        <h2>Let's Create Something Creative Together</h2>
        <p>We can't wait to hear from making something beautiful and new!</p>
        <button className="bg-white  font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition">
          Start Consulting
        </button>
      </div>
      <Timeline />
      <TitleContainer title="News & Blog" description="Recent Articles" />
      <div style={{ marginTop: "50px", marginBottom: "50px" }}>
        <PortfolioCarousel />
      </div>
      <Packages />
      <Carousel />
      <div className={`w-screen w-full flex ${styles.footer}`}>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage2;
