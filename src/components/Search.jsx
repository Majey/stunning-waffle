import { useEffect } from "react";
import { useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "7204dcc697f2478dab01af6cfe1350cf";

const Search = ({ foodData, setFoodData }) => {
  const [query, setQuery] = useState("Pizza");

  useEffect(() => {
    const fetchFood = async () => {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      setFoodData(data.results);
    };
    fetchFood();
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        value={query}
      />
    </div>
  );
};

export default Search;
