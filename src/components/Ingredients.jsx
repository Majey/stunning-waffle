const Ingredients = ({ item }) => {
  return (
    <div>
      <img
        src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
        alt=""
      />
      <h3>{item.name}</h3>
      <h3>
        {item.amount} {item.unit}
      </h3>
    </div>
  );
};

export default Ingredients;
