import React from "react";
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
import ImageCard from "../components/cards/ImgCard";
import Button from "../components/form/Button";
import AddUserForm from "../components/form/AddUserForm";

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

const HomePage: React.FC = () => {
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
        <div>
          <Header />
        </div>
        <div>
          <div style={{ fontSize: "20px" }}>
            <AuthorInfo />
          </div>
          <TitleContainer title="What We Do" description="Our Services" />
          <Services />
          <TitleContainer
            title="Professional Experience"
            description="My Resume"
          />
          <div className="w-full flex   items-center justify-center gap-20">
            <ImageCard
              image="https://afsu.tohidur.com/img/showcase-1.jpg"
              title="List of brands"
              subtitle="Digital Web"
            />
            <ImageCard
              image="https://afsu.tohidur.com/img/profile-3.jpg"
              title="List of brands"
              subtitle="Digital Web"
            />
            <ImageCard
              image="src/assets/images/brain.jpg"
              title="List of brands"
              subtitle="Digital Web"
            />
          </div>
          <div className="w-full flex   items-center justify-center gap-20">
            <ImageCard
              image="https://afsu.tohidur.com/img/showcase-4.jpg"
              title="List of brands"
              subtitle="Digital Web"
            />
            <ImageCard
              image="https://afsu.tohidur.com/img/showcase-6.jpg"
              title="List of brands"
              subtitle="Digital Web"
            />
            <ImageCard
              image="https://afsu.tohidur.com/img/showcase-5.jpg"
              title="List of brands"
              subtitle="Digital Web"
            />
          </div>
          <div className="w-full flex   items-center justify-center gap-20">
            <ImageCard
              image="https://afsu.tohidur.com/img/showcase-7.jpg"
              title="List of brands"
              subtitle="Digital Web"
            />
            <ImageCard
              image="https://afsu.tohidur.com/img/showcase-8.jpg"
              title="List of brands"
              subtitle="Digital Web"
            />
            <ImageCard
              image="https://afsu.tohidur.com/img/showcase-9.jpg"
              title="List of brands"
              subtitle="Digital Web"
            />
          </div>
          <Button
            text="
            Load more"
            className="rounded-button"
            onClick={() => console.log("Our Blog Page")}
          />
          <ResumeComponent firstTitle="Education" secondTitle="Experience" />
          <div className="flex flex-col freelance-available justify-center gap-10 md:flex-row">
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
            className={`${styles.contacts} flex flex-col  justify-center items-center gap-10 md:flex-row`}
          >
            <div style={{ width: "50%" }}>
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
      <Footer />
    </div>
  );
};

export default HomePage;
