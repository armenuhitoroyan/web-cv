import React from "react";
import styles from "../style/BlogPage.module.css";
import Footer from "../components/footer/Footer";
import ParticlesContainer from "../components/ParticlesContainer";
import bgImage from "../assets/images/bgimg.jpg";
import BlogData from "../components/BlogData";
import ImageModel from "../components/ImageModel";
import DesignPages from "../components/DesignPages";
import PostedCard from "../components/PostedCard";
import AboutAuthor from "../components/AboutAuthor";
import AddComment from "../components/AddComment";
import AddCommentForm from "../components/form/AddCommentForm";
import News from "../components/News";
import Category from "../components/Categories";
import image from "../assets/images/icon.png";

const BlogPage: React.FC = () => {
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
    <div className={`${styles.container}`}>
      <div className={styles.menu}>
        <ParticlesContainer
          title="Our Blog / Details 1"
          ref="blog"
          img={bgImage}
        />
      </div>
      <div className={`w-full flex ${styles.blog_container}`}>
        <div className={styles.blog_content}>
          <BlogData
            img="https://afsu.tohidur.com/img/zoom-3.jpg"
            profileImg="https://afsu.tohidur.com/img/45.jpg"
            date="December 5, 2023"
            author="Willimes Marker"
            title="Professionals with a Global Mindset"
            text={`ipsum dolor sit amet soufflé. I love liquorice oat cake biscuit tiramisu jelly danish Caramels its chorice sweet roll tart. Jelly fruitcake tart caramels marzipan. Brownie I love chocolate that bar sesliquorice. I love to otsie roll dragée bonbon croisnt.`}
            pSize="17px"
          />

          <div className={`w-full flex l gap-10  ${styles.quote_section}`}>
            <div
              className={`w-full flex flex-col justify-center items-center ${styles.quote_icon}`}
            >
              <img src={image} alt="Quote" />
            </div>
            <div className={styles.quote_text}>
              <div
                className={styles.quote_main}
              >{`“ If you've got an idea, start today. There's no better time than now to get going. That doesn't mean quit your job ”`}</div>
              <p>Writing by Jackson Doe</p>
            </div>
          </div>

          <p className={styles.blog_paragraph}>
            lotsie roll dragée bonbon croisnt. Chupa chups lorem sesame snaps
            jelly tiramisu ipsum dolor sit amet soufflé liquorice oat cake
            biscuit tiramisu jelly danish caramels sweet roll tart.
          </p>
          <ul className={styles.bullet_points}>
            <li>Motivation and encouragement from time to time</li>
            <li>1000 motivational quotes in the database</li>
            <li>
              If you don’t need either of these at the moment, you certainly
              have friends
            </li>
            <li>You and help uplift your day</li>
            <li>
              Provide a motivational quote for you as you place your head on the
              pillow
            </li>
          </ul>

          <div className={styles.pouch_section}>
            <div
              className={`w-full flex flex-col justify-center items-center ${styles.pouches}`}
            >
              <ImageModel
                src="https://afsu.tohidur.com/img/profile-2.jpg"
                width=""
                height=""
              />
              <ImageModel
                src="https://afsu.tohidur.com/img/profile-3.jpg"
                width=""
                height=""
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <img
                className={styles.wide_image}
                src="https://afsu.tohidur.com/img/profile-4.jpg"
                alt="Pouch Image"
              />
            </div>

            <p className={styles.text}>
              Tighten your grip, Tarkin, the more star systems will slip through
              your fingers.Still, got a lot of spirit what do you think? What!?
              I don’t know what you’re talking about. I am a member of the
              Imperidiplomatic mission to Alderaan good is a reward if you aint
              tas around to use it Besides, attackin station ain’t my idea of
              cou rage. It’s more like suicide.
            </p>
            <div className="w-full flex  gap-20">
              <p className={styles.text}>
                ipsum dolor sit amet soufflé. I love liquorice oat cake biscuit
                tiramisu jelly danish Caramels its chorice sw eet roll tart.
                Jelly fruitcake tart caramels marzipan. Brownie I love chocolate
                that bar sesliquorice. I love to otsie roll dragée bonbon
                croisnt. Chupa chups lo ream sesame snaps jelly tiramiipsum
                dolor sit am et souffl liquorice oat cake biscuit jesms tiramisu
                jelly dash Caramels chocolatsweet roll tart. Jelly-o fruitc ake
                tart caramels marzipan.
              </p>
              <div style={{ marginLeft: "20px", width: "30%" }}>
                <img
                  style={{ borderRadius: "20px" }}
                  src={`https://afsu.tohidur.com/img/blog-6.jpg`}
                  alt="Profile Page 1"
                />
              </div>
            </div>
            <p className={styles.text}>
              you’re talking about. I am a member of the Imperidiplomatic
              mission to Alderaan good is a reward if you aint tas around to use
              it Besides, attackin station ain’t my idea of courage. It’s more
              like suicide.
            </p>
          </div>

          <DesignPages />

          <div
            className={`w-full flex justify-around ${styles.post_navigation}`}
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

          <div style={{ marginTop: "50px" }}>
            <AboutAuthor
              img="https://afsu.tohidur.com/img/blog-7.jpg"
              name="About Author"
              role="Graphic Designer"
              aboutAuthor="Lorem ipsum dolor sit amet, consectetur adipis Vivamus sceler neque in Nam vitae urnasodales neque in faucibus."
            />
          </div>

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
            <AddComment
              img="https://afsu.tohidur.com/img/comment-2.jpg"
              name="Thomas Walkar"
              date="10 months ago"
              aboutAuthor="Lorem ipsum dolor sit amet, consectetur adipis Vivamus sceler neque in Nam vitae urnasodales neque in faucibus."
            />
          </div>

          <h2 className={styles.title_comment}>Leave a Comment</h2>
          <div style={{ marginTop: "50px" }}>
            <AddCommentForm onAdd={handleAddComment} />
          </div>
        </div>

        {/* Part 2 */}

        <div className="blog-sidebar">
          <div className="recent-news">
            <h2>Recent News</h2>
            <div className="separator"></div>
            <News
              img="https://afsu.tohidur.com/img/recent-news-1.jpg"
              date="December 5, 2023"
              title="Interview Photographer Mark Seliger"
            />
            <News
              img={`https://afsu.tohidur.com/img/recent-news-2.jpg`}
              date={`December 5, 2023`}
              title={`Interview Photographer Mark Seliger`}
            />
            <News
              img={`https://afsu.tohidur.com/img/recent-news-3.jpg`}
              date={`December 5, 2023`}
              title={`Interview Photographer Mark Seliger`}
            />
            <News
              img={`https://afsu.tohidur.com/img/recent-news-4.jpg`}
              date={`December 5, 2023`}
              title={`Interview Photographer Mark Seliger`}
            />
          </div>

          <div className="categories">
            <h2>Categories</h2>
            <div className="separator">
              <Category linkRef="Graphic Design" refNumber="10" />
              <Category linkRef={`Graphic Design`} refNumber={`10`} />

              <Category linkRef={`Ui/Ux Design`} refNumber={`10`} />

              <Category linkRef={`Creative Studio`} refNumber={`10`} />

              <Category linkRef={`Mobile Application`} refNumber={`10`} />
            </div>
          </div>

          <div className="meta-links">
            <h2>Meta Links</h2>
            <div className="separator"></div>
            <a href="#">Log in</a>
          </div>

          <div className="gallery-photos">
            <h2>Gallery Photos</h2>
            <div className="separator"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
