import { IMG_BASE_URL } from "../utils/constants";

const RestaurantCard = (props) => {

  const {
    cloudinaryImageId :url,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla: {slaString : deliveryTime}
  } = props?.resData?.info;

  return (
    <div className="res-card flex gap-2 flex-col w-[280px] bg-gray-100 p-3 rounded-sm hover:shadow-lg hover:bg-gray-200">
      <img className="res-logo h-48 rounded-md" src={IMG_BASE_URL+url} alt={name} />
      <h3 className="font-bold text-lg">{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} *</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

// Higher order component - card with discount info
// input -> RestaurantCard  ==>  output RestaurantCardOffer

export const quickDeliveryLabelled = (RestaurantCard) => {
  return (props) => {
    return(
      <div>
        <label className="absolute bg-black text-white py-1 px-3 m-2 font-bold">Quick 🚀</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard;