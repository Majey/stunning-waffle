import styles from "./foodItem.module.css";

const FoodItem = ({ food, setFoodID }) => {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image} alt="" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.itemButton} onClick={()=>setFoodID(food.id)}>View Recipe</button>
      </div>
    </div>
  );
};

export default FoodItem;
