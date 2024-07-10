import { useEffect, useState } from "react";

const FoodDetails = ({ foodID }) => {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const URL = `https://api.spoonacular.com/recipes/${foodID}/information`;
  const API_KEY = "7204dcc697f2478dab01af6cfe1350cf";

  useEffect(() => {
    const recipeDetails = async () => {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      setFood(data);
      setIsLoading(false);
    };
    recipeDetails();
  }, [foodID]);

  return (
    <div>
      <div>
        <h1>{food.title}</h1>
        <img src={food.image} alt="" />
      </div>

      <div>
        <span>
          <strong>⌚{food.readyInMinutes}Minutes</strong>
        </span>
        <span>{food.vegetarian ? "🥕 Vegetarian" : "🍖 Non-Vegetarian"}</span>
        <span>
          <strong>👨‍👨‍👧 Serves {food.servings}</strong>
        </span>
        <span>{food.vegan ? "🐮" : ""}</span>
      </div>

      <div>
        💲<span>{food.pricePerServing / 100} Per serving</span>
      </div>

      <div>
        <h2>Instructions</h2>
        {isLoading ? (
          <p>Loading ... </p>
        ) : (
          food.analyzedInstructions[0].steps.map((step) => <li>{step.step}</li>)
        )}
      </div>
    </div>
  );
};

export default FoodDetails;
