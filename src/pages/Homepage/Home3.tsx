import React, { useState } from "react";
import styles from "../../style/Home3.module.css";
import Footer from "../../components/footer/Footer";
import HeaderH3 from "../../components/header/HeaderH3";
import Services from "../../components/Services";
import TitleContainer from "../../components/Title";
import UserInfo from "../../components/UserInfo";
import ImageModel from "../../components/ImageModel";
import UserInfoCard from "../../components/cards/UserInfoCard";
import AddUserForm from "../../components/form/AddUserForm";
import { HiMiniEnvelope, HiMiniMapPin, HiPhone } from "react-icons/hi2";
import Skills from "../../components/Skills";
import { useTitle } from "../../hooks/useTitle";

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

const HomePage3: React.FC = () => {
  useTitle("Home 3"); // Նոր վերնագիր՝ "Home"
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
        <div>
          <HeaderH3 />
          <div style={{ marginBlock: "50px" }}>
            <TitleContainer title="Who I am" description="About My Resume" />
          </div>
          <div
            className={`${styles.user_info}  w-full flex flex-col justify-start items-center lg:flex-row`}
          >
            <div
              style={{ width: "100%" }}
              className={` w-full flex-col items-center  lg:flex-row`}
            >
              <div
                className={` w-full flex flex-col items-center  lg:flex-row`}
              >
                <ul>
                  {[
                    { data: "Age:", responseData: " 29" },
                    { data: "Residence:", responseData: " USA" },
                    {
                      data: "Address:",
                      responseData: " 88 Some Street, Some Town",
                    },
                    { data: "E-mail:", responseData: " email@example.com" },
                    { data: "Phone:", responseData: " +0123 123 456 789" },
                    { data: "Freelance:", responseData: " Available" },
                  ].map((item, index) => (
                    <UserInfo
                      key={index}
                      data={item.data}
                      responseData={item.responseData}
                      style={{
                        backgroundColor: index % 2 === 0 ? "white" : "#f7f8fe",
                        padding: "10px",
                        borderRadius: "20px",
                      }}
                    />
                  ))}
                </ul>
              </div>
            </div>
            <div
              style={{ width: "100%" }}
              className="w-full flex justify-start flex-col items-center"
            >
              <img src="https://afsu.tohidur.com/img/girl.png" alt="Profile" />
            </div>
          </div>
          <div style={{ marginTop: "70px" }}>
            <Skills isGridLayout={false} />
          </div>
          <div style={{ marginBlock: "50px" }}>
            <TitleContainer title="What We Do" description="Our Services" />
          </div>
          <Services />
          <div style={{ marginBlock: "50px" }}>
            <TitleContainer
              title="Testimonials"
              description="Client’s Reviews"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-10 lg:flex-row">
            <div
              className={`${styles.advice}  justify-center items-center border-purple-300 rounded-2xl`}
            >
              <h4>
                We help our clients from the definition of their strategy to the
                realization of their digital ecosystem. At the heart of our
                approach is the constant search for the juncture between
                aesthetic.
              </h4>
              <div className="flex justify-center items-center">
                <div
                  className={`${styles.image_container} flex justify-center items-center`}
                >
                  <img
                    src="https://afsu.tohidur.com/img/quote-1.png"
                    alt="Img not found!"
                  />
                </div>
                <div
                  className={`flex-box justify-center items center border-purple-300 rounded-2xl`}
                >
                  <h2 className="text-black font-bold">Edison Cavani</h2>
                  <span>Writing by Jackson Doe</span>
                </div>
              </div>
            </div>
            <div
              className={`${styles.advice}  justify-center items-center border-purple-300 rounded-2xl`}
            >
              <h4>
                We help our clients from the definition of their strategy to the
                realization of their digital ecosystem. At the heart of our
                approach is the constant search for the juncture between
                aesthetic.
              </h4>
              <div className="flex justify-center items-center">
                <div
                  className={`${styles.image_container} flex justify-center items-center`}
                >
                  <img
                    src="https://afsu.tohidur.com/img/quote-1.png"
                    alt="Img not found!"
                  />
                </div>
                <div
                  className={`flex-box justify-center items center border-purple-300 rounded-2xl`}
                >
                  <h2 className="text-black font-bold">Edison Cavani</h2>
                  <span>Writing by Jackson Doe</span>
                </div>
              </div>
            </div>
          </div>
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
            <div className="grid grid-cols-3 gap-4">
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

          {/* *********************** */}
          <button
            style={{ marginTop: "20px" }}
            className="bg-white  font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition"
          >
            Load more
          </button>
        </div>
        <div style={{ marginBlock: "50px" }}>
          <TitleContainer
            title="Have Question Contact Us?"
            description="Love to Hear From You, Get in Touch!"
          />
        </div>
        <div
          className={`${styles.contacts} flex flex-col  justify-center items-center gap-10 lg:flex-row`}
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
      </div>
      <Footer />
    </div>
  );
};

export default HomePage3;
