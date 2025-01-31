import React from "react";
import styles from "../style/BlogDetails2.module.css";
import Footer from "../components/footer/Footer";
import ParticlesContainer from "../components/ParticlesContainer";
import bgImage from "../assets/images/fog.png";
import BlogData from "../components/BlogData";
import ImageModel from "../components/ImageModel";
import DesignPages from "../components/DesignPages";
import PostedCard from "../components/PostedCard";
import AboutAuthor from "../components/AboutAuthor";
import AddComment from "../components/AddComment";
import AddCommentForm from "../components/form/AddCommentForm";
import Input from "../components/form/Input";
import News from "../components/News";
import Category from "../components/Categories";
import { useTitle } from "../hooks/useTitle";

const BlogPage: React.FC = () => {
  useTitle("Blog Details 1");
  const handleAddComment = (formData: {
    name: string;
    email: string;
    phone: string;

    comment: string;
  }) => {
    // Handle the submitted form data
    console.log("Comment Added:", formData);
  };

  return (
    <div
      className={`w-full  flex-col items-center justify-center lg:flex-row ${styles.container}`}
    >
      <div className={styles.menu}>
        <ParticlesContainer
          title="Our Blog / Blog Details 1"
          ref="blog"
          img={bgImage}
        />
      </div>

      <div className="w-full  flex flex-col  justify-center lg:flex-row">
        <div
          style={{ width: "65%" }}
          className={` ${styles.blog_container} flex justify-center items-center`}
        >
          <div
            style={{ marginLeft: "0px !important" }}
            className={`${styles.blog_content}  flex-col justify-center items-center lg:flex-row`}
          >
            <BlogData
              img="https://afsu.tohidur.com/img/profile-1.jpg"
              profileImg="https://afsu.tohidur.com/img/45.jpg"
              date="December 5, 2023"
              author="Willimes Marker"
              title="Professionals with a Global Mindset"
              text={``}
              pSize="17px"
            />

            <p style={{ margin: "0 auto" }} className="blog-paragraph">
              ipsum dolor sit amet soufflé. I love liquorice oat cake biscuit
              tiramisu jelly danish Caramels its chorice sw eet roll tart. Jelly
              fruitcake tart caramels marzipan. Brownie I love chocolate that
              bar sesliquorice. I love to otsie roll dragée bonbon croisnt.
              Chupa chups loream sesame snaps jelly tiramiipsum dolor sit amet
              sou ffl liquorice oat cake biscuit jesms tiramisu jelly dash
              Caramels chocolatsweet roll tart. Jelly-o fruitcake ta rt caramels
              marzipan Brownie I love chocolate bar. Cake I love liquorice n’t
              act so surprised, Your Highnes You weren’t on any mercy mison this
              time to this shp before me. <br />
              <br />
              Tighten your grip, Tarkin, the more star systems will slip through
              your fingers.Still, got a lot of spirit what do you think? What!?
              I don’t know what you’re talking about. I am a member of the
              Imperidiplomatic mission to Alderaan good is a reward if you aint
              tas around to use it Besides, attackin station ain’t my idea of
              cou rage. It’s more like suicide.
            </p>
            <div
              className={`${styles.advice} flex justify-center items-center border-purple-300 rounded-2xl`}
            >
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
                <h4>
                  “ If you've got an idea, start today. There's no better time
                  than now to get going. That doesn't mean quit your job ”
                </h4>
                <span>Writing by Jackson Doe</span>
              </div>
            </div>

            <p
              style={{ fontWeight: "normal !important" }}
              className={styles.blog_p}
            >
              lotsie roll dragée bonbon croisnt. Chupa chups loream sesame snaps
              jelly tiramiipsum dolor sit amet sou ffl liquorice oat cake
              biscuit jesms tiramisu jelly dash Caramels chocolatsweet roll
              tart. lotsie roll dragée b onbon croisnt. Chupa chups loream
              sesame snaps jelly tiramiipsum dolor sit amet sou ffl liquorice
              oat a ake biscuit jesms tiramisu jelly dash Caramelsn t. Chupa
              chups loream sesame snaps jelly tiramiipsum a olor sit amet souffl
              liquorice oat cake biscuit jesms tiramis.
            </p>

            <div style={{ marginTop: "50px" }}>
              <ul className={styles.bullet_list}>
                <li>
                  <span>Motivation and encouragement from time to time</span>
                </li>
                <li>
                  <span>1000 motivational quotes in the database</span>
                </li>
                <li>
                  <span>
                    If you don’t need either of these at the moment, you
                    certainly have friends
                  </span>
                </li>
                <li>
                  <span>
                    If you don’t need either of these at the moment, you
                    certainly have friends
                  </span>
                </li>
                <li>
                  <span>
                    If you don’t need either of these at the moment, you
                    certainly have friends
                  </span>
                </li>
              </ul>
            </div>

            <div className="pouch-section">
              <div className="flex gap-10">
                <ImageModel
                  src="https://afsu.tohidur.com/img/profile-2.jpg"
                  width="60%"
                  height="400px"
                />
                <ImageModel
                  src="https://afsu.tohidur.com/img/profile-3.jpg"
                  width="40%"
                  height="400px"
                />
              </div>

              <ImageModel
                src="https://afsu.tohidur.com/img/profile-4.jpg"
                width="100%"
                height="400px"
              />
            </div>

            <p
              style={{ fontWeight: "normal !important" }}
              className={styles.blog_p}
            >
              Tighten your grip, Tarkin, the more star systems will slip through
              your fingers.Still, got a lot of spirit what do you think? What!?
              I don’t know what you’re talking about. I am a member of the
              Imperidiplomatic mission to Alderaan good is a reward if you aint
              tas around to use it Besides, attackin station ain’t my idea of
              cou rage. It’s more like suicide.
            </p>

            <DesignPages />

            <div
              className={`${styles.posted_card} flex flex-col justify-center items-center gap-10 lg:flex-row`}
            >
              <div>
                <PostedCard
                  text="Whether you get knocked..."
                  content="Previous Post"
                />
              </div>

              <div>
                <PostedCard
                  text="It’s whether you get up..."
                  content="Next Post"
                />
              </div>
            </div>

            <AboutAuthor
              img="https://afsu.tohidur.com/img/blog-7.jpg"
              name="About Author"
              role="Graphic Designer"
              aboutAuthor="Lorem ipsum dolor sit amet, consectetur adipis Vivamus sceler neque in Nam vitae urnasodales neque in faucibus."
            />

            <h2 className={styles.title_comment}>02 Comments</h2>
            <div className={styles.add_comment}>
              <AddComment
                img="https://afsu.tohidur.com/img/comment-1.jpg"
                name="Nolwar Disoza"
                date="10 months ago"
                aboutAuthor="Lorem ipsum dolor sit amet, consectetur adipis Vivamus sceler neque in Nam vitae urnasodales neque in faucibus."
              />
            </div>
            <div className={styles.add_comment}>
              <div>
                <AddComment
                  img="https://afsu.tohidur.com/img/comment-2.jpg"
                  name="Thomas Walkar"
                  date="10 months ago"
                  aboutAuthor="Lorem ipsum dolor sit amet, consectetur adipis Vivamus sceler neque in Nam vitae urnasodales neque in faucibus."
                />
              </div>
            </div>

            <h2 className={styles.title_comment}>Leave a Comment</h2>
            <div style={{ marginTop: "50px" }}>
              <AddCommentForm onAdd={handleAddComment} />
            </div>
          </div>
        </div>
        {/* Part 2 */}
        <div style={{ width: "35%" }} className={styles.category_box}>
          <div className={`w-full md:w-2/5 ${styles.categories}`}>
            {/* Recent News */}
            <div className={`${styles.card} mt-4`}>
              <h2 className={styles.cardTitle}>Recent News</h2>
              <div className={styles.divider}></div>
              {[1, 2, 3, 4].map((_, index) => (
                <News
                  key={index}
                  img={`https://afsu.tohidur.com/img/recent-news-${
                    index + 1
                  }.jpg`}
                  date="December 5, 2023"
                  title="Interview Photographer Mark Seliger"
                />
              ))}
            </div>

            {/* Categories */}
            <div className={`${styles.card} mt-4`}>
              <h2 className={styles.cardTitle}>Categories</h2>
              <div className={styles.divider}></div>
              {[
                "Graphic Design",
                "UI/UX Design",
                "Creative Studio",
                "Mobile Application",
              ].map((category, index) => (
                <div key={index} className="mt-4">
                  <Category linkRef={category} refNumber="10" />
                </div>
              ))}
            </div>

            {/* Meta Links */}
            <div className={`${styles.card} mt-4`}>
              <h2 className={styles.cardTitle}>Meta Links</h2>
              <div className={styles.divider}></div>
              {["Log in", "Entries RSS", "Comments RSS", "WordPress.org"].map(
                (link, index) => (
                  <div key={index} className="mt-4">
                    <a style={{ color: "black" }} href="#">
                      {link}
                    </a>
                  </div>
                )
              )}
            </div>

            {/* Gallery Photos */}
            <div className={`${styles.card} mt-4`}>
              <h2 className={styles.cardTitle}>Gallery Photos</h2>
              <div className={styles.divider}></div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {[5, 6, 7, 8, 9, 10].map((num, index) => (
                  <img
                    style={{ borderRadius: "15px" }}
                    key={index}
                    className={styles.galleryImage}
                    src={`https://afsu.tohidur.com/img/showcase-${num}.jpg`}
                    alt="Image not found"
                  />
                ))}
              </div>
            </div>

            {/* Subscribe Newsletter */}
            <div className={`${styles.card} mt-4`}>
              <h2 className={styles.cardTitle}>Subscribe Newsletter</h2>
              <div className={styles.divider}></div>
              <p
                style={{ color: "black", marginBottom: "15px" }}
                className="text-gray-500 mt-4"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <Input
                type="text"
                name=""
                value=""
                placeholder="Enter your email..."
                onChange={() => console.log("Email entered")}
              />

              <div className="mt-4">
                <button className="bg-white  font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
