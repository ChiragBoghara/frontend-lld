import { useState } from "react";
import styles from "./ImageSlider.module.css";

const images = [
  "https://i0.wp.com/picjumbo.com/wp-content/uploads/autumn-wallpaper-free-image.jpg?w=600&quality=80",
  "https://img.freepik.com/free-photo/vibrant-autumn-maple-leaves-nature-beauty-showcased-generated-by-ai_188544-15039.jpg",
  "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg",
  "https://static.desygner.com/wp-content/uploads/sites/13/2022/05/04141642/Free-Stock-Photos-01.jpg",
];

const ImageSlider = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const handlePrev = () => {
    imageIndex > 0
      ? setImageIndex((prev) => prev - 1)
      : setImageIndex(images.length - 1);
  };
  const handleNext = () => {
    setImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className={styles.slider}>
      <div onClick={handlePrev}>Prev</div>
      <img alt="nature" src={images[imageIndex]} />
      <div onClick={handleNext}>Next</div>
    </div>
  );
};

export default ImageSlider;
