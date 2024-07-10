import { useEffect, useState } from "react";

const FoodDetails = ({ foodID }) => {
  const [food, setFood] = useState({});
  const URL = `https://api.spoonacular.com/recipes/${foodID}/information`;
  const API_KEY = "7204dcc697f2478dab01af6cfe1350cf";

  useEffect(() => {
    const recipeDetails = async () => {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      setFood(data);
    };
    recipeDetails();
  }, [foodID]);

  return (
    <div>
      Food Details: {foodID}
      {food.title}
      <img src={food.image} alt="" />
    </div>
  );
};

export default FoodDetails;
