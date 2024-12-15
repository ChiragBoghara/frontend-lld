import { useEffect, useState } from "react";
import styles from "./AutoComplete.module.css";
import useDebounce from "../../Hooks/useDebounce";

const AutoComplete = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [cache, setCache] = useState({});
  const [error, setError] = useState(null);

  const fetchSearchResults = async (searchTerm) => {
    try {
      setError(null);

      if (cache[searchTerm]) {
        setResults(cache[searchTerm]);
      } else {
        const res = await fetch(
          "https://dummyjson.com/products/search?q=" + searchTerm
        );
        if (!res.ok) throw new Error("Failed to fetch results.");

        const data = await res.json();

        setCache((obj) => ({
          ...obj,
          [searchTerm]: data.products,
        }));

        setResults(data.products);
      }
    } catch (e) {
      setError(e.message);
    }
  };

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    if (!debouncedSearchTerm.trim()) {
      setResults([]);
      return;
    }

    fetchSearchResults(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <section className={styles["auto-complete"]}>
      <img
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        alt="google logo"
      />
      <input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products..."
      />
      {error && <p className={styles.error}>{error}</p>}
      {results.map((res) => (
        <p key={res.id}>{res.title}</p>
      ))}
    </section>
  );
};

export default AutoComplete;
