import { IMG_CDN_URL } from "../shared/constants";
const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  avgRating,
}) => (
  <>
    <div className="restaurant-card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString}</h4>
      <h5>{avgRating}</h5>
      <button className="order-btn">Order Now</button>
    </div>
  </>
);

export default RestaurantCard;
