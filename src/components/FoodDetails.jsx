import { useEffect, useState } from "react";
import styles from "./foodDetails.module.css";
import ItemIngredients from "./ItemIngredients";

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
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />

        <div className={styles.recipeDetails}>
          <span>
            <strong>⌚{food.readyInMinutes}Minutes</strong>
          </span>
          <span>
            <strong>👨‍👨‍👧 Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 Vegetarian" : "🍖 Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐮" : ""}</strong>
          </span>
        </div>

        <div>
          <span>
            <strong>💲 {food.pricePerServing / 100}</strong> Per serving
          </span>
        </div>

        <h2>Ingredients</h2>

        <ItemIngredients food={food} isLoading={isLoading} />

        <h2>Instructions</h2>

        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading ... </p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
