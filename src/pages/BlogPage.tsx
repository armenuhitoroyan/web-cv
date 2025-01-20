import React from "react";
import styles from "../style/BlogPage.module.css";
import Footer from "../components/footer/Footer";

const BlogPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to the Blog Page</h1>
      <p>This is the blog page of our React application!</p>
      <Footer />
    </div>
  );
};

export default BlogPage;
