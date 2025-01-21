import React from "react";
import styles from "../style/PortfolioPage.module.css";

interface ImageModelProps {
  src: string;
  width: string;
  height: string;
}

const ImageModel: React.FC<ImageModelProps> = ({ src, width, height }) => {
  return (
    <div
      style={{
        width: width,
        height: height,
      }}
      className={`w-full flex  items-center justify-center ${styles.image_container}`}
    >
      <img src={src} alt="Paper Pouch Mockup" />
    </div>
  );
};

export default ImageModel;
