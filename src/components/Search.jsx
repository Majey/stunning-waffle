import { useEffect } from "react";
import { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("Pizza");

  useEffect(() => {
    const demo = () => {
      console.log("Use effect fired");
    };
    demo();
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
