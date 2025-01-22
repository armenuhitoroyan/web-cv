import React from "react";
import styles from "../style/BlogPage.module.css";
import Footer from "../../components/footer/Footer";
import ParticlesContainer from "../../components/ParticlesContainer";
import bgImage from "../assets/images/bgimg.jpg";
import BlogData from "../../components/BlogData";
import ImageModel from "../../components/ImageModel";
import DesignPages from "../../components/DesignPages";
import PostedCard from "../../components/PostedCard";
import AboutAuthor from "../../components/AboutAuthor";
import AddComment from "../../components/AddComment";
import AddCommentForm from "../../components/form/AddCommentForm";
import News from "../../components/News";

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
    <div className={styles.container}>
      <div className={styles.menu}>
        <ParticlesContainer title="Our Blog" ref="blog" img={bgImage} />
      </div>
      <div className="blog-container">
        <div className="blog-content">
          <BlogData
            img="https://afsu.tohidur.com/img/zoom-3.jpg"
            profileImg="https://afsu.tohidur.com/img/45.jpg"
            date="December 5, 2023"
            author="Willimes Marker"
            title="Professionals with a Global Mindset"
            text={`ipsum dolor sit amet soufflé. I love liquorice oat cake biscuit tiramisu jelly danish Caramels its chorice sweet roll tart. Jelly fruitcake tart caramels marzipan. Brownie I love chocolate that bar sesliquorice. I love to otsie roll dragée bonbon croisnt.`}
            pSize="17px"
          />

          <div className="quote-section">
            <div className="quote-icon">
              <img src="https://afsu.tohidur.com/img/quote-1.png" alt="Quote" />
            </div>
            <div className="quote-text">
              <div className="quote-main">{`“ If you've got an idea, start today. There's no better time than now to get going. That doesn't mean quit your job ”`}</div>
              <p className="quote-author">Writing by Jackson Doe</p>
            </div>
          </div>

          <p className="blog-paragraph">
            lotsie roll dragée bonbon croisnt. Chupa chups lorem sesame snaps
            jelly tiramisu ipsum dolor sit amet soufflé liquorice oat cake
            biscuit tiramisu jelly danish caramels sweet roll tart.
          </p>
          <ul className="bullet-points">
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

          <div className="pouch-section">
            <div className="pouches">
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
            <img
              className="wide-image"
              src="https://afsu.tohidur.com/img/profile-4.jpg"
              alt="Pouch Image"
            />
          </div>

          <DesignPages />

          <div className="post-navigation">
            <PostedCard
              text="Whether you get knocked..."
              content="Previous Post"
            />
            <PostedCard text="It’s whether you get up..." content="Next Post" />
          </div>

          <AboutAuthor
            img="https://afsu.tohidur.com/img/blog-7.jpg"
            name="About Author"
            role="Graphic Designer"
            aboutAuthor="Lorem ipsum dolor sit amet, consectetur adipis Vivamus sceler neque in Nam vitae urnasodales neque in faucibus."
          />

          <h2>02 Comments</h2>
          <AddComment
            img="https://afsu.tohidur.com/img/comment-1.jpg"
            name="Nolwar Disoza"
            date="10 months ago"
            aboutAuthor="Lorem ipsum dolor sit amet, consectetur adipis Vivamus sceler neque in Nam vitae urnasodales neque in faucibus."
          />
          <AddComment
            img="https://afsu.tohidur.com/img/comment-2.jpg"
            name="Thomas Walkar"
            date="10 months ago"
            aboutAuthor="Lorem ipsum dolor sit amet, consectetur adipis Vivamus sceler neque in Nam vitae urnasodales neque in faucibus."
          />

          <h2>Leave a Comment</h2>
          <AddCommentForm onAdd={handleAddComment} />
        </div>

        <div className="blog-sidebar">
          <div className="recent-news">
            <h2>Recent News</h2>
            <div className="separator"></div>
            <News
              img="https://afsu.tohidur.com/img/recent-news-1.jpg"
              date="December 5, 2023"
              title="Interview Photographer Mark Seliger"
            />
          </div>

          <div className="categories">
            <h2>Categories</h2>
            <div className="separator"></div>
            {/* <CategoryLink hRef="Graphic Design" prefNumber="10" /> */}
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
