const FoodList = ({ foodData }) => {
  return (
    <div>
      {foodData.map((food) => (
        <h1 key={food.id}>{food.title}</h1>
      ))}
    </div>
  );
};

export default FoodList;
