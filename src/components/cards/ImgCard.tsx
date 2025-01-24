import React from "react";
import styles from "../../style/HomePage.module.css";

interface ImageCardProps {
  image: string;
  title: string;
  subtitle: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, title, subtitle }) => {
  return (
    <div className={styles.image_card}>
      <img src={image} alt={title} />
      <div className="w-full flex flex-col  items-center justify-center">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default ImageCard;
