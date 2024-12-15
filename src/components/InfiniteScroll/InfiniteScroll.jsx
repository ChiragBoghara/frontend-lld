import { useEffect, useState } from "react";
import styles from "./InfiniteScroll.module.css";
import ShimmerBox from "../ShimmerBox";

const InfiniteScroll = () => {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMemes = async () => {
    setLoading(true);
    try{
        const data = await fetch("https://meme-api.com/gimme/10");
        const memesData = await data.json();
        setMemes((oldMemes) => [...oldMemes, ...memesData.memes]);
    }catch(e){
        setError(e);
    }finally{
        setLoading(false);
    }
  };
  const handleScroll = ()=>{
    // scrollY = how much I have scrolled
    // innerHeight = height of the window (visible section)
    // body.scrollHeight = total height of the webpage
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        fetchMemes();
      }
  }
  useEffect(() => {
    fetchMemes();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={styles.memes}>
      {error && <p>Something went wrong!</p>}
      {memes.length>0 &&
        memes.map((meme, index) => {
          return (
            <div key={index} className={styles["meme-box"]}>
              <h3>{meme.title}</h3>
              <img src={meme.url} alt={meme.title} />
            </div>
          );
        })}
      {loading && <ShimmerBox value={10}/>}
    </section>
  );
};

export default InfiniteScroll;
