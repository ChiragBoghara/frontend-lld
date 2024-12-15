import styles from "./ShimmerBox.module.css";

const ShimmerBox = ({ value }) => {
    console.log(value);
  return Array(value)
    .fill(1)
    .map((ele, index) => {
      return <div key={index} className={styles["meme-box"]}></div>;
    });
};

export default ShimmerBox;
