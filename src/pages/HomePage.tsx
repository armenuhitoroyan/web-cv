import React, { useState } from "react";
import styles from "../style/HomePage.module.css";
import Footer from "../components/footer/Footer";
import { HiMiniEnvelope } from "react-icons/hi2";
import { HiPhone } from "react-icons/hi2";
import { HiMiniMapPin } from "react-icons/hi2";
import UserInfoCard from "../components/cards/UserInfoCard";
import Header from "../components/header/Header";
import AuthorInfo from "../components/AuthorInfo";
import ResumeComponent from "../components/Resume";
import Services from "../components/Services";
import TitleContainer from "../components/Title";

import AddUserForm from "../components/form/AddUserForm";
import { useTitle } from "../hooks/useTitle";
import ImageModel from "../components/ImageModel";

interface ArticleCardProps {
  image: string;
  commentBadge: string | number;
  dateAndUser: string;
  title: string;
  description: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  image,
  commentBadge,
  dateAndUser,
  title,
  description,
}) => {
  return (
    <div className={styles.article_card_container}>
      <div className={styles.image_container}>
        <img src={image} alt="Article" />
        <div className={styles.comment_badge}>{commentBadge}</div>
      </div>
      <div className={styles.content}>
        <p>{dateAndUser}</p>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <button>
        <span>›</span>
      </button>
    </div>
  );
};

const Assessment: React.FC = () => (
  <div
    className={`w-full flex   items-center justify-center ${styles.content_wrapper}`}
  >
    <div
      className={`w-full flex   items-center justify-center ${styles.left_section}`}
    >
      <h2>1M+ Satisfied Customers</h2>
      <p>
        Vestibulum vitae lorim tellus nec dui dictum lorim ac, place uilm rat
        Lorse ipsom
      </p>
      <div className={styles.animation_box}>{/* <Animation /> */}</div>
      <div className={styles.nav_buttons}>
        <button></button>
        <button></button>
      </div>
    </div>
  </div>
);

const images = [
  {
    id: 1,
    src: "profile-1",
    category: "branding",
    title: "Branding 1",
    description: "A creative branding concept.",
  },
  {
    id: 2,
    src: "profile-2",
    category: "development",
    title: "Development 1",
    description: "A web development showcase.",
  },
  {
    id: 3,
    src: "profile-3",
    category: "branding",
    title: "Branding 2",
    description: "Modern branding design.",
  },
  {
    id: 4,
    src: "showcase-3",
    category: "showcase",
    title: "Showcase 1",
    description: "Innovative design ideas.",
  },
  {
    id: 5,
    src: "showcase-4",
    category: "showcase",
    title: "Showcase 2",
    description: "Minimalistic showcase example.",
  },
  {
    id: 6,
    src: "showcase-5",
    category: "design",
    title: "Design 1",
    description: "Creative UI/UX design.",
  },
  {
    id: 7,
    src: "showcase-6",
    category: "ui/ux",
    title: "UI/UX 1",
    description: "Professional UI design.",
  },
  {
    id: 8,
    src: "showcase-8",
    category: "development",
    title: "Development 2",
    description: "Backend API integration.",
  },
  {
    id: 9,
    src: "showcase-1",
    category: "ui/ux",
    title: "UI/UX 2",
    description: "Frontend development concepts.",
  },
];

const categories = [
  { id: "all", label: "Show All" },
  { id: "design", label: "Design" },
  { id: "branding", label: "Branding" },
  { id: "development", label: "Development" },
  { id: "ui/ux", label: "UI/UX Design" },
];

const HomePage: React.FC = () => {
  useTitle("Home"); // Նոր վերնագիր՝ "Home"

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages = images.filter((image) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "design") return image.category === "showcase";
    if (activeCategory === "branding") return image.id === 1 || image.id === 3;
    if (activeCategory === "development")
      return image.id === 2 || image.id === 8;
    if (activeCategory === "ui/ux") return image.category === "showcase";
    return false;
  });

  const handleAddUser = (formData: {
    name: string;
    email: string;
    phone: string;
    department: string;
    message: string;
  }) => {
    // Handle the submitted form data
    console.log("User Added:", formData);
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.header}>
          <Header />
        </div>
        <div>
          <div style={{ fontSize: "20px" }}>
            <AuthorInfo />
          </div>
          <TitleContainer title="What We Do" description="Our Services" />
          <Services />

          <div style={{ marginBlock: "50px" }}>
            <TitleContainer
              title="Collection of my project"
              description="Work Showcase"
            />
          </div>
          {/* *********************** */}

          <div>
            {/* Radio input-ներ */}
            <div className="flex justify-center gap-6 mb-6">
              {categories.map((category) => (
                <label
                  key={category.id}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="category"
                    value={category.id}
                    checked={activeCategory === category.id}
                    onChange={(e) => setActiveCategory(e.target.value)}
                    className="hidden peer"
                  />
                  <div
                    className={`w-6 h-6 rounded-full border-2 ${
                      activeCategory === category.id
                        ? "bg-purple-600 border-purple-600"
                        : "bg-gray-200 border-gray-400"
                    } peer-checked:ring-2 peer-checked:ring-purple-600`}
                  ></div>
                  <span className="text-gray-800">{category.label}</span>
                </label>
              ))}
            </div>

            {/* Նկարներ */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
              {filteredImages.map((image) => (
                <div key={image.id} className="text-center">
                  <ImageModel
                    src={`https://afsu.tohidur.com/img/${image.src}.jpg`}
                    width={`100%`}
                    height={`auto`}
                  />
                  <div style={{ textAlign: "start" }}>
                    <h3 className="text-lg text-gray-300 font-semibold mt-4 mb-4">
                      <a
                        href="#"
                        className="text-black text-3xl font-bold  hover:underline hover:text-black"
                      >
                        {image.title}
                      </a>
                    </h3>
                    <h6
                      style={{ margin: "0 auto" }}
                      className="text-gray-600 text-sm"
                    >
                      {image.description}
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="bg-white  font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition">
            Load more
          </button>
          {/* Start consulting */}
          <TitleContainer
            title="Professional Experience"
            description="My Resume"
          />
          <ResumeComponent firstTitle="Education" secondTitle="Experience" />
          <div
            className={` flex flex-col freelance-available justify-center items-center gap-10 lg:flex-row`}
          >
            <ArticleCard
              image="https://afsu.tohidur.com/img/blog-1.jpg"
              commentBadge="12"
              dateAndUser="December 5, 2023 | John Smith"
              title="Interview Photographer Mark Seliger"
              description="Duis sed odio sit amet nibh vulputate cursus a sit Using an interactive app amet nibh roach."
            />
            <ArticleCard
              image="https://afsu.tohidur.com/img/blog-2.jpg"
              commentBadge="22"
              dateAndUser="December 5, 2023 | John Smith"
              title="Professionals with a Global Mindset"
              description="Duis sed odio sit amet nibh vulputate cursus a sit Using an interactive app amet nibh roach."
            />
            <ArticleCard
              image="https://afsu.tohidur.com/img/blog-3.jpg"
              commentBadge="12"
              dateAndUser="December 5, 2023 | John Smith"
              title="Reimagine, Restructure and Renew Business"
              description="Duis sed odio sit amet nibh vulputate cursus a sit Using an interactive app amet nibh roach."
            />
          </div>
          <TitleContainer
            title="Have Question Contact Us?"
            description="Love to Hear From You, Get in Touch!"
          />
          <div
            className={`${styles.contacts} flex flex-col  justify-center items-center gap-10 lg:flex-row`}
          >
            <div>
              <div>
                <UserInfoCard
                  IconComponent={HiPhone}
                  title="Phone No"
                  text="+(123) 456 7890"
                />
              </div>
              <div>
                <UserInfoCard
                  IconComponent={HiMiniEnvelope}
                  title="Email Address"
                  text="username@domain.com"
                />
              </div>
              <div>
                <UserInfoCard
                  IconComponent={HiMiniMapPin}
                  title="Location"
                  text="Block Street No 2101 USA"
                />
              </div>
            </div>
            <div className={styles.form}>
              <AddUserForm onAdd={handleAddUser} />
            </div>
          </div>
          {/* <Assessment /> */}
        </div>
      </div>
      <div className={` ${styles.footer}`}>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
