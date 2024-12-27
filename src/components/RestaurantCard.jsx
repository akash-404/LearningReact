import { IMG_BASE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  //  without object destructuring
  // const resData = props.resData;
  // return (
  //   <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
  //     <img
  //       className="res-logo"
  //       src={resData.info.image.url}
  //       alt={resData.info.name}
  //     />
  //     <h3>{resData.info.name}</h3>
  //     <h4>{resData.info.cuisine[0].name}, {resData.info?.cuisine[1]?.name}</h4>
  //     <h4>{resData.info.rating.rating_text} *</h4>
  //     <h4>{resData.info.cft.text}</h4>
  //     <h4>{resData.order.deliveryTime}</h4>
  //   </div>
  // );

  // for zomato data
  // const {
  //   image: { url },
  //   name,
  //   cuisine,
  //   rating: { rating_text },
  //   cft: { text: costForTwo },
  // } = props?.resData?.info;
  // const cuisineNames = cuisine.map((item) => item.name + ", ");
  // const { deliveryTime } = props?.resData?.order;

  // for Swiggy data
  const {
    cloudinaryImageId :url,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla: {slaString : deliveryTime}
  } = props?.resData?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" src={IMG_BASE_URL+url} alt={name} />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} *</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;