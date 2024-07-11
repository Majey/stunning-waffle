import Ingredients from "./Ingredients";

const ItemIngredients = ({ food, isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        food.extendedIngredients.map((item) => (
          <Ingredients item={item}/>
        ))
      )}
    </div>
  );
};

export default ItemIngredients;
