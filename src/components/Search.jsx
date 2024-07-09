import { useEffect } from "react";
import { useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "7204dcc697f2478dab01af6cfe1350cf";

const Search = () => {
  const [query, setQuery] = useState("Pizza");

  useEffect(() => {
    const fetchFood = async () => {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results)
    };
    fetchFood();
  }, [query]);

  return (
    <div>
      <input
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        value={query}
      />
    </div>
  );
};

export default Search;
