import React from "react";
import styles from "../../style/BlogDetails2.module.css";
import Footer from "../../components/footer/Footer";
import ParticlesContainer from "../../components/ParticlesContainer";
import bgImage from "../../assets/images/blog-detail.jpg";
import BlogData from "../../components/BlogData";
import ImageModel from "../../components/ImageModel";
import DesignPages from "../../components/DesignPages";
import PostedCard from "../../components/PostedCard";
import AboutAuthor from "../../components/AboutAuthor";
import AddComment from "../../components/AddComment";
import AddCommentForm from "../../components/form/AddCommentForm";
import { useTitle } from "../../hooks/useTitle";

const BlogDetails2: React.FC = () => {
  useTitle("Blog Details 2");
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
      className={`w-full  flex-col items-center justify-center md:flex-row ${styles.container}`}
    >
      <div className={styles.menu}>
        <ParticlesContainer
          title="Our Blog / Blog Details 2"
          ref="blog"
          img={bgImage}
        />
      </div>
      <div
        className={` ${styles.blog_container} flex justify-center items-center`}
      >
        <div
          className={`${styles.blog_content}  flex-col justify-center items-center md:flex-row`}
        >
          <BlogData
            img="https://afsu.tohidur.com/img/blog-two-1.jpg"
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
            fruitcake tart caramels marzipan. Brownie I love chocolate that bar
            sesliquorice. I love to otsie roll dragée bonbon croisnt. Chupa
            chups loream sesame snaps jelly tiramiipsum dolor sit amet sou ffl
            liquorice oat cake biscuit jesms tiramisu jelly dash Caramels
            chocolatsweet roll tart. Jelly-o fruitcake ta rt caramels marzipan
            Brownie I love chocolate bar. Cake I love liquorice n’t act so
            surprised, Your Highnes You weren’t on any mercy mison this time to
            this shp before me. <br />
            <br />
            Tighten your grip, Tarkin, the more star systems will slip through
            your fingers.Still, got a lot of spirit what do you think? What!? I
            don’t know what you’re talking about. I am a member of the
            Imperidiplomatic mission to Alderaan good is a reward if you aint
            tas around to use it Besides, attackin station ain’t my idea of cou
            rage. It’s more like suicide.
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
            jelly tiramiipsum dolor sit amet sou ffl liquorice oat cake biscuit
            jesms tiramisu jelly dash Caramels chocolatsweet roll tart. lotsie
            roll dragée b onbon croisnt. Chupa chups loream sesame snaps jelly
            tiramiipsum dolor sit amet sou ffl liquorice oat a ake biscuit jesms
            tiramisu jelly dash Caramelsn t. Chupa chups loream sesame snaps
            jelly tiramiipsum a olor sit amet souffl liquorice oat cake biscuit
            jesms tiramis.
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
                  If you don’t need either of these at the moment, you certainly
                  have friends
                </span>
              </li>
              <li>
                <span>
                  If you don’t need either of these at the moment, you certainly
                  have friends
                </span>
              </li>
              <li>
                <span>
                  If you don’t need either of these at the moment, you certainly
                  have friends
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
            your fingers.Still, got a lot of spirit what do you think? What!? I
            don’t know what you’re talking about. I am a member of the
            Imperidiplomatic mission to Alderaan good is a reward if you aint
            tas around to use it Besides, attackin station ain’t my idea of cou
            rage. It’s more like suicide.
          </p>

          <DesignPages />

          <div
            className={`${styles.posted_card} flex flex-col justify-center items-center gap-10 md:flex-row`}
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
      <Footer />
    </div>
  );
};

export default BlogDetails2;
